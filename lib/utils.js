// lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// This function combines class names using clsx and then merges Tailwind classes using tailwind-merge
// Example usage:
// cn("text-red-500", "bg-blue-500", className) will properly merge Tailwind classes and custom classes

export function formatClassName(...args) {
  return args.filter(Boolean).join(" ");
}

// Function to handle dynamic class names
export function getVariantClass(variant = "default", styles = {}) {
  return styles[variant] || styles.default || "";
}

// Function to merge refs
export function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}