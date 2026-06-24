"use client";

import {
  Toaster as ChakraToaster,
  ToastCloseTrigger,
  ToastDescription,
  ToastIndicator,
  ToastRoot,
  ToastTitle,
} from "@chakra-ui/react";
import { toaster } from "@/lib/toaster";

export function Toaster() {
  return (
    <ChakraToaster toaster={toaster}>
      {(toast) => (
        <ToastRoot
          key={toast.id}
          width="auto"
          maxWidth="420px"
          bg="#FFFFFF"
          border="none"
          borderRadius="12px"
          px="24px"
          py="16px"
          boxShadow="0 8px 32px rgba(0,0,0,0.18)"
          unstyled
        >
          <ToastTitle
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="500"
            fontSize="15px"
            color="#000000"
          >
            {toast.title}
          </ToastTitle>
          {toast.description && (
            <ToastDescription
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="300"
              fontSize="13px"
              color="#555555"
              mt="4px"
            >
              {toast.description}
            </ToastDescription>
          )}
        </ToastRoot>
      )}
    </ChakraToaster>
  );
}
