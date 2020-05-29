<template>
  <layout-app>
    <router-view />
  </layout-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    'layout-app': require('@/modules/layout/index').default,
  },
})
export default class AppComponent extends Vue {}
</script>
