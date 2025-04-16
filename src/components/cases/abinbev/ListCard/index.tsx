import "@/styles/cards.css";

interface ListCardProps {
  title: string;
  list: ListItem[];
}

interface ListItem {
  text: string;
  highlight?: string;
}

const ListCard = ({ title, list }: ListCardProps) => {
  return (
    <div
      className={`flex flex-col gap-4 p-8 bg-background rounded-lg border border-content-primary`}
    >
      <h4 className="sm:text-lg font-bold leading-snug sm:leading-normal">
        {title}
      </h4>
      <ul className="flex flex-col gap-2">
        {list.map((item, index) => (
          <li key={index}>
            • {item.text}
            {item.highlight ? (
              <span className="font-medium">: {item.highlight}</span>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCard;
