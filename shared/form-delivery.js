const RESEND_API_URL = "https://api.resend.com/emails";
const CONTACT_REQUIRED_FIELDS = ["name", "email", "subject", "message"];
const NEWSLETTER_REQUIRED_FIELDS = ["email"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONTACT_SUBJECT_LABELS = {
  "custom-furniture": "Namještaj po mjeri",
  "art-objects": "Umjetnički drveni predmeti",
  "interior-design": "Enterijerski dizajn od drveta",
  gifts: "Ručni pokloni",
  other: "Ostali upiti",
};

const trimValue = (value) => (typeof value === "string" ? value.trim() : "");

const readEnv = (env, key) => trimValue(env?.[key]);

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatContactSubject = (subject) => CONTACT_SUBJECT_LABELS[subject] || subject;

const toPublicErrorMessage = (providerMessage) => {
  const normalizedMessage = trimValue(providerMessage).toLowerCase();

  if (!normalizedMessage) {
    return "Email servis trenutno nije dostupan. Pokušajte ponovo za nekoliko trenutaka.";
  }

  if (normalizedMessage.includes("rate limit")) {
    return "Servis za slanje je trenutno zauzet. Pokušajte ponovo za nekoliko trenutaka.";
  }

  if (
    normalizedMessage.includes("api key") ||
    normalizedMessage.includes("forbidden") ||
    normalizedMessage.includes("unauthorized") ||
    normalizedMessage.includes("domain is not verified") ||
    normalizedMessage.includes("verify a domain")
  ) {
    return "Email servis nije ispravno konfigurisan. Provjerite Resend ključ i verifikaciju domena.";
  }

  return "Slanje nije uspjelo. Pokušajte ponovo za nekoliko trenutaka.";
};

const createJsonHeaders = () => ({
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
});

export class SubmissionError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "SubmissionError";
    this.status = status;
  }
}

export const jsonResponse = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: createJsonHeaders(),
  });

export const jsonErrorResponse = (error) => {
  if (error instanceof SubmissionError) {
    return jsonResponse(
      {
        success: false,
        message: error.message,
      },
      error.status,
    );
  }

  console.error("Unhandled form submission error:", error);

  return jsonResponse(
    {
      success: false,
      message: "Doslo je do neocekivane greske. Pokusajte ponovo za nekoliko trenutaka.",
    },
    500,
  );
};

export async function parseJsonRequest(request) {
  try {
    return await request.json();
  } catch {
    throw new SubmissionError(400, "Neispravan format zahtjeva.");
  }
}

const normalizeContactPayload = (payload) => ({
  name: trimValue(payload?.name),
  email: trimValue(payload?.email),
  subject: trimValue(payload?.subject),
  message: trimValue(payload?.message),
});

const normalizeNewsletterPayload = (payload) => ({
  email: trimValue(payload?.email),
});

const getMissingFields = (payload, requiredFields) =>
  requiredFields.filter((field) => !trimValue(payload?.[field]));

const assertValidEmail = (email) => {
  if (!EMAIL_PATTERN.test(email)) {
    throw new SubmissionError(400, "Email adresa nije ispravna.");
  }
};

const resolveMailboxConfig = (env, kind) => {
  const recipient =
    readEnv(env, `${kind}_FORM_RECIPIENT`) ||
    readEnv(env, "CONTACT_FORM_RECIPIENT") ||
    readEnv(env, "FORM_RECIPIENT");
  const sender =
    readEnv(env, `${kind}_FORM_SENDER`) ||
    readEnv(env, "CONTACT_FORM_SENDER") ||
    readEnv(env, "FORM_SENDER");

  if (!recipient || !sender) {
    throw new SubmissionError(
      500,
      "Email konfiguracija nije dovrsena. Dodajte sender i recipient adrese u okruzenje.",
    );
  }

  return { recipient, sender };
};

const assertResendConfig = (env) => {
  const apiKey = readEnv(env, "RESEND_API_KEY");

  if (!apiKey) {
    throw new SubmissionError(
      500,
      "Email servis nije konfigurisan. Dodajte RESEND_API_KEY u okruženje.",
    );
  }

  return apiKey;
};

const sendEmailWithResend = async (env, payload, fetchImpl = fetch) => {
  const apiKey = assertResendConfig(env);
  const response = await fetchImpl(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "arte-legno-experience/1.0",
    },
    body: JSON.stringify(payload),
  });

  let data = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const providerMessage = data?.message || data?.error?.message || data?.name;
    throw new SubmissionError(502, toPublicErrorMessage(providerMessage));
  }

  return data;
};

export async function submitContactForm(payload, env, fetchImpl = fetch) {
  const normalizedPayload = normalizeContactPayload(payload);
  const missingFields = getMissingFields(normalizedPayload, CONTACT_REQUIRED_FIELDS);

  if (missingFields.length > 0) {
    throw new SubmissionError(400, `Nedostaju obavezna polja: ${missingFields.join(", ")}.`);
  }

  assertValidEmail(normalizedPayload.email);

  const { recipient, sender } = resolveMailboxConfig(env, "CONTACT");
  const readableSubject = formatContactSubject(normalizedPayload.subject);

  await sendEmailWithResend(
    env,
    {
      from: `Arte Legno kontakt forma <${sender}>`,
      to: [recipient],
      subject: `Novi upit: ${readableSubject}`,
      reply_to: normalizedPayload.email,
      text: [
        "Stigao je novi upit sa kontakt forme.",
        "",
        `Ime: ${normalizedPayload.name}`,
        `Email: ${normalizedPayload.email}`,
        `Tema: ${readableSubject}`,
        "",
        "Poruka:",
        normalizedPayload.message,
      ].join("\n"),
      html: `
        <h2>Novi upit sa kontakt forme</h2>
        <p><strong>Ime:</strong> ${escapeHtml(normalizedPayload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(normalizedPayload.email)}</p>
        <p><strong>Tema:</strong> ${escapeHtml(readableSubject)}</p>
        <p><strong>Poruka:</strong></p>
        <p>${escapeHtml(normalizedPayload.message).replace(/\n/g, "<br />")}</p>
      `,
    },
    fetchImpl,
  );

  return {
    success: true,
    message: "Poruka je uspjesno poslana.",
  };
}

export async function submitNewsletterForm(payload, env, fetchImpl = fetch) {
  const normalizedPayload = normalizeNewsletterPayload(payload);
  const missingFields = getMissingFields(normalizedPayload, NEWSLETTER_REQUIRED_FIELDS);

  if (missingFields.length > 0) {
    throw new SubmissionError(400, `Nedostaju obavezna polja: ${missingFields.join(", ")}.`);
  }

  assertValidEmail(normalizedPayload.email);

  const { recipient, sender } = resolveMailboxConfig(env, "NEWSLETTER");

  await sendEmailWithResend(
    env,
    {
      from: `Arte Legno newsletter <${sender}>`,
      to: [recipient],
      subject: "Nova newsletter prijava",
      reply_to: normalizedPayload.email,
      text: ["Stigla je nova prijava na newsletter.", "", `Email: ${normalizedPayload.email}`].join("\n"),
      html: `
        <h2>Nova newsletter prijava</h2>
        <p><strong>Email:</strong> ${escapeHtml(normalizedPayload.email)}</p>
      `,
    },
    fetchImpl,
  );

  return {
    success: true,
    message: "Uspjesno ste prijavljeni na newsletter.",
  };
}
