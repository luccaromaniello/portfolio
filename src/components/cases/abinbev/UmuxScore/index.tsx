import Image from "next/image";

interface UmuxScoreProps {
  tool: string;
  score: string;
  nps: string;
  acceptance: string;
  adjective: string;
  grade: string;
}

const UmuxScore = ({
  tool,
  score,
  nps,
  acceptance,
  adjective,
  grade,
}: UmuxScoreProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 sm:p-8 rounded-lg border border-content-secondary/25">
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col sm:gap-2 sm:pr-2 sm:pb-0">
          <span className="text-lg sm:text-xl font-medium">{tool} score:</span>
          <h4 className="text-5xl sm:text-5xl font-bold leading-snug">
            {score}
          </h4>
        </div>
        <ul className="border-t sm:border-l sm:border-t-0 pt-4 sm:pl-4 sm:pt-0">
          <li>
            <span className="font-medium">NPS: </span>
            <span className="text-content-secondary">{nps}</span>
          </li>
          <li>
            <span className="font-medium">Acceptance: </span>
            <span className="text-content-secondary">{acceptance}</span>
          </li>
          <li>
            <span className="font-medium">Adjective: </span>
            <span className="text-content-secondary">{adjective}</span>
          </li>
          <li>
            <span className="font-medium">Grade: </span>
            <span className="text-content-secondary">{grade}</span>
          </li>
        </ul>
      </div>
      <div>
        <Image
          src="/images/cases/abinbev/umux-ruler.png"
          alt="Visual representation of Stoplight documentation for APIs, focusing on user data. The image illustrates a user-friendly interface with clear documentation, symbolizing efficient management and communication of API-related information."
          priority
          className="w-full h-auto object-contain object-top pointer-events-none"
          quality={100}
          width={50}
          height={50}
          sizes="100%"
        />
      </div>
    </div>
  );
};

export default UmuxScore;
