import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";

@Component({
  components: {
    "admin-component": require("@/modules/admin/components/admin/index.vue")
      .default,
    "login-component": require("@/modules/admin/components/login/index.vue")
      .default
  }
})
export default class AdminPage extends mixins(GeneralMixin) {
  get loginStatus(): boolean {
    return this.adminModule.loginStatus;
  }
  get modalStatus(): boolean {
    return this.layoutModule.modalStatus;
  }
  mounted() {
    this.handleMenu(false);
    this.handleModal(false);
  }
}
