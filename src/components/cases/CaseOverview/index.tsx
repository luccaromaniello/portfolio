import "@/styles/alignments.css";
import CaseHeading from "@/components/cases/typography/CaseHeading";
import Overview from "@/components/cases/Overview";
import { ExternalLinkProps } from "@/components/cases/ExternalLink";

interface CaseOverviewProps {
  heading: {
    headline: string;
    company: string;
    link: string;
  };
  overview: {
    description: string;
    shoutout?: ExternalLinkProps;
    date: string;
    role: string;
    keywords: string;
    results: string;
  };
}

const CaseOverview = ({ heading, overview }: CaseOverviewProps) => {
  return (
    <div className="section-container">
      <CaseHeading
        headline={heading.headline}
        company={heading.company}
        link={heading.link}
      />
      <Overview
        description={overview.description}
        shoutout={overview.shoutout}
        date={overview.date}
        role={overview.role}
        keywords={overview.keywords}
        results={overview.results}
      />
    </div>
  );
};

export default CaseOverview;
