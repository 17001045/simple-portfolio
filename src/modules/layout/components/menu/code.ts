import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";

@Component({
  components: {
    "social-icons": require("@/modules/layout/components/socialIcons/index.vue")
      .default
  }
})
export default class MenuComponent extends mixins(GeneralMixin) {
  handleModalAndMenu(status: boolean): void {
    this.handleModal(status);
    this.handleMenu(status);
  }

  get modalStatus(): boolean {
    return this.layoutModule.modalStatus;
  }
  get menuStatus(): boolean {
    return this.layoutModule.menuStatus;
  }
}
