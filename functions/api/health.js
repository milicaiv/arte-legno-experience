import { jsonResponse } from "../../shared/form-delivery.js";

export function onRequestGet() {
  return jsonResponse({
    ok: true,
    runtime: "cloudflare-pages",
  });
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
