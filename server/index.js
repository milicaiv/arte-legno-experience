import express from "express";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

const port = Number(process.env.PORT || 3001);

const requiredFields = ["name", "email", "subject", "message"];
const newsletterRequiredFields = ["email"];

const getMissingFields = (payload) =>
  requiredFields.filter((field) => !String(payload?.[field] || "").trim());

const getNewsletterMissingFields = (payload) =>
  newsletterRequiredFields.filter((field) => !String(payload?.[field] || "").trim());

const parseBoolean = (value, fallback) => {
  if (value === undefined) {
    return fallback;
  }

  return value === "true";
};

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const createTransport = () => {
  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpSecure = parseBoolean(process.env.SMTP_SECURE, smtpPort === 465);
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const smtpService = process.env.SMTP_SERVICE?.trim();

  if (!smtpUser || !smtpPass) {
    throw new Error("SMTP kredencijali nisu podeseni.");
  }

  if (smtpService) {
    return nodemailer.createTransport({
      service: smtpService,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
  }

  if (!smtpHost) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
};

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const missingFields = getMissingFields(req.body);

  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: `Nedostaju obavezna polja: ${missingFields.join(", ")}.`,
    });
  }

  const recipient = process.env.CONTACT_FORM_RECIPIENT?.trim() || process.env.SMTP_USER?.trim();
  const sender = process.env.CONTACT_FORM_SENDER?.trim() || process.env.SMTP_USER?.trim();

  if (!recipient || !sender) {
    return res.status(500).json({
      success: false,
      message: "Email konfiguracija nije dovrsena.",
    });
  }

  const { name, email, subject, message } = req.body;

  try {
    const transport = createTransport();

    await transport.sendMail({
      from: `"Arte Legno kontakt forma" <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: `Novi upit: ${subject}`,
      text: [
        "Stigao je novi upit sa kontakt forme.",
        "",
        `Ime: ${name}`,
        `Email: ${email}`,
        `Tema: ${subject}`,
        "",
        "Poruka:",
        message,
      ].join("\n"),
      html: `
        <h2>Novi upit sa kontakt forme</h2>
        <p><strong>Ime:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Tema:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Poruka:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.json({
      success: true,
      message: "Poruka je uspjesno poslana.",
    });
  } catch (error) {
    console.error("Contact form send error:", error);

    return res.status(500).json({
      success: false,
      message:
        error instanceof Error && error.message === "SMTP kredencijali nisu podeseni."
          ? "SMTP nije konfigurisan. Dodajte SMTP_USER i SMTP_PASS u .env.local."
          : "Slanje poruke nije uspjelo. Provjerite SMTP postavke i pokusajte ponovo.",
    });
  }
});

app.post("/api/newsletter", async (req, res) => {
  const missingFields = getNewsletterMissingFields(req.body);

  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: `Nedostaju obavezna polja: ${missingFields.join(", ")}.`,
    });
  }

  const recipient =
    process.env.NEWSLETTER_FORM_RECIPIENT?.trim() ||
    process.env.CONTACT_FORM_RECIPIENT?.trim() ||
    process.env.SMTP_USER?.trim();
  const sender =
    process.env.NEWSLETTER_FORM_SENDER?.trim() ||
    process.env.CONTACT_FORM_SENDER?.trim() ||
    process.env.SMTP_USER?.trim();

  if (!recipient || !sender) {
    return res.status(500).json({
      success: false,
      message: "Email konfiguracija nije dovrsena.",
    });
  }

  const { email } = req.body;

  try {
    const transport = createTransport();

    await transport.sendMail({
      from: `"Arte Legno newsletter" <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: "Nova newsletter prijava",
      text: [
        "Stigla je nova prijava na newsletter.",
        "",
        `Email: ${email}`,
      ].join("\n"),
      html: `
        <h2>Nova newsletter prijava</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      `,
    });

    return res.json({
      success: true,
      message: "Uspjesno ste prijavljeni na newsletter.",
    });
  } catch (error) {
    console.error("Newsletter form send error:", error);

    return res.status(500).json({
      success: false,
      message:
        error instanceof Error && error.message === "SMTP kredencijali nisu podeseni."
          ? "SMTP nije konfigurisan. Dodajte SMTP_USER i SMTP_PASS u .env.local."
          : "Prijava na newsletter nije uspjela. Provjerite SMTP postavke i pokusajte ponovo.",
    });
  }
});

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});
