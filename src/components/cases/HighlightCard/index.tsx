import Text from "@/components/cases/Text";

interface HighlightCardProps {
  title: string,
  description: string,
}

const HighlightCard = ({ title, description }: HighlightCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 sm:p-8 bg-primary-main/5 rounded-2xl">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Text text={description}/>
    </div>
  )
};

export default HighlightCard;