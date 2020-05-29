import { ICategorie } from "../categorie/categorie.interface";

export interface IPost {
  _id?: string;
  title: string;
  content: string;
  img: string;
  tags: string[];
  categories: ICategorie[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPostsResponse {
  data: IPost[];
}
export interface IPostResponse {
  data: IPost;
}

export interface IPostForm {
  title: string;
  content: string;
  img: string;
  tags: string[];
  categories: string[];
}
