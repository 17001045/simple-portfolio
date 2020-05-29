import { Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import GeneralMixin from "@/mixins/generalMixin";
import { VueEditor } from "vue2-editor";
import { IPostForm } from "../../post.interface";
import { ICategorie } from "@/modules/categorie/categorie.interface";
import arrayObjectToSimple from "@/helpers/arrayObjectToSimple";

@Component({
  components: {
    "vue-editor": VueEditor
  }
})
export default class PostForm extends mixins(GeneralMixin) {
  @Prop() title!: string;
  @Prop() update!: boolean;

  taginput: string = "";
  categories: ICategorie[] = [];
  formValues: IPostForm = {
    content: "<h3>content.....</h3>",
    img: "",
    tags: [],
    title: "",
    categories: []
  };

  addTag(): void {
    if (
      !this.formValues.tags.includes(this.taginput) &&
      this.taginput.length > 1
    ) {
      this.formValues.tags.push(this.taginput);
    }
    this.taginput = "";
  }
  deleteTag(tag: string): void {
    this.formValues.tags = this.formValues.tags.filter(t => t !== tag);
  }
  handleUpdatecheck(id: string) {
    let chekc: boolean = false;

    arrayObjectToSimple(this.postModule.postSelected.categories, "_id").forEach(
      (c: string) => {
        if (c === id) {
          chekc = true;
        } else {
          chekc = false;
        }
      }
    );
    return chekc;
  }
  handleCheck(e: Event, id: string): void {
    const check = <HTMLInputElement>e.target;
    if (check.checked) {
      if (!this.formValues.categories.includes(id)) {
        this.formValues.categories.push(id);
      }
    } else {
      this.formValues.categories = this.formValues.categories.filter(
        c => c !== id
      );
    }
  }

  handleSubmit() {
    if (this.update) {
      this.handleUpdate();
    } else {
      this.handleCreate();
    }
  }

  async handleCreate() {
    await this.postRequest.create(this.formValues);
    this.$router.push("/admin");
  }
  async handleUpdate() {
    const id: any = this.postModule.postSelected._id;
    await this.postRequest.update(id, this.formValues);
    this.$router.push("/post/" + id);
  }

  created() {
    this.getCategories();
    if (this.update) {
      const {
        categories,
        content,
        img,
        tags,
        title
      } = this.postModule.postSelected;

      this.formValues = {
        img,
        title,
        content,
        tags,
        categories: arrayObjectToSimple(categories, "_id")
      };
    }
  }

  async getCategories() {
    const cates = await this.categorieRequest.findAll();
    this.categories = cates.data;
  }
}
