import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";

@Component
export default class CategoriesComponent extends mixins(GeneralMixin) {
  get categories() {
    return this.categorieModule.categories;
  }

  created() {
    this.categorieModule.getCategoriesAction();
  }

  goPost(id: string): void {
    this.$router.push({ name: "categorie", params: { id } });
  }
}
