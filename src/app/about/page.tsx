import EducationItem from "@/components/EducationItem";
import WorkItem from "@/components/WorkItem";

const About = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-6 text-base/7">
        <h1 className="text-3xl sm:text-5xl leading-tight sm:leading-snug font-medium">I&apos;m currently a Product Designer at AB InBev.</h1>
        <div className="flex flex-col gap-6 text-lg text-content-secondary">
          <p>I began my career as a software developer, where I quickly realized the power of technology to bring ideas to life. As I collaborated with talented designers, I found myself drawn to the creative side of development, which led me to shift my focus towards design. Despite the shift, I continued to develop my technical expertise through a Software Engineering degree.</p>
          <p>Over time, working closely with teams to create user-focused and technically feasible solutions was rewarding, but I found myself missing the problem-solving aspect of development — the challenge of figuring out how to make things work. I missed the thrill of solving complex challenges and the satisfaction of building functional, interactive experiences from the ground up.</p>
          <p>Now, I&apos;m excited to fully embrace frontend development, where I can leverage both my design sensibilities and technical expertise. I thrive in environments that push me to innovate, and I’m ready to take on new challenges where I can continue learning and building impactful digital products.</p>
        </div>
      </div>
      <div className="flex flex-col sm:gap-8 border-t">
        <h2 className="sm:text-4xl pt-8">Work</h2>
        <div className="flex flex-col w-full pb-16">
          <WorkItem startDate="Sep 22" role="Product Designer" company="AB InBev" sector="E-commerce/SaaS" description="AB InBev is a global beverage and brewing leader, and owns brands like Budweiser, Corona, and Stella Artois. I led a developer web portal redesign with cross-functional teams, boosting system usability by 9.63%, user satisfaction by 9.21%, and task efficiency by 13.97% in 3 months. I also led development of multiple features for other apps including admin tools, ERP integration, order and deliveries management, resulting in increased efficiency and cost savings." location="Remote" current />
          <WorkItem 
            startDate="Aug 21" endDate="Feb 22" role="Product Designer" company="fluke" sector="Healthcare" description="fluke is a brazilian Mobile Virtual Network Operator focused on simplifying processes that are commonly bureaucratic in traditional mobile operators in Brazil. I was responsible for multiple improvements of the SIM card acquisition flow, which resulted in a user contact rate
reduction and increased customer satisfaction." location="Remote" current={false} />
          <WorkItem startDate="Feb 22" endDate="Sep 22" role="Product Designer" company="Conexa Saúde" sector="Mobile network" description="Conexa Saúde is recognized as the largest integrated healthcare platform in Latin America, facilitating connections between patients, doctors, and healthcare institutions through telemedicine services. I contributed to multiple improvements in the doctors' experience, actively participating from conception to implementation of various features." location="Remote" current={false} />
          <WorkItem startDate="Jul 20" endDate="Aug 21" role="Product Designer" company="dti digital + Ânima Educação" sector="Higher education" description="Ânima Educação is a company responsible for managing multiple private universities within Brazil. I helped to build a web platform that allowed their internal staff from Ânima to generate Bachelor’s and Master’s certificates for their 350.000+ students, following the Brazilian Ministry of Education requirements." location="Remote" current={false} />
          <WorkItem startDate="Apr 19" endDate="Jul 20" role="Full Stack Developer" company="dti digital + Localiza&Co" sector="Urban mobility" description="Localiza&Co offers complete mobility solutions for individuals and businesses, including car rentals, car subscriptions, fleet outsourcing, and sales of vehicles, operating across 7 countries in Latin America through franchises. There, I was a mobile and backend developer for an app migration from hybrid to native used by thier carport operators." location="Belo Horizonte, Brazil" current={false} />
        </div>
      </div>
      <div className="flex flex-col sm:gap-8 pb-24 border-t">
        <h2 className="sm:text-4xl pt-8">Education</h2>
        <div className="flex flex-col w-full">
          <EducationItem description="Self-taught: always learning from every book, article, co-worker, and life experience" location="Anywhere" always/>
          <EducationItem description="Full Stack Development, Postgraduate degree (Lato sensu)" school="Pontifícia Católica Universidade de Minas Gerais" startDate="2024" endDate="2025" location="Remote" always={false}/>
          <EducationItem description="Software Engineering, Bachelor’s degree" school="Pontifícia Católica Universidade de Minas Gerais" startDate="2018" endDate="2022" location="Belo Horizonte, Brazil" always={false}/>
        </div>
      </div>
    </div>
  )
};

export default About;