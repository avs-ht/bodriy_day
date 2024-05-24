import styles from "./layout.module.scss";
import type { Metadata } from "next";
import "./_styles/index.scss";
import localFont from "next/font/local";
import Header from "@/widgets/Header";
import Head from "next/head";
const Stolzl = localFont({
  src: [
    {
      path: "./_styles/fonts/Stolzl-Book.woff2",
      weight: "350",
      style: "normal",
    },
    {
      path: "./_styles/fonts/Stolzl-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
export const metadata: Metadata = {
  title: "Бодрый день",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Stolzl.className}>
        <div className={styles.wrapper}>
          <div className="__container">
            <Header />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
