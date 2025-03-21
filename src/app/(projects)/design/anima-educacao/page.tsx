import SideMenuAnima from "@/components/cases/SideMenuAnima";
import CaseHeading from "@/components/cases/CaseHeading";
import CaseOverview from "@/components/cases/CaseOverview";

export default function AnimaEducacao() {
  return (
    <div className="flex flex-col">
      <SideMenuAnima></SideMenuAnima>
      <div className="flex flex-col gap-4 px-6 lg:px-56 2xl:px-96  w-full">
        <CaseHeading headline="build a web platform that is used to generate Bachelor&apos;s and Master&apos;s certificates for more than 350.000 students in Brazil." company="Ânima Educação" link="https://www.linkedin.com/company/animaeducacao/"/>
        <CaseOverview overview={`Ânima Educação is a company responsible for managing multiple private universities within Brazil. In 2020, they realized that its platform could be restructured to attend not only Ânima itself, but other higher education organizations.
          This was possible since the Ministry of Education requirements should be followed by any organization that provides certificates to their students.`}
          date="August 2020 - July 2021"
          role="Product Designer — dti digital + Ânima Educação"
          keywords="User research, visual design, usability testing."
          results="Delivered the new platform to Ânima, which by 2021 was used to attend around 350.000 students."
          />
      </div>
    </div>
  )
}