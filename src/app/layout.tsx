import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yummy Experience",
  description: "Yummy Experience Hackhaton",
  icons: {
    icon: {
      url: "/images/motorcycle.svg",
      type: "image/svg",
    },
    shortcut: { url: "/images/motorcycle.png", type: "image/svg" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`h-screen mx-auto sm:max-w-full md:max-w-[400px]`}>
        {children}
      </body>
    </html>
  );
}
