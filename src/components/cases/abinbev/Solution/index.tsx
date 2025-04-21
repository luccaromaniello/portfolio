import SectionHeading from "@/components/cases/typography/SectionHeading";
import "@/styles/alignments.css";
import VideoContainer from "@/components/cases/media/VideoContainer";

const Solution = () => {
  return (
    <div className="section-container">
      <SectionHeading
        title="Solution"
        text="The updated BEES developer portal unifies documentation into a single reference, addressing issues with Stoplight. It centralizes information to promote consistency and simplify integration for both internal teams and partners."
      />
      <div className="flex flex-col gap-16">
        <VideoContainer
          url="/videos/cases/abinbev/homepage.mp4"
          title="Homepage"
          description="Crafted with a focus on marketing strategy, the developer portal showcases the BEES integration kit, helping facilitate partnerships."
        />
        <VideoContainer
          url="/videos/cases/abinbev/api-docs.mp4"
          title="API documentation"
          description="Aligned with BEES’s API structure, technical and business documentation are now combined on a single page, enhancing partner self-sufficiency during integration."
        />
        <VideoContainer
          url="/videos/cases/abinbev/reports.mp4"
          title="Reports"
          description="Enabled higher-level users to easily identify implemented APIs per partner, simplifying progress tracking and clarifying information that was previously confusing in Stoplight."
        />
        <VideoContainer
          url="/videos/cases/abinbev/release-notes.mp4"
          title="Release notes"
          description="APIs regularly used by multiple teams continue to receive consistent updates. Teams can now easily check the portal for the latest changes, removing the need for manual Slack alerts."
        />
        <VideoContainer
          url="/videos/cases/abinbev/products.mp4"
          title="Products"
          description="At its core, BEES’s B2B e-commerce ecosystem runs on a SaaS platform suite. Centralized product documentation ensures smooth integration and understanding across all teams."
        />
        <VideoContainer
          url="/videos/cases/abinbev/faq.mp4"
          title="FAQ"
          description="We're enabling developers to troubleshoot independently by organizing common issues and solutions in an FAQ, reducing reliance on tech teams and customer support."
        />
      </div>
    </div>
  );
};

export default Solution;
