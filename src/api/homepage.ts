import { axiosInstance } from "../config/axiosInstance";

export interface HomePageData {
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
  createdDate: string;
  updaterId: string;
  creatorId: string;
}

export const getHomePage = () => axiosInstance.get("");
