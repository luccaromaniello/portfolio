import SideMenu from "@/components/cases/abinbev/SideMenu";
import CaseOverview from "@/components/cases/CaseOverview";
import Section from "@/components/cases/Section";

export default function AbInbev() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <SideMenu />
      <Section
        id="overview"
        image={{
          url: "/images/cases/anima/anima-overview.png",
          alt: "A web platform by Ânima Educação showcasing a user-friendly mockup overview for generating personalized Bachelor's and Master's degrees.",
        }}
      >
        {/* <CaseOverview /> */}
      </Section>
    </div>
  );
}
