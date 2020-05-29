import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import GeneralMixin from '@/mixins/generalMixin';

@Component({
  components: {
    'menu-app': require('@/modules/layout/components/menu/index.vue').default,
    'modal-app': require('@/modules/layout/components/modalBgd/index.vue')
      .default,
  },
})
export default class LayoutComponent extends mixins(GeneralMixin) {
  get modalStatus(): boolean {
    return this.layoutModule.modalStatus;
  }

  handleModalAndMenu(status: boolean): void {
    this.handleModal(status);
    this.handleMenu(status);
  }
}
