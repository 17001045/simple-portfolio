import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";

@Component({
  components: {
    "select-component": require("@/modules/post/components/selectForCategorie/index.vue")
      .default
  }
})
export default class WorksComponent extends mixins(GeneralMixin) {
  get posts() {
    return this.postModule.posts;
  }

  async created() {
    await this.postModule.getPostsAction();
  }

  goPost(id: string): void {
    this.$router.push({ name: "post", params: { id } });
  }
}
