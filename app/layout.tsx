import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";
import "../styles/index.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "InnovateIQ | Accelerating Your Startup and SaaS Success",
  description:
    "Our website provides startup and SaaS solutions, including website design, development, marketing strategies, and business consulting services. We help businesses at any stage to succeed in today's competitive market and reach their full potential.",
  authors: [{ name: "Rohan Shakya", url: "https://shakyarohan.com.np" }],
  keywords: "startup, sass",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
  },
  openGraph: {
    title: "InnovateIQ | Accelerating Your Startup and SaaS Success",
    description:
      "Our website provides startup and SaaS solutions, including website design, development, marketing strategies, and business consulting services. We help businesses at any stage to succeed in today's competitive market and reach their full potential.",
    url: "https://rohan-startup-website.vercel.app",
    siteName: "InnovateIQ | Accelerating Your Startup and SaaS Success",
    images: [
      {
        url: "https://rohan-startup-website.vercel.app/images/logo/logo.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://rohan-startup-website.vercel.app",
    creator: "Rohan Shakya",
    images: "https://rohan-startup-website.vercel.app/images/logo/logo.svg",
  },
  themeColor: "#4A6CF7",
  publisher: "Vercel",
  appleWebApp: {
    capable: true,
    title: "InnovateIQ | Accelerating Your Startup and SaaS Success",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
