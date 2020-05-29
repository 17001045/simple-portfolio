import { Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";
import { ICategorieForm } from "@/modules/categorie/categorie.interface";

@Component
export default class CategorieForm extends mixins(GeneralMixin) {
  @Prop() title!: string;
  @Prop() update!: boolean;

  formValues: ICategorieForm = {
    description: "",
    img: "",
    name: ""
  };

  handleSubmit() {
    if (this.update) {
      this.handleUpdate();
    } else {
      this.handleCreate();
    }
  }

  async handleCreate() {
    await this.categorieRequest.create(this.formValues);
    this.$router.push("/admin");
  }
  async handleUpdate() {
    const id: any = this.categorieModule.categorieSelected._id;
    await this.categorieRequest.update(id, this.formValues);
    this.$router.push("/categorie/" + id);
  }

  created() {
    if (this.update) {
      const { description, img, name } = this.categorieModule.categorieSelected;

      this.formValues = {
        description,
        img,
        name
      };
    }
  }
}
