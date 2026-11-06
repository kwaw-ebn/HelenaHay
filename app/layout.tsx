import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "HelenaHay | Shop in Ghana & Source from China",
  description: "Ask about products available in Ghana or request China sourcing with real product videos before you approve a purchase.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en-GH"><body>{children}</body></html>;
}
