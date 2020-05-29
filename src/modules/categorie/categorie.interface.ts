import { IPost } from "../post/post.interface";

export interface ICategorie {
  _id?: string;
  name: string;
  description: string;
  img: string;
  posts: IPost[] | string[] | undefined;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICategorieResponse {
  data: ICategorie;
}
export interface ICategoriesResponse {
  data: ICategorie[];
}

export interface ICategorieForm {
  name: string;
  description: string;
  img: string;
}
