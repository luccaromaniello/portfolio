import SideMenuAnima from "@/components/cases/SideMenuAnima";
import Heading from "@/components/cases/Heading";
import Overview from "@/components/cases/Overview";
import HighlightCard from "@/components/cases/HighlightCard";

export default function AnimaEducacao() {
  const defaultAlignment = "flex flex-col gap-20 px-6 lg:px-56 2xl:px-96 w-full";

  return (
    <div className="flex flex-col">
      <SideMenuAnima></SideMenuAnima>
      <div className={defaultAlignment}>
        <Heading
          headline="build a web platform that is used to generate Bachelor&apos;s and Master&apos;s certificates for more than 350.000 students in Brazil."
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
      <div className={defaultAlignment}>
        <HighlightCard 
          title={"Creating education management software that any higher education company in Brazil can use."} 
          description={`In 2020, Ânima realized that its platform could be restructured to attend not only Ânima itself, but other higher education organizations. This was possible since the Ministry of Education requirements should be followed by any organization that provides certificates to their students. 
          \n Then, a company derived from Ânima called A2S Technology for Education came to life and its purpose was to offer education management software for other education organizations, including the certificate emission platform.`}/>
      </div>
    </div>
  )
}