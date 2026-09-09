const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvkodbjw";
const submittingFormTypes = new Set<string>();

export const FORM_SUBMISSION_ERROR = "Unable to submit your form. Please try again.";

export async function submitForm(formType: string, formData: Record<string, unknown>) {
  if (submittingFormTypes.has(formType)) throw new Error(FORM_SUBMISSION_ERROR);

  submittingFormTypes.add(formType);
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, formType, submittedAt: new Date().toISOString() }),
    });

    if (!response.ok) throw new Error("Form submission failed");
  } catch {
    throw new Error(FORM_SUBMISSION_ERROR);
  } finally {
    submittingFormTypes.delete(formType);
  }
}
