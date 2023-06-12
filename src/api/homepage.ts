import { axiosInstance } from "../config/axiosInstance";

interface HomepageData {
  homepage: Homepage;
}

interface Homepage {
  current_status: Currentstatus;
  photo: string;
  heading: string;
  description: string;
  channels: any[];
  social: any[];
  blogs: any[];
  videos: any[];
}

interface Currentstatus {
  homepage_id: string;
  photo: string;
  heading: string;
  description: string;
  blog: boolean;
  video: boolean;
  campaign: boolean;
  project: boolean;
  creatorId: string;
  updaterId: string;
}

export const getHomePage = () =>
  axiosInstance.get<HomepageData>("/get-homepage");
