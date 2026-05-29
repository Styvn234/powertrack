"use server";

import { prisma } from "@/src/lib/prisma";

export type ContactActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function createContactMessage(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const inquiryType = String(formData.get("inquiryType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !inquiryType || !message) {
    return {
      status: "error",
      message: "Please fill in all required fields.",
    };
  }

  try {
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        inquiryType,
        message,
      },
    });

    return {
      status: "success",
      message: "Message sent! We will get back to you shortly.",
    };
  } catch (error) {
    console.error("Failed to save contact message", error);
    return {
      status: "error",
      message: "Something went wrong while saving your message.",
    };
  }
}
