import SectionHeading from "@/components/cases/typography/SectionHeading";
import "@/styles/alignments.css";
import VideoContainer from "@/components/cases/VideoContainer";

const Solution = () => {
  return (
    <div className="section-container">
      <SectionHeading
        title="Solution"
        text="The updated BEES developer portal unifies documentation into a single reference, addressing issues with Stoplight. It centralizes information to promote consistency and simplify integration for both internal teams and partners."
      />
      <VideoContainer
        url="/videos/cases/abinbev/homepage.mp4"
        title="Homepage"
        description="Crafted with a focus on marketing strategy, the developer portal showcases the BEES integration kit, helping facilitate partnerships."
      />
    </div>
  );
};

export default Solution;
