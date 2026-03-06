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
      </head>
      <body>{children}</body>
    </html>
  );
}
