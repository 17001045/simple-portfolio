import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import GeneralMixin from '@/mixins/generalMixin';

@Component
export default class SocialIconsComponent extends mixins(GeneralMixin) {
  items = [
    /*  {
      path: "/contact",
      icon: "fa fa-envelope-o",
      target: "_self"
    },*/
    {
      path: 'https://api.whatsapp.com/send?phone=',
      icon: 'fa fa-whatsapp',
      target: '_blank',
    },
    {
      path: 'https://m.me/',
      icon: 'fa fa-facebook',
      target: '_blank',
    },
    {
      path: 'https://github.com/',
      icon: 'fa fa-github',
      target: '_blank',
    },
    {
      path: 'https://www.behance.net/',
      icon: 'fa fa-behance',
      target: '_blank',
    },
  ];
}
