"use server";

export interface ContactFormState {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const service = formData.get("service")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !phone || !email) {
    return { success: false, error: "Please fill in your name, phone, and email." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const payload = {
    name,
    phone,
    email,
    service: service || "General Inquiry",
    message: message || "",
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return { success: false, error: "Something went wrong. Please call us directly." };
      }
    } catch {
      return { success: false, error: "Something went wrong. Please call us directly." };
    }
  } else {
    console.info("[Contact Form Submission]", payload);
  }

  return { success: true };
}
