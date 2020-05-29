import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import {
  ICategorie,
  ICategorieForm,
} from '@/modules/categorie/categorie.interface';
import categorieRequest from '@/modules/categorie/categorie.service';

@Module({ namespaced: true, name: 'categorieModule' })
export default class CategorieModule extends VuexModule {
  categories: ICategorie[] = [];
  categorieSelected: ICategorie = {
    _id: '',
    description: '',
    img: '',
    name: '',
    posts: [],
  };
  categorieForm: ICategorieForm = {
    description: '',
    img: '',
    name: '',
  };

  @Action({ commit: 'getCategoriesMutation' })
  async getCategoriesAction(): Promise<ICategorie[]> {
    return (await categorieRequest.findAll()).data;
  }
  @Mutation
  private getCategoriesMutation(categories: ICategorie[]): void {
    this.categories = categories;
  }

  @Action({ commit: 'getCategorieMutation' })
  async getCategorieAction(id: string): Promise<ICategorie> {
    return (await categorieRequest.findOne(id)).data;
  }
  @Mutation
  private getCategorieMutation(categorie: ICategorie): void {
    this.categorieSelected = categorie;
  }
}
