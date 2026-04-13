type FormKind = "contact" | "newsletter";

type SubmissionOptions = {
  kind: FormKind;
  fields: Record<string, string>;
};

const trimEnv = (value: string | undefined) => value?.trim() || "";

const resolveEndpoint = (kind: FormKind) => {
  if (kind === "contact") {
    return trimEnv(import.meta.env.VITE_CONTACT_FORM_ENDPOINT) || "/api/contact";
  }

  return trimEnv(import.meta.env.VITE_NEWSLETTER_FORM_ENDPOINT) || "/api/newsletter";
};

const buildPayload = ({ kind, fields }: SubmissionOptions) => {
  const basePayload: Record<string, string> = {
    ...fields,
    _captcha: "false",
    _template: "table",
    _subject:
      kind === "contact"
        ? `Arte Legno kontakt: ${fields.subject || "Nova poruka"}`
        : "Arte Legno newsletter prijava",
    formType: kind,
  };

  if (fields.email) {
    basePayload._replyto = fields.email;
  }

  return basePayload;
};

const mapProviderErrorMessage = (message?: string) => {
  if (!message) {
    return "Slanje forme nije uspjelo.";
  }

  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("needs activation") || normalizedMessage.includes("activate form")) {
    return "Forma jos nije aktivirana. Otvorite inbox adrese za prijem poruka i kliknite na 'Activate Form' email koji je FormSubmit poslao.";
  }

  return message;
};

export async function submitWebsiteForm(options: SubmissionOptions) {
  let response: Response;

  try {
    response = await fetch(resolveEndpoint(options.kind), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(buildPayload(options)),
    });
  } catch (error) {
    if (options.kind === "contact") {
      throw new Error("Kontakt API nije dostupan. Pokrenite `npm run dev:api` i provjerite SMTP postavke u `.env.local`.");
    }

    if (options.kind === "newsletter") {
      throw new Error("Newsletter API nije dostupan. Pokrenite `npm run dev:api` i provjerite SMTP postavke u `.env.local`.");
    }

    throw new Error(error instanceof Error ? error.message : "Slanje forme nije uspjelo.");
  }

  const text = await response.text();
  let data: { message?: string; success?: boolean | string } | null = null;

  if (text) {
    try {
      data = JSON.parse(text) as { message?: string; success?: boolean | string };
    } catch {
      data = null;
    }
  }

  if (!response.ok || data?.success === false || data?.success === "false") {
    if (options.kind === "contact" && !data?.message) {
      throw new Error("Kontakt API je odgovorio greskom. Provjerite da li je backend pokrenut i da li je SMTP ispravno podesen.");
    }

    if (options.kind === "newsletter" && !data?.message) {
      throw new Error("Newsletter API je odgovorio greskom. Provjerite da li je backend pokrenut i da li je SMTP ispravno podesen.");
    }

    throw new Error(mapProviderErrorMessage(data?.message));
  }

  return data;
}
