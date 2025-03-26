import Image from "next/image";

interface Tab {
  title: string,
  image: {
    url: string,
    alt: string,
  },
}

interface TabProps {
  tabs: Tab[],
}

const Tab = ({ tabs }: TabProps) => {
  return (
    <div>
      {tabs.map((tab, index) => 
        <div key={index}>
          <button>{tab.title}</button>
          <Image src={tab.image.url} alt={tab.image.alt} />
        </div>
      )}
    </div>
  )
};

export default Tab;