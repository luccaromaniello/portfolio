"use client";
import Image from "next/image";
import { useState } from "react";

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
  const [active, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex flex-row gap-14 px-6 sm:px-16 justify-center">
        {tabs.map((tab, index) => (
          <div key={index}>
            <button
              className={`${active == index ? "text-primary-main border-b-2 border-primary-main" : "text-content-secondary hover:text-content-primary"} font-medium pb-1`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      <div>
        {tabs.map((tab, index) => (
          <div key={index}>
            <p>teste {index}</p>
            {/* <Image src={tab.image.url} alt={tab.image.alt} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
