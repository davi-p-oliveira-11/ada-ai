import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ada AI – Automated Customer Support & AI Chatbots for Businesses",
  description:
    "Ada AI helps companies automate customer support with powerful AI chatbots, instant responses, and scalable workflows. Improve CX, reduce workload, and deliver faster support with automation.",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialised">{children}</body>
    </html>
  );
}
