import React, { FC, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabItemType {
  label: string;
  value: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

interface TabsMainProps {
  tabs: TabItemType[];
}

const TabsMain: FC<TabsMainProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Tabs
      defaultValue={activeTab}
      className="w-[400px]"
    >
      <TabsList
        className={`grid w-full bg-slate-500 text-black `}
        style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}
      >
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            onClick={() => handleTabChange(tab.value)}
          >
            <span className="inline-flex gap-1 justify-center items-center ">
              {' '}
              {tab.icon} {tab.label}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
        >
          {tab.children}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsMain;
