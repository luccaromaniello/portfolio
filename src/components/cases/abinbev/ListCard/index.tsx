import "@/styles/cards.css";

interface ListCardProps {
  title: string;
  color?: ListColor;
  list: ListItem[];
}

interface ListItem {
  text: string;
  highlight?: string;
}

enum ListColor {
  DEFAULT = 0,
  YELLOW = 1,
}

const ListCard = ({ title, color, list }: ListCardProps) => {
  return (
    <div
      className={
        color
          ? `flex flex-col gap-4 p-8 w-full bg-content-highlight/50 rounded-lg`
          : `flex flex-col gap-4 p-8 w-full bg-background rounded-lg border border-content-secondary/25`
      }
    >
      <h3 className="sm:text-lg font-bold leading-snug sm:leading-normal">
        {title}
      </h3>
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
