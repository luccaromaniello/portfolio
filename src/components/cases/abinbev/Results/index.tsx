import SectionHeading from "@/components/cases/typography/SectionHeading";
import ReviewCard from "@/components/cases/abinbev/ReviewCard";
import Card from "@/components/cases/Card";
import UmuxScore from "@/components/cases/abinbev/UmuxScore";
import Text from "@/components/cases/typography/Text";
import "@/styles/alignments.css";

const Results = () => {
  return (
    <div className="section-container">
      <SectionHeading
        title="Results and outcomes"
        text="Using the initial UMUX results as a baseline, we conducted the questionnaire again after testing the final solution. Here are the outcomes for the developer portal."
      />
      <Card decoration={1}>
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-6 w-full sm:w-4/5">
            <h3 className="text-xl sm:text-2xl font-bold leading-snug sm:leading-normal">
              Overall score
            </h3>
            <UmuxScore
              tool="Dev. portal"
              score="75.83"
              nps="Passive"
              acceptance="Acceptable"
              adjective="Good"
              grade="B"
            />
            <div className="flex flex-col gap-4 w-full">
              <p className="text-lg text-feedback-success font-medium">
                Overall increase of 9.63% by comparing UMUX results of Stoplight
                usage and the proposed new developer portal.
              </p>
              <Text
                text={
                  "By the end of 2023, BEES began developing and implementing the new developer portal, with the goal of eventually covering all its APIs."
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-xl sm:text-2xl font-bold leading-snug sm:leading-normal">
              Statements score
            </h3>
            <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-4 sm:gap-6 2xl:gap-8">
              <ReviewCard
                emoji="😐"
                percentage="72.28"
                increase="9.21"
                title="Satisfaction"
                description="Dev. portal is an average experience."
              />
              <ReviewCard
                emoji="😐"
                percentage="62.85"
                increase="4.12"
                title="Ease of use"
                description="Dev. portal is neither easy or hard to use."
              />
              <ReviewCard
                emoji="😐"
                percentage="62.85"
                increase="5.71"
                title="Needs met"
                description="Dev. portal partially meets my needs and expectations."
              />
              <ReviewCard
                emoji="😐"
                percentage="60.00"
                increase="13.97"
                title="Efficiency"
                description="Dev. portal takes a while to get to where I need to go."
              />
            </div>
            <p className={`text-footer text-center`}>
              Emojis and content in each statement vary based on results,
              following material from BEES’s UX Research team.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Results;
