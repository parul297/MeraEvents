import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ErrorBoundary } from "@/components/error-boundary";
import { AppSidebarProvider } from "@/components/sidebar-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Event & Attendee Management Portal",
  description: "Manage events and their registration lists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetMono.variable} antialiased`}>
        <ErrorBoundary>
          <Providers>
            <AppSidebarProvider>{children}</AppSidebarProvider>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
