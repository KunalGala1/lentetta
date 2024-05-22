import type { Metadata } from "next";
import { Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";

const font = Sorts_Mill_Goudy({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Len Tetta | Composer",
  description: "Len Tetta is a composer based in Boston.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </>

      <body
        className={
          font.className + " bg-slate-50 text-slate-950 leading-relaxed"
        }
      >
        {children}
      </body>
    </html>
  );
}
