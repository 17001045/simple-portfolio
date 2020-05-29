import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import store from '@/store';
import LayoutModule from '@/store/modules/layout.module';
import PostModule from '@/store/modules/post.module';
import CategorieModule from '@/store/modules/categorie.module';
import AdminModule from '@/store/modules/admin.module';
import CRequest from '@/modules/categorie/categorie.service';
import pRequest from '@/modules/post/post.service';

@Component
export default class GeneralMixin extends Vue {
  categorieRequest = CRequest;
  postRequest = pRequest;
  // modules vuex
  layoutModule: LayoutModule = getModule(LayoutModule, store);
  postModule: PostModule = getModule(PostModule, store);
  categorieModule: CategorieModule = getModule(CategorieModule, store);
  adminModule: AdminModule = getModule(AdminModule, store);

  // methods
  handleModal(status: boolean): void {
    this.layoutModule.modalStatusMutation(status);
  }
  handleMenu(status: boolean): void {
    this.layoutModule.menuStatusMutation(status);
  }

  arrayExistsMsg(arr: [], name: string) {
    if (arr.length < 1) {
      return `no hay ${name}`;
    } else {
      return name;
    }
  }
}
