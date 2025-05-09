import type { Metadata } from "next";
import "@/styles/globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import "@/styles/alignments.css";
import TopNavigation from "@/components/navigation/TopNavigation";

const satoshiFont = localFont({
  src: "../../../../public/satoshi/Satoshi-Variable.woff2",
});

export const metadata: Metadata = {
  title: "Lucca Romaniello — About",
  icons: {
    icon: "/images/icons/lucca-icon.svg",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${satoshiFont.className} default-alignment items-center`}>
      <TopNavigation />
      <div className="flex flex-col">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
