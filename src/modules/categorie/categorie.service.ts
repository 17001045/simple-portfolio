import URLRequest from '@/config/urlRequest';
import axios from 'axios';
import {
  ICategorieResponse,
  ICategoriesResponse,
  ICategorieForm,
} from './categorie.interface';
import { alertSwal, EIcon } from '@/libs/sweetalert2/sweetalert2.handler';

const URL: string = URLRequest + '/categorie';

const findAll = async (): Promise<ICategoriesResponse | any> => {
  try {
    return await axios.get(URL + '/categories');
  } catch (error) {
    await alertSwal({
      icon: EIcon.ERROR,
      title: 'Error...',
      text: `${error}`,
    });
  }
};

const findOne = async (id: string): Promise<ICategorieResponse | any> => {
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

const deleteCategorie = async (
  id: string
): Promise<ICategorieResponse | any> => {
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
  categorie: ICategorieForm
): Promise<ICategorieResponse | any> => {
  try {
    return await axios.put(URL + '/update/' + id, categorie);
  } catch (error) {
    await alertSwal({
      icon: EIcon.ERROR,
      title: 'Error...',
      text: `${error}`,
    });
  }
};

const create = async (
  categorie: ICategorieForm
): Promise<ICategorieResponse | any> => {
  try {
    return await axios.post(URL + '/create', categorie);
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
  update,
  deleteCategorie,
  create,
};
