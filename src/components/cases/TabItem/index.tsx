import Image from "next/image";

interface TabItem {
  title: string;
  image: {
    url: string;
    alt: string;
  };
}

interface TabItemProps {
  tabs: TabItem[];
}

const Tab = ({ tabs }: TabItemProps) => {
  return (
    <div>
      {tabs.map((tab, index) => (
        <div key={index}>
          <button>{tab.title}</button>
          {/* <Image src={tab.image.url} alt={tab.image.alt} /> */}
        </div>
      ))}
    </div>
  );
};

export default Tab;
