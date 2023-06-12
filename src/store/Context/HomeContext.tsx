import React, { ReactNode } from "react";

import { toast } from "react-toastify";
import { HomePageData, getHomePage } from "../../api/homepage";

type HomeContext = {
  data?: HomePageData;
  isLoading: boolean;
};

const defaultData: HomeContext = {
  data: {
    homepage: {
      current_status: {
        homepage_id: "Loading",
        photo: "Loading",
        heading: "Loading",
        description: "Loading",
        blog: false,
        video: false,
        campaign: false,
        project: false,
        creatorId: "Loading",
        updaterId: "Loading",
        createdDate: "Loading",
      },
      photo: "1685003939543.jpg",
      heading: "hari Khanal",
      description:
        "Harry Khanal is a visionary leader and the CEO of an esteemed IT company, widely recognized for his exceptional business acumen and transformative leadership style. With a passion for technology and a keen understanding of the industry, Harry has successfully propelled his company to new heights, fostering innovation, and driving sustainable growth.",
      channels: [],
      social: [],
      blogs: [],
      videos: [],
    },
  },
  isLoading: true,
};

export const HomeContext = React.createContext(defaultData);

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = React.useState<HomePageData>(
    defaultData.data! as HomePageData
  );
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchData = async () => {
    try {
      const response = await getHomePage();
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      toast("Network Error");
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (isLoading) {
      fetchData();
    }
  }, [isLoading]);

  return (
    <HomeContext.Provider value={{ data, isLoading }}>
      {children}
    </HomeContext.Provider>
  );
};
