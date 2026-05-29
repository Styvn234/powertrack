"use client";

import { Toaster } from "sonner";

export function ClientToaster() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#0F1B2A",
          color: "#E8EEF5",
          border: "1px solid #1F2A3D",
        },
      }}
    />
  );
}
