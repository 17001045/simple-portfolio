import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";

@Component({
  components: {
    "social-icons": require("@/modules/layout/components/socialIcons/index.vue")
      .default
  }
})
export default class AboutPage extends mixins(GeneralMixin) {
  get modalStatus(): boolean {
    return this.layoutModule.modalStatus;
  }
  mounted() {
    this.handleMenu(false);
    this.handleModal(false);
  }
}

/*
 <h3>Frontend autodidacta y titulo de diseño multimedia.</h3>
      <p>actualmente recibiendo más capacitación en:</p>
      <ul>
        <li>nodejs (express)</li>
        <li>vue js 3 Composition API</li>
        <li>react/angular</li>
        <li>sass</li>
        <li>pwa</li>
      </ul>
*/
