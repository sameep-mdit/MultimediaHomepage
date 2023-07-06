export interface IBlogType {
  blogId: string;
  title: string;
  description: string;
  visibility: true;
  status: string;
  createdDate: stirng;
  updatedDate: string;
  blogUpdaterId: string;
  blogCoverPhoto: IBlogCoverPhoto[];
}
interface IBlogCoverPhoto {
  id: string;
  status: string;
  coverphotoUrl: string;
  createdDate: string;
  updatedDate: string;
}
