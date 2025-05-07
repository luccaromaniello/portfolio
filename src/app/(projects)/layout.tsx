import "@/styles/globals.css";
import "@/styles/alignments.css";
import TopNavigation from "@/components/navigation/TopNavigation";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const satoshiFont = localFont({
  src: "../../../public/satoshi/Satoshi-Variable.woff2",
});

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${satoshiFont.className} flex flex-col items-center`}>
        <div className="default-alignment">
          <TopNavigation />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
