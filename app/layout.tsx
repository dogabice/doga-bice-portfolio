import type { Metadata } from "next";
import { Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/ui/language-provider";
import AmbientGlow from "@/components/ui/ambient-glow";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const deploymentHost = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = deploymentHost
  ? deploymentHost.startsWith("http") ? deploymentHost : `https://${deploymentHost}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Doğa Bice — Product Engineer",
    template: "%s · Doğa Bice",
  },
  description: "Product-focused engineer building clear, expressive and useful digital products across web, mobile and AI.",
  applicationName: "Doğa Bice Portfolio",
  keywords: ["product engineer", "full-stack developer", "mobile developer", "AI products", "Doğa Bice"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", playfair.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col"><AmbientGlow /><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
