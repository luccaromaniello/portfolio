import SideMenuAnima from "@/components/cases/SideMenuAnima";
import CaseHeading from "@/components/cases/CaseHeading";

export default function AnimaEducacao() {
  return (
    <div className="flex flex-col">
      <SideMenuAnima></SideMenuAnima>
      <div className="flex flex-col gap-4 px-6 lg:px-56 2xl:px-96  w-full">
        <h1 className="text-3xl sm:text-4xl leading-tight sm:leading-snug font-bold pt-8">I helped <CaseHeading text="Ânima Educação" link="https://www.linkedin.com/company/animaeducacao/"/> to build a web platform that is used to generate Bachelor&apos;s and Master&apos;s certificates for more than 350.000 students in Brazil.</h1>
      </div>
    </div>
  )
}