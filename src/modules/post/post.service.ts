import URLRequest from '@/config/urlRequest';
import axios from 'axios';
import { IPostsResponse, IPostResponse, IPostForm } from './post.interface';
import { alertSwal, EIcon } from '@/libs/sweetalert2/sweetalert2.handler';

const URL: string = URLRequest + '/post';

const findAll = async (): Promise<IPostsResponse | any> => {
  try {
    return await axios.get(URL + '/posts');
  } catch (error) {
    await alertSwal({
      icon: EIcon.ERROR,
      title: 'Error...',
      text: `${error}`,
    });
  }
};
const findOne = async (id: string): Promise<IPostResponse | any> => {
  try {
    return await axios.get(URL + '/' + id);
  } catch (error) {
    await alertSwal({
      icon: EIcon.ERROR,
      title: 'Error...',
      text: `${error}`,
    });
  }
};

const create = async (post: IPostForm): Promise<IPostResponse | any> => {
  try {
    return await axios.post(URL + '/create', post);
  } catch (error) {
    await alertSwal({
      icon: EIcon.ERROR,
      title: 'Error...',
      text: `${error}`,
    });
  }
};

const deletePost = async (id: string): Promise<IPostResponse | any> => {
  try {
    return await axios.delete(URL + '/delete/' + id);
  } catch (error) {
    await alertSwal({
      icon: EIcon.ERROR,
      title: 'Error...',
      text: `${error}`,
    });
  }
};

const update = async (
  id: string,
  post: IPostForm
): Promise<IPostResponse | any> => {
  try {
    return await axios.put(URL + '/update/' + id, post);
  } catch (error) {
    await alertSwal({
      icon: EIcon.ERROR,
      title: 'Error...',
      text: `${error}`,
    });
  }
};

export default {
  findAll,
  findOne,
  create,
  deletePost,
  update,
};
