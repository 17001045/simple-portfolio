import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";

@Component({
  components: {
    "categories-component": require("@/modules/categorie/components/categories/index.vue")
      .default
  }
})
export default class CategoriesPage extends mixins(GeneralMixin) {
  get modalStatus(): boolean {
    return this.layoutModule.modalStatus;
  }
  mounted() {
    this.handleMenu(false);
    this.handleModal(false);
  }
}
