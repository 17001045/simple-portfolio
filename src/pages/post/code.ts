import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";

@Component({
  components: {
    "post-component": require("@/modules/post/components/post/index.vue")
      .default
  }
})
export default class PostPage extends mixins(GeneralMixin) {
  get modalStatus(): boolean {
    return this.layoutModule.modalStatus;
  }
  mounted() {
    this.handleMenu(false);
    this.handleModal(false);
  }
}
