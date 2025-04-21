import Tab from "@/components/cases/tabs/Tab";
import SectionHeading from "@/components/cases/typography/SectionHeading";
import ResearchOverview from "@/components/cases/abinbev/ResearchOverview";
import "@/styles/alignments.css";

const Research = () => {
  const tabs = [
    {
      title: "Interviews and survey",
      type: 0,
      attributes: {
        description: `We interviewed 10 users, including partners, zone managers, product managers, and developers. The survey was shared with 34 people in similar roles, some of whom were also interviewed. The goal was to understand their experiences with Stoplight, focusing on questions like:
        \n • How would you describe your experience with Stoplight?
        • What tasks do you use Stoplight for?
        • Which features do you find most useful?
        • What challenges or frustrations have you encountered?`,
        image: {
          url: "/images/cases/abinbev/interviews.png",
          alt: "Snapshot for Ânima's persona documentation, derived from thorough user research.",
        },
      },
    },
    {
      title: "Information architecture",
      type: 0,
      attributes: {
        description:
          "API organization was a challenge due to conflicting team views. We proposed a structure based on research, but its implementation and future updates will be handled by developers and content managers.",
        image: {
          url: "/images/cases/abinbev/information-architecture.png",
          alt: "Screenshot featuring an Information architecture diagram, illustrating the hierarchical structure and relationships within the system, enhancing user understanding of content organization and navigation pathways.",
          subtitle:
            "Here’s the high-level structure we built. Due to privacy, we can't share full details, but it’s reflected in the final prototypes.",
        },
      },
    },
    {
      title: "Benchmarks (1)",
      type: 0,
      attributes: {
        description:
          "We reviewed developer portals from major companies, identifying key features to include in our own and noting which ones differed from Stoplight’s.",
        image: {
          url: "/images/cases/abinbev/benchmark-comparison.png",
          alt: "Screenshot presenting a benchmark feature table, comparing key attributes among competitors with Stoplight as the baseline. Visualizing a comprehensive overview of features, performance, and functionalities to aid in strategic decision-making.",
        },
      },
    },
    {
      title: "Benchmarks (2)",
      type: 0,
      attributes: {
        description:
          "We've also curated a collection of visual snapshots for inspiration.",
        image: {
          url: "/images/cases/abinbev/benchmark-visual.png",
          alt: "Screenshot showcasing examples of competitors in a side-by-side visual comparison.",
          subtitle:
            "A quick overview of snapshots, featuring portals from Spotify, iFood, and Mercado Livre.",
        },
      },
    },
  ];

  return (
    <div className="section-container">
      <SectionHeading
        title="Research"
        text="We wanted to understand the current user experience and identify challenges users face when navigating the Stoplight documentation."
      />
      <ResearchOverview />
      <Tab tabs={tabs} />
    </div>
  );
};

export default Research;
