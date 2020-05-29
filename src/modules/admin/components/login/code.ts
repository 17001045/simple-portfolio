import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import GeneralMixin from '@/mixins/generalMixin';
import { alertSwal, EIcon } from '@/libs/sweetalert2/sweetalert2.handler';

@Component
export default class LoginComponent extends mixins(GeneralMixin) {
  password: string = '';

  async handleLogin() {
    // aplicar validacion de password
    this.adminModule.loginStatusMutation(true);
  }
}
