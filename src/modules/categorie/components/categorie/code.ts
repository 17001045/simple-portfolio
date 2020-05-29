import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";
import { EIcon, confimSwal } from "@/libs/sweetalert2/sweetalert2.handler";

@Component
export default class CategorieComponent extends mixins(GeneralMixin) {
  infoActive: boolean = false;

  get loginStatus(): boolean {
    return this.adminModule.loginStatus;
  }

  created() {
    this.categorieModule.getCategorieAction(this.$route.params.id);
  }

  get categorieSelected() {
    return this.categorieModule.categorieSelected;
  }

  async deleCategorie() {
    const c = await confimSwal({
      title: "Delete?",
      icon: EIcon.WARNING,
      cancelButtonText: "cancel",
      confirmButtonText: "ok"
    });
    if (c.value) {
      await this.categorieRequest.deleteCategorie(this.$route.params.id);
      this.$router.push("/categories");
    }
  }

  goPageId(id: string): void {
    this.$router.push("/post/" + id);
  }
}
