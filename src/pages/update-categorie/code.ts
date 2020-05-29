import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";

@Component({
  components: {
    "categorie-form": require("@/modules/categorie/components/categorieForm/index.vue")
      .default
  }
})
export default class PostFormPage extends mixins(GeneralMixin) {
  get modalStatus(): boolean {
    return this.layoutModule.modalStatus;
  }
}
