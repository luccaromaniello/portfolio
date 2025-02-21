import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="grid grid-cols-[480px_1fr]">
        <div>
          <Image
            src="/lucca-icon.svg"
            alt="An illustration of Lucca holding a laptop with mountains and a galaxy sky behind."
            width={60}
            height={60}
            priority
          />
          <p>I began my career as a software developer, but collaborating with talented designers inspired me to transition into design. Despite the shift, I continued to develop my technical expertise through a Software Engineering degree. </p>
          <p>Now, I thrive in a role where I can leverage both my design skills and technical knowledge to collaborate effectively with development teams, ensuring designs are technically viable and aligned with user and business goals.</p>
        </div>
      </main>
    </div>
  );
}
