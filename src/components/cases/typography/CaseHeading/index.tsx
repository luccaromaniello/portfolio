interface CaseHeadingProps {
  headline: string;
  company: string;
  link: string;
}

const CaseHeading = ({ headline, company, link }: CaseHeadingProps) => {
  return (
    <h1 className="text-3xl sm:text-4xl leading-tight sm:leading-snug font-bold pt-8">
      I helped{" "}
      <a
        className="text-primary-main hover:underline"
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        {" "}
        {company}{" "}
      </a>
      to {headline}
    </h1>
  );
};

export default CaseHeading;
