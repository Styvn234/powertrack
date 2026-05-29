"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Layers, X, Plus, UploadCloud } from "lucide-react";
import { paths } from "../lib/paths";
import { toast } from "sonner";
import { useFormStatus } from "react-dom";
import { createPreOrder, type PreOrderActionState } from "./actions";

export default function PricingPage() {
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Starter Kit");
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dialCode: "+63",
    plan: "Starter Kit",
    deviceCount: "1",
    specialRequirements: "",
    branchName: "",
    branchCity: "",
    branchProvince: "",
    branchAddress: "",
    branchNotes: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    fullName: false,
    email: false,
    phoneNumber: false,
    plan: false,
  });
  const [fileNames, setFileNames] = useState({
    proofBilling: "",
    validIdFront: "",
    validIdBack: "",
  });
  const fileInputRefs = useRef({
    proofBilling: null as HTMLInputElement | null,
    validIdFront: null as HTMLInputElement | null,
    validIdBack: null as HTMLInputElement | null,
  });
  const [state, formAction] = useActionState<PreOrderActionState>(
    createPreOrder,
    { status: "idle" }
  );
  const lastStatus = useRef(state.status);

  const tiers = [
    {
      name: "Starter Kit",
      price: "$149",
      description: "Everything you need to monitor a single location.",
      bestFor: "Homes & Hobbyists",
      included: [
        "1x PowerTrack ESP32 Module",
        "1x Non-invasive Current Clamp",
        "Lifetime access to Core Dashboard",
        "Real-time mobile web access",
        "Standard email support",
      ],
      cta: "Pre-Order Starter",
      popular: false,
    },
    {
      name: "Business Bundle",
      price: "$449",
      description: "Multi-node monitoring for complex environments.",
      bestFor: "Commercial / Small Offices",
      included: [
        "3x Multi-node Modules",
        "3x High-capacity Current Clamps",
        "Advanced Analytics Dashboard",
        "CSV Data Export tools",
        "Priority support channel",
      ],
      cta: "Pre-Order Business",
      popular: true,
    },
    {
      name: "Enterprise / Custom",
      price: "Custom",
      description: "Tailored solutions for large-scale deployments.",
      bestFor: "Industrial / Scale",
      included: [
        "Custom hardware deployment",
        "API integration access",
        "Dedicated account manager",
        "On-premise deployment options",
        "24/7 phone support",
      ],
      cta: "Contact Sales",
      popular: false,
      link: paths.contact,
    },
  ];

  useEffect(() => {
    if (!isPreOrderOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreOrderOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPreOrderOpen]);

  useEffect(() => {
    if (state.status !== lastStatus.current) {
      if (state.status === "success") {
        toast.success(state.message);
        setIsPreOrderOpen(false);
        setFormValues((current) => ({
          ...current,
          fullName: "",
          email: "",
          phoneNumber: "",
          plan: "Starter Kit",
          deviceCount: "1",
          specialRequirements: "",
          branchName: "",
          branchCity: "",
          branchProvince: "",
          branchAddress: "",
          branchNotes: "",
        }));
        setSelectedPlan("Starter Kit");
        setFieldErrors({
          fullName: false,
          email: false,
          phoneNumber: false,
          plan: false,
        });
        setFileNames({
          proofBilling: "",
          validIdFront: "",
          validIdBack: "",
        });
      }

      if (state.status === "error") {
        toast.error(state.message ?? "Unable to submit pre-order.");
      }

      lastStatus.current = state.status;
    }
  }, [state.status, state.message]);

  const openPreOrder = (planName: string) => {
    setSelectedPlan(planName);
    setFormValues((current) => ({
      ...current,
      plan: planName,
    }));
    setIsPreOrderOpen(true);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
    if (name === "plan") {
      setSelectedPlan(value);
    }
  };

  const handleFileChange = (
    field: "proofBilling" | "validIdFront" | "validIdBack",
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileName = event.target.files?.[0]?.name ?? "";
    setFileNames((current) => ({
      ...current,
      [field]: fileName,
    }));
  };

  const handleFileClear = (
    field: "proofBilling" | "validIdFront" | "validIdBack"
  ) => {
    const input = fileInputRefs.current[field];
    if (input) {
      input.value = "";
    }
    setFileNames((current) => ({
      ...current,
      [field]: "",
    }));
  };

  const handlePreOrderSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const missing = {
      fullName: formValues.fullName.trim().length === 0,
      email: formValues.email.trim().length === 0,
      phoneNumber: formValues.phoneNumber.trim().length === 0,
      plan: formValues.plan.trim().length === 0,
    };

    setFieldErrors(missing);

    if (missing.fullName || missing.email || missing.phoneNumber || missing.plan) {
      event.preventDefault();
      toast.error("Please complete all required fields.");
    }
  };

  const fieldClassName = (hasError: boolean) =>
    `w-full bg-powertrack-bg border rounded-xl px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal ${
      hasError
        ? "border-red-500/70 focus:border-red-500"
        : "border-powertrack-border"
    }`;

  const PreOrderSubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        disabled={pending}
        className="px-6 py-3 rounded-xl bg-powertrack-accent-teal text-[#0A1320] text-sm font-semibold shadow-lg shadow-powertrack-accent-teal/20 disabled:opacity-70"
      >
        {pending ? "Submitting..." : "Create Application"}
      </button>
    );
  };

  return (
    <div className="pt-20 pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-powertrack-surface-elevated border border-powertrack-border text-powertrack-text-secondary text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <Layers size={12} />
            Plans
          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="font-sans font-bold text-4xl sm:text-6xl tracking-tight mb-6 text-powertrack-text"
          >
            Simple pricing for <br />
            <span className="text-powertrack-text-secondary font-medium">
              powerful insights.
            </span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="text-lg text-powertrack-muted"
          >
            Hardware and software, bundled together. No hidden monthly fees for
            core features.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.1 + 0.2,
              }}
              className={`relative bg-powertrack-surface rounded-2xl border ${
                tier.popular
                  ? "border-powertrack-accent-teal"
                  : "border-powertrack-border"
              } p-8 flex flex-col h-full`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-powertrack-accent-teal/10 text-powertrack-accent-teal text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full flex items-center gap-1.5 border border-powertrack-accent-teal/30">
                  <Zap size={12} />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-powertrack-text">
                  {tier.name}
                </h3>
                <p className="text-powertrack-muted text-sm mb-6 h-10">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight text-powertrack-text">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-powertrack-muted text-sm font-medium">
                      one-time
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-8 flex-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-powertrack-muted mb-4">
                  BEST FOR:{" "}
                  <span className="text-powertrack-text-secondary">
                    {tier.bestFor}
                  </span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-powertrack-muted mb-4">
                  WHAT'S INCLUDED
                </div>
                <ul className="space-y-3">
                  {tier.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-powertrack-text-secondary"
                    >
                      <Check
                        size={16}
                        className="text-powertrack-accent-teal shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tier.price === "Custom" ? (
                <Link
                  href={tier.link ?? paths.contact}
                  className={`w-full py-3.5 rounded-lg font-semibold text-center transition-all text-sm ${
                    tier.popular
                      ? "bg-powertrack-accent-teal text-[#0A1320] hover:bg-powertrack-accent-teal-hover"
                      : "bg-powertrack-surface-elevated text-powertrack-text border border-powertrack-border hover:border-powertrack-accent-teal hover:text-powertrack-accent-teal"
                  }`}
                >
                  {tier.cta}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => openPreOrder(tier.name)}
                  className={`w-full py-3.5 rounded-lg font-semibold text-center transition-all text-sm ${
                    tier.popular
                      ? "bg-powertrack-accent-teal text-[#0A1320] hover:bg-powertrack-accent-teal-hover"
                      : "bg-powertrack-surface-elevated text-powertrack-text border border-powertrack-border hover:border-powertrack-accent-teal hover:text-powertrack-accent-teal"
                  }`}
                >
                  {tier.cta}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-powertrack-border bg-powertrack-surface-elevated px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-powertrack-text-secondary">
          New Application
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-powertrack-text">
          Ready to pre-order your kit?
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-powertrack-muted">
          Submit your application and we will confirm availability, installation
          details, and delivery options for your location.
        </p>
        <button
          type="button"
          onClick={() => openPreOrder("Starter Kit")}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-powertrack-accent-teal px-8 py-3 text-sm font-semibold text-[#0A1320] shadow-lg shadow-powertrack-accent-teal/20"
        >
          Start Pre-Order
        </button>
      </div>

      {isPreOrderOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsPreOrderOpen(false)}
          ></div>
          <div className="relative w-full max-w-5xl bg-powertrack-surface border border-powertrack-border rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between border-b border-powertrack-border px-6 sm:px-8 py-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-powertrack-text-secondary">
                  Pre-Order Application
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-powertrack-text">
                  Add New Application
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsPreOrderOpen(false)}
                className="h-9 w-9 flex items-center justify-center rounded-full border border-powertrack-border text-powertrack-muted hover:text-powertrack-text"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-y-auto px-6 sm:px-8 py-6">
              <form
                className="space-y-8"
                action={formAction}
                onSubmit={handlePreOrderSubmit}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-powertrack-text-secondary">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Business contact name"
                      value={formValues.fullName}
                      onChange={handleInputChange}
                      aria-invalid={fieldErrors.fullName}
                      className={fieldClassName(fieldErrors.fullName)}
                    />
                    {fieldErrors.fullName && (
                      <p className="text-[11px] text-red-300">
                        Full name is required.
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-powertrack-text-secondary">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="client@company.com"
                      value={formValues.email}
                      onChange={handleInputChange}
                      aria-invalid={fieldErrors.email}
                      className={fieldClassName(fieldErrors.email)}
                    />
                    {fieldErrors.email && (
                      <p className="text-[11px] text-red-300">
                        Email address is required.
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-powertrack-text-secondary">
                      Phone Number
                    </label>
                    <div className="flex gap-3">
                      <div className="w-20 bg-powertrack-bg border border-powertrack-border rounded-xl px-3 py-3 text-sm text-powertrack-text">
                        {formValues.dialCode}
                      </div>
                      <input type="hidden" name="dialCode" value={formValues.dialCode} />
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="917 123 4567"
                        value={formValues.phoneNumber}
                        onChange={handleInputChange}
                        aria-invalid={fieldErrors.phoneNumber}
                        className={`flex-1 ${fieldClassName(fieldErrors.phoneNumber)}`}
                      />
                    </div>
                    {fieldErrors.phoneNumber && (
                      <p className="text-[11px] text-red-300">
                        Phone number is required.
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-powertrack-text-secondary">
                      Plan
                    </label>
                    <select
                      value={selectedPlan}
                      onChange={handleSelectChange}
                      name="plan"
                      aria-invalid={fieldErrors.plan}
                      className={fieldClassName(fieldErrors.plan)}
                    >
                      {tiers
                        .filter((tier) => tier.price !== "Custom")
                        .map((tier) => (
                          <option key={tier.name} value={tier.name}>
                            {tier.name}
                          </option>
                        ))}
                    </select>
                        {fieldErrors.plan && (
                          <p className="text-[11px] text-red-300">
                            Please select a plan.
                          </p>
                        )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-powertrack-text-secondary">
                      Device Count
                    </label>
                    <input
                      type="number"
                      name="deviceCount"
                      min={1}
                          value={formValues.deviceCount}
                          onChange={handleInputChange}
                          className={fieldClassName(false)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-powertrack-text">
                        Branches
                      </h3>
                      <p className="text-xs text-powertrack-muted">
                        Add locations where devices will be installed.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full border border-powertrack-border px-4 py-2 text-xs font-semibold text-powertrack-accent-teal hover:border-powertrack-accent-teal"
                    >
                      <Plus size={14} />
                      Add branch
                    </button>
                  </div>

                  <div className="border border-powertrack-border rounded-2xl p-6 bg-powertrack-bg">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-powertrack-muted mb-4">
                      Branch 1
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="branchName"
                        placeholder="Branch or office name"
                        value={formValues.branchName}
                        onChange={handleInputChange}
                        className="w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-xl px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal"
                      />
                      <input
                        type="text"
                        name="branchCity"
                        placeholder="City"
                        value={formValues.branchCity}
                        onChange={handleInputChange}
                        className="w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-xl px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal"
                      />
                      <input
                        type="text"
                        name="branchProvince"
                        placeholder="Province"
                        value={formValues.branchProvince}
                        onChange={handleInputChange}
                        className="w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-xl px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal"
                      />
                      <input
                        type="text"
                        name="branchNotes"
                        placeholder="Branch notes"
                        value={formValues.branchNotes}
                        onChange={handleInputChange}
                        className="w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-xl px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal"
                      />
                      <textarea
                        rows={2}
                        name="branchAddress"
                        placeholder="Address"
                        value={formValues.branchAddress}
                        onChange={handleInputChange}
                        className="md:col-span-2 w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-xl px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-powertrack-text-secondary">
                    Special Requirements
                  </label>
                  <textarea
                    rows={4}
                    name="specialRequirements"
                    placeholder="Optional notes, delivery instructions, or review context"
                    value={formValues.specialRequirements}
                    onChange={handleInputChange}
                    className="w-full bg-powertrack-bg border border-powertrack-border rounded-2xl px-4 py-4 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      label: "Proof of Billing",
                      name: "proofBilling" as const,
                      fileName: fileNames.proofBilling,
                    },
                    {
                      label: "Valid ID Front",
                      name: "validIdFront" as const,
                      fileName: fileNames.validIdFront,
                    },
                    {
                      label: "Valid ID Back",
                      name: "validIdBack" as const,
                      fileName: fileNames.validIdBack,
                    },
                  ].map(({ label, name, fileName }) => (
                    <label
                      key={name}
                      className="border border-powertrack-border rounded-2xl p-4 bg-powertrack-bg text-sm text-powertrack-text flex flex-col gap-3 cursor-pointer"
                    >
                      <span className="text-xs font-semibold text-powertrack-text-secondary">
                        {label}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-lg border border-powertrack-border px-3 py-2 text-xs font-semibold text-powertrack-accent-teal w-fit">
                        <UploadCloud size={14} />
                        Choose File
                      </span>
                      <div className="flex items-center justify-between gap-2 text-[11px] text-powertrack-muted">
                        <span className="truncate">
                          {fileName || "No file chosen"}
                        </span>
                        {fileName && (
                          <button
                            type="button"
                            onClick={(event) => {
                              event.preventDefault();
                              handleFileClear(name);
                            }}
                            className="text-[11px] font-semibold text-powertrack-accent-teal hover:text-powertrack-accent-teal-hover"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <input
                        type="file"
                        name={name}
                        onChange={(event) => handleFileChange(name, event)}
                        ref={(element) => {
                          fileInputRefs.current[name] = element;
                        }}
                        className="hidden"
                      />
                    </label>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPreOrderOpen(false)}
                    className="px-6 py-3 rounded-xl border border-powertrack-border text-sm font-semibold text-powertrack-muted hover:text-powertrack-text"
                  >
                    Cancel
                  </button>
                  <PreOrderSubmitButton />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
