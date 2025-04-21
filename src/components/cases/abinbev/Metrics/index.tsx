import SectionHeading from "@/components/cases/typography/SectionHeading";
import ReviewCard from "@/components/cases/abinbev/ReviewCard";
import Card from "@/components/cases/Card";
import UmuxScore from "@/components/cases/abinbev/UmuxScore";
import Text from "@/components/cases/typography/Text";
import "@/styles/alignments.css";

const Metrics = () => {
  return (
    <div className="section-container">
      <SectionHeading
        title="Metrics"
        text="The UX research team at BEES used UMUX as a baseline usability metric during initial interviews to compare results after testing the final solution."
      />
      <Card decoration={1}>
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-6 w-full sm:w-4/5">
            <h3 className="text-xl sm:text-2xl font-bold leading-snug sm:leading-normal">
              Overall score
            </h3>
            <UmuxScore
              tool="Stoplight"
              score="66.20"
              nps="Detractor"
              acceptance="Marginal"
              adjective="Okay"
              grade="A"
            />
            <div className="flex flex-col gap-4 w-full">
              <div className="border-l pl-2 sm:pl-4">
                <Text
                  text={
                    "Designed as a shorter alternative to SUS, UMUX measures usability by focusing on effectiveness, efficiency, and satisfaction."
                  }
                />
              </div>
              <p className="text-footer">
                Read more about{" "}
                <a
                  href="https://help.qualaroo.com/usability-metric-for-user-experience"
                  rel="noreferrer"
                  target="_blank"
                  className="font-medium hover:text-content-tertiary"
                >
                  UMUX
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-xl sm:text-2xl font-bold leading-snug sm:leading-normal">
              Statements score
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 sm:gap-8">
              <ReviewCard
                emoji="😐"
                percentage="65.07"
                title="Satisfaction"
                description="Stoplight is an average experience."
              />
              <ReviewCard
                emoji="😐"
                percentage="58.73"
                title="Ease of use"
                description="Stoplight is neither easy nor difficult to use."
              />
              <ReviewCard
                emoji="😐"
                percentage="57.14"
                title="Needs met"
                description="Stoplight partially meets my needs and expectations."
              />
              <ReviewCard
                emoji="😦"
                percentage="46.03"
                title="Efficiency"
                description="Stoplight takes too long to get to where I need to go."
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Metrics;
