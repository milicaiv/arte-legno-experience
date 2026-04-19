import {
  jsonErrorResponse,
  jsonResponse,
  parseJsonRequest,
  submitNewsletterForm,
} from "../../shared/form-delivery.js";

export async function onRequestPost(context) {
  try {
    const payload = await parseJsonRequest(context.request);
    const result = await submitNewsletterForm(payload, context.env, fetch);
    return jsonResponse(result);
  } catch (error) {
    return jsonErrorResponse(error);
  }
}

export function onRequest() {
  return jsonResponse(
    {
      success: false,
      message: "Metoda nije dozvoljena.",
    },
    405,
  );
}
