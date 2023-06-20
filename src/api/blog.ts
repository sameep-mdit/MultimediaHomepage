import { axiosInstance } from "../config/axiosInstance";

export interface BlogFormType {
  title: string;
  description: string;
  image?: File;
  category: string[];
}

type baseType = {
  createdDate: Date;
  creatorId: string;
  updatedDate: Date;
  updaterId: string;
};
type CoverphotoType = {
  id: string;
  status: string;
  coverphotoUrl: string;
  createdDate: Date;
  updatedDate: Date;
};

export interface blogType {
  id: string;
  name: string;
  blogs: Blogs[];
  blogId: string;
  title: string;
  description: string;
  status: string;
  createdDate: string;
  updatedDate: string;
  blogUpdaterId: string;
  blogCoverPhoto: BlogCoverPhoto[];
  blogImage: BlogImage[];
  category: string;
}

export interface blogTypeById {
  id: string;
  title: string;
  description: string;
  name: string;
  color: string;
  status: string;
  createdDate: Date;
  updatedDate: Date;
  blogUpdaterId: string;
  categories: Category[];
  blogCoverPhoto: BlogCoverPhoto[];
}

export interface Category {
  id: string;
  name: string;
  status: string;
  creatorId: string;
  updaterId: string;
  createdDate: string;
  updatedDate: string;
  blogCoverPhoto: BlogCoverPhoto[];
}
export interface Blogs {
  id: string;
  blogId: string;
  name: any;
  title: string;
  description: string;
  status: string;
  createdDate: Date;
  updatedDate: string;
  blogCoverPhoto: BlogCoverPhoto[];
}

interface BlogImage {
  id: string;
  status: string;
  imageUrl: string;
  createdDate: string;
  updatedDate: string;
}

interface BlogCoverPhoto {
  id: string;
  status: string;
  coverphotoUrl: string;
  createdDate: string;
  updatedDate: string;
}

export const getBlogs = () => axiosInstance.get<blogType[]>("/get-all-blog");

export const postBlogs = (data: BlogFormType) => {
  const dataToUpload = new FormData();
  for (let key in data) {
    // @ts-ignore
    dataToUpload.append(key, data[key]);
  }
  return axiosInstance.post("/add-blog", dataToUpload);
};
export const getBlogById = (id: string) =>
  axiosInstance.get(`/get-blog-by-id/${id}`);

export const deleteBlog = (id: string) =>
  axiosInstance.delete(`/delete-blog/${id}`);

export const getBlogsByUser = (id: string) =>
  axiosInstance.get(`/get-blogs-user/${id}`);

export const getAllBlogsCategory = () =>
  axiosInstance.get(`/get-all-blogs-category`);

export const getAllBlogsCategoryById = async (id: string) => {
  return axiosInstance.get(`/get-blogs/category/${id}`);
};
export const updateBlog = (id: string, data: BlogFormType) => {
  const dataToUpload = new FormData();
  for (let key in data) {
    // @ts-ignore
    dataToUpload.append(key, data[key]);
  }
  return axiosInstance.patch(`/update-blog/${id}`, dataToUpload);
};
