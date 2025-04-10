import "@/styles/alignments.css";
import CaseHeading from "@/components/cases/typography/CaseHeading";
import Overview from "@/components/cases/Overview";

const CaseOverview = () => {
  return (
    <div className="section-container">
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
  );
};

export default CaseOverview;
