import express from "express";
import {
  SubmissionError,
  jsonErrorResponse,
  submitContactForm,
  submitNewsletterForm,
} from "../shared/form-delivery.js";

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(express.json({ limit: "1mb" }));

const sendExpressJson = async (res, action) => {
  try {
    const payload = await action();
    return res.json(payload);
  } catch (error) {
    if (error instanceof SubmissionError) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }

    const response = jsonErrorResponse(error);
    const body = await response.json();
    return res.status(response.status).json(body);
  }
};

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, runtime: "express" });
});

app.post("/api/contact", async (req, res) =>
  sendExpressJson(res, () => submitContactForm(req.body, process.env)),
);

app.post("/api/newsletter", async (req, res) =>
  sendExpressJson(res, () => submitNewsletterForm(req.body, process.env)),
);

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});
