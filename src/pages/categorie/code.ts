import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";

@Component({
  components: {
    "categorie-component": require("@/modules/categorie/components/categorie/index.vue")
      .default
  }
})
export default class CategoriePage extends mixins(GeneralMixin) {
  get modalStatus(): boolean {
    return this.layoutModule.modalStatus;
  }
  mounted() {
    this.handleMenu(false);
    this.handleModal(false);
  }
}
