import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";
import { ICategorie } from "@/modules/categorie/categorie.interface";

@Component
export default class SelectFromCategorieComponent extends mixins(GeneralMixin) {
  categories: ICategorie[] = [];

  created() {
    this.getCategories();
  }
  async getCategories() {
    const categories = await this.categorieRequest.findAll();
    this.categories = categories.data;
  }
  async handleSelectPostsForCategorie(e: Event) {
    const { value } = <HTMLSelectElement>e.target;
    if (value !== "all") {
      const categorie = await this.categorieRequest.findOne(value);
      this.postModule.postsForCategorie(categorie.data.posts);
    } else {
      await this.postModule.getPostsAction();
    }
  }
}
