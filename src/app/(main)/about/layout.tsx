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
  description:
    "Software Engineer specializing in Frontend development, with 6+ years of experience across startups and multinational companies. Former Product Designer, bringing a strong design sense and user-focused mindset to engineering teams. Proven ability to combine design and development skills to deliver high-quality, and scalable products.",
  icons: {
    icon: "/lucca-icon.svg",
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
