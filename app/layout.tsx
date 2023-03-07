import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js for Startup and SaaS",
  description: "Crafted for Startup and SaaS Business",
  authors: [{ name: "Rohan Shakya", url: "https://shakyarohan.com.np" }],
  keywords: "startup, sass",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
  },
  openGraph: {
    title: "Next.js for Startup and SaaS",
    description: "Crafted for Startup and SaaS Business",
    url: "https://rohan-startup-website.vercel.app",
    siteName: "Next.js for Startup and SaaS",
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
    title: "Next.js for Startup and SaaS",
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
      <body>{children}</body>
    </html>
  );
}
