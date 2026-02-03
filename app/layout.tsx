import "./globals.css";
import type { ReactNode } from "react";
import { AppShell } from "@/components/app-shell";

export const metadata = {
  title: "Cool Books – Simple Invoicing",
  description: "Mobile-first invoicing for sole traders.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
