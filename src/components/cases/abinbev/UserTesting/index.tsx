import SectionHeading from "@/components/cases/typography/SectionHeading";
import Card from "@/components/cases/Card";
import "@/styles/alignments.css";

const UserTesting = () => {
  return (
    <div className="section-container">
      <SectionHeading
        title="User testing"
        text={`During initial prototyping, we tested usability with 6 users via Maze, followed by a UMUX survey. Results showed confusion around information hierarchy, section names, and page purposes, leading mainly to changes in information architecture.
          \nVisually, the design remains nearly identical and will be detailed in the next section.`}
      />
      <div className="flex flex-col gap-4 text-center">
        <div className="flex flex-row gap-4">
          <div className="w-full">
            <Card
              image={{
                url: "/images/cases/abinbev/maze.png",
                alt: "Screenshot of the usability test setting in Maze website.",
                width: 2170,
                height: 1440,
              }}
            />
          </div>
          <div className="w-full">
            <Card
              image={{
                url: "/images/cases/abinbev/usability-test-sheet.png",
                alt: "A usability test spreadsheet containing the actions we asked our users to take on the prototype, along with follow-up questions.",
                width: 3840,
                height: 1940,
              }}
            />
          </div>
        </div>
        <p className="text-footer">
          Snapshots of the Maze page used for the usability test and the follow
          up script containing additional questions.
        </p>
      </div>
    </div>
  );
};

export default UserTesting;
