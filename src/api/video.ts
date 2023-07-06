// import { axiosInstance } from "../config/axiosInstance";

import { axiosInstance } from "../config/axiosInstance";

// export interface VideoPageData {
//   data: Datum[];
// }

// export interface Datum {
//   id: string;
//   name: string;
//   color: string;
//   status: string;
//   content: string;
//   creatorId: string;
//   updaterId: string;
//   createdDate: string;
//   updatedDate: string;
//   visibility: boolean;
//   homeVisibility: boolean;
//   videos: Video[];
// }

// export interface Video {
//   video_id: string;
//   title: string;
//   description: string;
//   url: string;
//   status: string;
//   visibility: boolean;
//   createdDate: string;
//   updatedDate: string;
//   creatorId: string;
//   updaterId: string;
// }

interface VideoPageData {
  videos: Videos;
}

export interface Videos {
  id: string;
  name: string;
  color: string;
  status: string;
  content: string;
  creatorId: string;
  updaterId: string;
  createdDate: string;
  updatedDate: string;
  visibility: boolean;
  homeVisibility: boolean;
  videos: Video[];
}

export interface Video {
  video_id: string;
  title: string;
  description: string;
  url: string;
  status: string;
  visibility: boolean;
  createdDate: string;
  updatedDate: string;
  creatorId: string;
  updaterId: string;
}

export const getAllVideosCategory = () =>
  axiosInstance.get(`/get-all-videos-category`);

export const getAllVideosCategoryById = async (id: string) => {
  return axiosInstance.get(`/get-videos/category/${id}`);
};
