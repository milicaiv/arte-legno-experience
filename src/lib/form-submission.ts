type FormKind = "contact" | "newsletter";

type SubmissionOptions = {
  kind: FormKind;
  fields: Record<string, string>;
};

const trimEnv = (value: string | undefined) => value?.trim() || "";
const trimField = (value: string | undefined) => value?.trim() || "";

const resolveEndpoint = (kind: FormKind) => {
  const sharedEndpoint = trimEnv(import.meta.env.VITE_FORM_ENDPOINT);

  if (kind === "contact") {
    return trimEnv(import.meta.env.VITE_CONTACT_FORM_ENDPOINT) || sharedEndpoint || "/api/contact";
  }

  return trimEnv(import.meta.env.VITE_NEWSLETTER_FORM_ENDPOINT) || sharedEndpoint || "/api/newsletter";
};

const buildPayload = ({ kind, fields }: SubmissionOptions) => {
  const trimmedFields = Object.fromEntries(
    Object.entries(fields).map(([key, value]) => [key, trimField(value)]),
  );

  return {
    ...trimmedFields,
    formType: kind,
  };
};

const mapProviderErrorMessage = (message?: string) => {
  if (!message) {
    return "Slanje forme nije uspjelo.";
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
      throw new Error(
        "Kontakt servis nije dostupan. Lokalno pokrenite `npm run dev:api` ili podesite `VITE_CONTACT_FORM_ENDPOINT`.",
      );
    }

    if (options.kind === "newsletter") {
      throw new Error(
        "Newsletter servis nije dostupan. Lokalno pokrenite `npm run dev:api` ili podesite `VITE_NEWSLETTER_FORM_ENDPOINT`.",
      );
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
      throw new Error("Kontakt servis je odgovorio greskom. Provjerite konfiguraciju email servisa.");
    }

    if (options.kind === "newsletter" && !data?.message) {
      throw new Error("Newsletter servis je odgovorio greskom. Provjerite konfiguraciju email servisa.");
    }

    throw new Error(mapProviderErrorMessage(data?.message));
  }

  return data;
}
