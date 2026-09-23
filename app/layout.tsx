import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://titanfat.github.io"),
  title: "Andrew Titov — Full Stack Ruby on Rails Engineer",
  description:
    "Full Stack Ruby on Rails Engineer focused on backend systems, PostgreSQL, integrations and reliable product delivery.",
  openGraph: {
    title: "Andrew Titov — Full Stack Ruby on Rails Engineer",
    description:
      "Backend-first full stack engineer working with Rails, PostgreSQL, integrations, web and mobile products.",
    type: "website",
    url: "https://titanfat.github.io",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
