import Overview from "@/components/cases/Overview";
import HighlightCard from "@/components/cases/HighlightCard";
import Image from "next/image";
import SideMenu from "@/components/cases/anima/SideMenu";
import { DEFAULT_ALIGNMENT } from "@/constants";
import Research from "@/components/cases/anima/Research";
import CaseHeading from "@/components/cases/typography/CaseHeading";

export default function AnimaEducacao() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <SideMenu />
      <div className={`${DEFAULT_ALIGNMENT} gap-12 sm:gap-20 sm:pb-4`}>
        <CaseHeading
          headline="build a web platform that is used to generate Bachelor's and Master's certificates for more than 350.000 students in Brazil."
          company="Ânima Educação"
          link="https://www.linkedin.com/company/animaeducacao/"
        />
        <Overview
          overview={`Ânima Educação is a company responsible for managing multiple private universities within Brazil. In 2020, they realized that its platform could be restructured to attend not only Ânima itself, but other higher education organizations.
            \nThis was possible since the Ministry of Education requirements should be followed by any organization that provides certificates to their students.`}
          date="August 2020 - July 2021"
          role="Product Designer — dti digital + Ânima Educação"
          keywords="User research, visual design, usability testing."
          results="Delivered the new platform to Ânima, which by 2021 was used to attend around 350.000 students."
        />
      </div>
      <div className="flex flex-row relative w-full 2xl:max-w-screen-4xl h-[296px] sm:h-[856px] 2xl:h-[1048px]">
        <Image
          src="/images/cases/anima/anima-overview.png"
          alt="A web platform by Ânima Educação showcasing a user-friendly mockup overview for generating personalized Bachelor's and Master's degrees."
          priority
          fill
          className="object-contain object-top"
          quality={100}
        />
      </div>
      <div className={DEFAULT_ALIGNMENT}>
        <HighlightCard
          title={
            "Developing education management software for all higher education institutions in Brazil."
          }
          description={`In 2020, Ânima recognized that its platform could be restructured to serve not only its own needs but also other higher education organizations, as all must comply with Ministry of Education requirements for issuing certificates.
          \n This led to the creation of A2S Technology for Education, a company derived from Ânima, aiming to offer education management software, including a certificate issuance platform, to other institutions.`}
        />
      </div>
      <div className={DEFAULT_ALIGNMENT}>
        <Research />
      </div>
    </div>
  );
}
