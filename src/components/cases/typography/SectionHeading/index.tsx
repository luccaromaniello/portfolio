import Text from "@/components/cases/Text";

interface SectionHeadingProps {
  title: string;
  text: string;
}

const SectionHeading = ({ title, text }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col gap-4 px-6 sm:px-16">
      <h3 className="text-lg sm:text-2xl font-bold leading-snug sm:leading-normal">
        {title}
      </h3>
      <Text text={text} />
    </div>
  );
};

export default SectionHeading;
