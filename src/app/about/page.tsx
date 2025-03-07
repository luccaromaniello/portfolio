import WorkItem from "@/components/WorkItem";

const About = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-6 text-base/7">
        <h1 className="text-3xl sm:text-5xl leading-tight sm:leading-snug font-medium">I&apos;m currently a Product Designer at AB InBev.</h1>
        <div className="flex flex-col gap-6 text-content-secondary">
          <p>I began my career as a software developer, where I quickly realized the power of technology to bring ideas to life. As I collaborated with talented designers, I found myself drawn to the creative side of development, which led me to shift my focus towards design. Despite the shift, I continued to develop my technical expertise through a Software Engineering degree.</p>
          <p>Over time, working closely with teams to create user-focused and technically feasible solutions was rewarding, but I found myself missing the problem-solving aspect of development — the challenge of figuring out how to make things work. I missed the thrill of solving complex challenges and the satisfaction of building functional, interactive experiences from the ground up.</p>
          <p>Now, I&apos;m excited to fully embrace frontend development, where I can leverage both my design sensibilities and technical expertise. I thrive in environments that push me to innovate, and I’m ready to take on new challenges where I can continue learning and building impactful digital products.</p>
        </div>
      </div>
      <div className="flex flex-row sm:gap-16 border-t">
        <h2 className="sm:text-4xl">Work</h2>
        <div className="flex flex-col w-full">
          <WorkItem startDate="Sep 22" role="Product Designer" company="AB InBev (BEES)" sector="E-commerce/SaaS" location="Remote" current/>
          <WorkItem startDate="Feb 22" endDate="Sep 22" role="Product Designer" company="Conexa Saúde" sector="Mobile network" location="Remote" current={false}/>
          <WorkItem startDate="Aug 21" endDate="Feb 22" role="Product Designer" company="fluke" sector="Healthcare" location="Remote" current={false}/>
          <WorkItem startDate="Jul 20" endDate="Aug 21" role="Product Designer" company="dti digital + Ânima Educação" sector="Higher education" location="Remote" current={false}/>
          <WorkItem startDate="Apr 19" endDate="Jul 20" role="Full Stack Developer" company="dti digital" sector="Car rental" location="Belo Horizonte, Brazil" current={false}/>
        </div>
      </div>
    </div>
  )
};

export default About;