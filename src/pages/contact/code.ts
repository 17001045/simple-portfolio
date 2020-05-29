import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import GeneralMixin from '@/mixins/generalMixin';
import axios from 'axios';
import { alertSwal, EIcon } from '@/libs/sweetalert2/sweetalert2.handler';

@Component({
  components: {
    'social-icons': require('@/modules/layout/components/socialIcons/index.vue')
      .default,
  },
})
export default class ContactPage extends mixins(GeneralMixin) {
  email: string = '';
  mensaje: string = '';
  asunto: string = '';

  get modalStatus(): boolean {
    return this.layoutModule.modalStatus;
  }
  mounted() {
    this.handleMenu(false);
    this.handleModal(false);
  }

  async handleSubmit() {
    try {
      const msg = {
        emailTo: '@gmail.com',
        emailFrom: this.email,
        emailSubject: this.asunto,
        emailText: this.mensaje,
        emailHtml: `<p>${this.mensaje} </p>`,
      };

      const send = await axios.post('', msg);
      if (send.data.sendMail) {
        await alertSwal({
          icon: EIcon.SUCCESS,
          title: 'Error...',
          text: send.data.msg,
        });
      }
    } catch (error) {
      await alertSwal({
        icon: EIcon.ERROR,
        title: 'Error...',
        text: `${error}`,
      });
    }
  }
}
