interface CaseHeadingProps {
  text: string,
  link: string,
}

const CaseHeading = ({ text, link } : CaseHeadingProps) => {
  return (
    <a className="text-primary-main hover:underline" href={link} rel="noreferrer" target="_blank">
      {text}
    </a>
  )
};

export default CaseHeading;