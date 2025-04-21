import "@/styles/alignments.css";
import Text from "@/components/cases/typography/Text";
import Image from "next/image";

const BeesOverview = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col gap-12 sm:gap-20 px-6 sm:px-16 sm:pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold leading-snug sm:leading-normal">
          BEES is a worldwide B2B E-commerce and SaaS platform.
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 2xl:gap-20 sm:items-center">
          <div className="flex flex-row gap-4 relative w-full">
            <Image
              src="/images/cases/abinbev/bees-app-1.png"
              alt="Example of BEES B2B e-commerce app home screen, highlighting an interface for beverage purchases and streamlined shopping experiences, with integrated reward program benefits."
              priority
              className="object-contain object-top pointer-events-none"
              quality={100}
              layout="responsive"
              width={50}
              height={50}
            />
            <Image
              src="/images/cases/abinbev/bees-app-2.png"
              alt="Example of BEES B2B e-commerce app home screen, highlighting an interface for beverage purchases and streamlined shopping experiences, with integrated reward program benefits."
              priority
              className="object-contain object-top pointer-events-none"
              quality={100}
              layout="responsive"
              width={400}
              height={50}
            />
          </div>
          <Text
            text={`BEES is a B2B e-commerce platform supporting over 6 million small and medium-sized retailers worldwide, with a portfolio of 500 iconic brands.
            \nRetailers can browse products, place orders, earn rewards, schedule deliveries, manage invoices, and access business insights all in one place.
            \nBEES also offers a suite of SaaS products that help partners and retailers boost sales, optimize logistics, harness data-driven insights, and empower frontline teams.`}
          />
        </div>
      </div>
    </div>
  );
};

export default BeesOverview;
