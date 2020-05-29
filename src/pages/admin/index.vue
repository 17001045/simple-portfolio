<template>
  <section class="app_section" :class="{element_blur_off:modalStatus }">
    <div v-if="loginStatus">
      <admin-component />
    </div>
    <div v-else>
      <login-component />
    </div>
  </section>
</template>
<script lang="ts" src="./code.ts"></script>