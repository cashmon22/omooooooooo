export const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNEky8K6Turw5oXvwBILoaG74EQhAgkJugmN82qL16eB5xhCkeEvSaOpN_MT31ikk/exec";
export const FORM_SUBMISSION_ERROR = "Unable to submit your form. Please try again.";

type AppsScriptResponse = { success?: boolean };

export async function submitFormToAppsScript(formType: string, formData: Record<string, unknown>) {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, submittedAt: new Date().toISOString(), ...formData }),
    });
    const result = await response.json().catch(() => null) as AppsScriptResponse | null;
    if (!response.ok || result?.success !== true) throw new Error("Form submission failed");
    return result;
  } catch {
    throw new Error(FORM_SUBMISSION_ERROR);
  }
}
