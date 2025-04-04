import EducationItem from "@/components/about/EducationItem";
import WorkItem from "@/components/about/WorkItem";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-16 pt-8 sm:pt-12">
      <div className="flex flex-col sm:flex-row gap-32 pb-16 items-center">
        <div className="flex flex-col gap-6 text-base/7">
          <h1 className="text-3xl sm:text-5xl leading-tight sm:leading-snug font-medium">
            I&apos;m currently a Product Designer at AB InBev.
          </h1>
          <div className="flex flex-col gap-6 text-md sm:text-lg text-content-secondary">
            <p>
              I began my career as a software developer, where I quickly
              discovered the power of technology to bring ideas to life. As I
              collaborated with talented designers, I grew interested in the
              creative side of development, which led me to shift towards
              product design.
            </p>
            <p>
              Despite the shift, I continued to develop my technical expertise
              in Software Engineering. Over time, working closely with teams to
              create user-focused solutions was rewarding, but I found myself
              missing the problem-solving aspect of development — the thrill of
              solving complex challenges and building interactive experiences
              from scratch.
            </p>
            <p>
              Now, I&apos;m excited to focus on frontend development, where I
              can combine my design sensibilities with technical skills to
              innovate and build impactful digital products.
            </p>
          </div>
        </div>
        <div className="hidden sm:flex flex-row basis-64 shrink-0 relative">
          <Image
            src="/lucca-profile.png"
            alt="Picture of Lucca Romaniello."
            priority
            width={280}
            height={480}
            className="rounded-lg border border-content-primary object-top"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:gap-8 border-t">
        <h2 className="text-3xl sm:text-4xl pt-8">Experience</h2>
        <div className="flex flex-col w-full pb-8">
          <WorkItem
            startDate="Sep 22"
            role="Product Designer"
            company="AB InBev"
            website="https://www.ab-inbev.com/"
            sector="E-commerce/SaaS"
            technologies={["User experience", "User research", "Figma"]}
            description="AB InBev is a global beverage and brewing leader, and owns brands like Budweiser, Corona, and Stella Artois. I led a developer web portal redesign with cross-functional teams, boosting system usability by 9.63%, user satisfaction by 9.21%, and task efficiency by 13.97% in 3 months. I also led development of multiple features for other apps including admin tools, ERP integration, order and deliveries management, resulting in increased efficiency and cost savings."
            location="Remote"
            current
          />
          <WorkItem
            startDate="Aug 21"
            endDate="Feb 22"
            role="Product Designer"
            company="fluke"
            website="https://flu.ke/"
            sector="Healthcare"
            technologies={[
              "Design workshops",
              "Customer experience",
              "Data visualization",
            ]}
            description="fluke is a brazilian Mobile Virtual Network Operator focused on simplifying processes that are commonly bureaucratic in traditional mobile operators in Brazil. I was responsible for multiple improvements of the SIM card acquisition flow, which resulted in a user contact rate
reduction and increased customer satisfaction."
            location="Remote"
            current={false}
          />
          <WorkItem
            startDate="Feb 22"
            endDate="Sep 22"
            role="Product Designer"
            company="Conexa Saúde"
            website="https://www.conexasaude.com.br/"
            sector="Mobile network"
            technologies={["Prototyping", "User interviews"]}
            description="Conexa Saúde is recognized as the largest integrated healthcare platform in Latin America, facilitating connections between patients, doctors, and healthcare institutions through telemedicine services. I contributed to multiple improvements in the doctors' experience, actively participating from conception to implementation of various features."
            location="Remote"
            current={false}
          />
          <WorkItem
            startDate="Jul 20"
            endDate="Aug 21"
            role="Product Designer"
            company="dti digital + Ânima Educação"
            website="https://www.dtidigital.com.br/"
            sector="Higher education"
            technologies={[
              "UI/UX design",
              "Design systems",
              "Usability testing",
            ]}
            description="Ânima Educação is a company responsible for managing multiple private universities within Brazil. I helped to build a web platform that allowed their internal staff from Ânima to generate Bachelor’s and Master’s certificates for their 350.000+ students, following the Brazilian Ministry of Education requirements."
            location="Remote"
            current={false}
          />
          <WorkItem
            startDate="Apr 19"
            endDate="Jul 20"
            role="Full Stack Developer"
            company="dti digital + Localiza&Co"
            website="https://www.dtidigital.com.br/"
            sector="Urban mobility"
            technologies={[
              "React.js",
              "Vue.js",
              "ASP.NET",
              "Kotlin",
              "Flutter",
            ]}
            description="Localiza&Co offers complete mobility solutions for individuals and businesses, including car rentals, car subscriptions, fleet outsourcing, and sales of vehicles, operating across 7 countries in Latin America through franchises. There, I was a mobile and backend developer for an app migration from hybrid to native used by thier carport operators. I also worked a frontend developer for an internal software used for visual management and merit money."
            location="Belo Horizonte, Brazil"
            current={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:gap-8 pb-20 sm:pb-24 border-t">
        <h2 className="text-3xl sm:text-4xl pt-8">Education</h2>
        <div className="flex flex-col w-full">
          <EducationItem
            description="Self-taught: always learning from every book, article, co-worker, and life experience"
            location="Anywhere"
            always
          />
          <EducationItem
            description="Full Stack Development, Postgraduate degree (Lato sensu)"
            school="Pontifícia Católica Universidade de Minas Gerais"
            website="https://www.linkedin.com/school/pucminas/"
            startDate="2024"
            endDate="2025"
            location="Remote"
            always={false}
          />
          <EducationItem
            description="Software Engineering, Bachelor’s degree"
            school="Pontifícia Católica Universidade de Minas Gerais"
            startDate="2018"
            website="https://www.linkedin.com/school/pucminas/"
            endDate="2022"
            location="Belo Horizonte, Brazil"
            always={false}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
