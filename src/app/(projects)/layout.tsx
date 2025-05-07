import "@/styles/globals.css";
import "@/styles/alignments.css";
import TopNavigation from "@/components/navigation/TopNavigation";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { getSession } from "@/utils/auth";

const satoshiFont = localFont({
  src: "../../../public/satoshi/Satoshi-Variable.woff2",
});

export default async function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <html lang="en">
      <body
        className={`${satoshiFont.className} flex flex-col items-center ${!session.isAuthenticated && "h-screen"}`}
      >
        <div className="default-alignment">
          <TopNavigation />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
