import "./globals.css";

/** @type {import("next").Viewport} */
export const viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};
export const metadata = {
  title: "Multi-Blog Platform",
  description:
    "A high-performance multi-blog platform with subfolder routing and SEO optimization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
