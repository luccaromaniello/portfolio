"use client";
import { useState } from "react";
import TabContent from "../TabContent";

export enum TabType {
  IMAGE = 0,
  CUSTOM = 1,
}

export interface TabAttributes {
  description?: string;
  image?: {
    url: string;
    alt: string;
  };
}

interface TabItem {
  title: string;
  type: TabType;
  attributes: TabAttributes;
  children?: React.ReactNode;
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
      <div className="flex flex-row flex-wrap gap-8 sm:gap-14 px-6 sm:px-16 justify-center">
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
        {tabs.map((tab, index) =>
          active == index ? (
            tab.children ? (
              <TabContent
                key={index}
                type={tab.type}
                attributes={tab.attributes}
              >
                {tab.children}
              </TabContent>
            ) : (
              <TabContent
                key={index}
                type={tab.type}
                attributes={tab.attributes}
              />
            )
          ) : (
            ""
          ),
        )}
      </div>
    </div>
  );
};

export default Tab;
