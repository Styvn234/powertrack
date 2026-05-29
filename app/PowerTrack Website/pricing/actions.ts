"use server";

import { supabaseAdmin } from "@/src/lib/supabase";
import { randomUUID } from "crypto";

export type PreOrderActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function createPreOrder(
  _prevState: PreOrderActionState,
  formData: FormData
): Promise<PreOrderActionState> {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phoneNumberRaw = String(formData.get("phoneNumber") ?? "").trim();
  const dialCode = String(formData.get("dialCode") ?? "").trim();
  const plan = String(formData.get("plan") ?? "").trim();
  const deviceCountRaw = Number(formData.get("deviceCount") ?? 0);
  const specialRequirements = String(
    formData.get("specialRequirements") ?? ""
  ).trim();

  if (!fullName || !email || !phoneNumberRaw || !plan) {
    return {
      status: "error",
      message: "Please complete all required fields.",
    };
  }

  const deviceCount = Number.isFinite(deviceCountRaw) && deviceCountRaw > 0
    ? Math.floor(deviceCountRaw)
    : 1;

  const phoneNumber = dialCode
    ? `${dialCode} ${phoneNumberRaw}`
    : phoneNumberRaw;

  const branchName = String(formData.get("branchName") ?? "").trim();
  const branchCity = String(formData.get("branchCity") ?? "").trim();
  const branchProvince = String(formData.get("branchProvince") ?? "").trim();
  const branchAddress = String(formData.get("branchAddress") ?? "").trim();
  const branchNotes = String(formData.get("branchNotes") ?? "").trim();

  const branches = branchName || branchCity || branchProvince || branchAddress || branchNotes
    ? [
        {
          name: branchName,
          city: branchCity,
          province: branchProvince,
          address: branchAddress,
          notes: branchNotes,
        },
      ]
    : undefined;

  const proofBillingFile = formData.get("proofBilling");
  const validIdFrontFile = formData.get("validIdFront");
  const validIdBackFile = formData.get("validIdBack");

  const proofBillingFileName = proofBillingFile instanceof File && proofBillingFile.size > 0
    ? proofBillingFile.name
    : undefined;
  const validIdFrontFileName = validIdFrontFile instanceof File && validIdFrontFile.size > 0
    ? validIdFrontFile.name
    : undefined;
  const validIdBackFileName = validIdBackFile instanceof File && validIdBackFile.size > 0
    ? validIdBackFile.name
    : undefined;

  try {
    const { error } = await supabaseAdmin.from("preorder_application").insert({
      id: randomUUID(),
      fullName,
      email,
      phoneNumber,
      plan,
      deviceCount,
      branches: branches ?? null,
      specialRequirements: specialRequirements || null,
      proofBillingFileName: proofBillingFileName ?? null,
      validIdFrontFileName: validIdFrontFileName ?? null,
      validIdBackFileName: validIdBackFileName ?? null,
    });

    if (error) {
      throw error;
    }

    return {
      status: "success",
      message: "Pre-order submitted! We will follow up shortly.",
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "string"
          ? error
          : typeof error === "object" && error && "message" in error
            ? String(error.message)
            : "Unknown error";
    console.error("Failed to save pre-order", error);
    return {
      status: "error",
      message: `Unable to submit the pre-order right now. ${message}`,
    };
  }
}
