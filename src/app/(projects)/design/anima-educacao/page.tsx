import SideMenuAnima from "@/components/cases/SideMenuAnima";
import CaseHeading from "@/components/cases/CaseHeading";

export default function AnimaEducacao() {
  return (
    <div className="flex flex-col">
      <SideMenuAnima></SideMenuAnima>
      <div className="flex flex-col gap-4 px-6 lg:px-56 2xl:px-96  w-full">
        <CaseHeading headline="build a web platform that is used to generate Bachelor&apos;s and Master&apos;s certificates for more than 350.000 students in Brazil." company="Ânima Educação" link="https://www.linkedin.com/company/animaeducacao/"/>
      </div>
    </div>
  )
}