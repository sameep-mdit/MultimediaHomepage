import { axiosInstance } from "../config/axiosInstance";

export interface HomePageData {
  homepage: Homepage;
}

export interface Homepage {
  current_status: Currentstatus;
  photo: string;
  heading: string;
  description: string;
  channels: Channel_data[];
  social: social_links[];
  blogs: any[];
  videos: any[];
  notice: Notice[];
}

export interface Channel_data {
  channel_id: string;
  name: string;
  image: string;
  url: string;
  socials: Channel_socailinks[];
}

export interface Channel_socailinks {
  social_id: string;
  name: string;
  url: string;
  status: string;
  createdDate: string;
  updatedDate: string;
  logo: string;
}

export interface social_links {
  social_id: string;
  name: string;
  logo: string;
  url: string;
  status: string;
  createdDate: string;
  updatedDate: string;
}

export interface Notice {
  notice_id: string;
  notice: string;
  staus: string;
  createdDate: string;
  updatedDated: string;
}

export interface Currentstatus {
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

export const getHomePage = () => axiosInstance.get("/get-homepage");
