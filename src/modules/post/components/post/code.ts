import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";
import { EIcon, confimSwal } from "@/libs/sweetalert2/sweetalert2.handler";

@Component
export default class PostComponent extends mixins(GeneralMixin) {
  infoActive: boolean = false;

  created() {
    this.postModule.getPostAction(this.$route.params.id);
  }

  get postSelected() {
    return this.postModule.postSelected;
  }

  get loginStatus(): boolean {
    return this.adminModule.loginStatus;
  }

  async delePost() {
    const c = await confimSwal({
      title: "Delete?",
      icon: EIcon.WARNING,
      cancelButtonText: "cancel",
      confirmButtonText: "ok"
    });
    if (c.value) {
      await this.postRequest.deletePost(this.$route.params.id);
      this.$router.push("/works");
    }
  }

  goPageId(id: string): void {
    this.$router.push("/categorie/" + id);
  }
}
