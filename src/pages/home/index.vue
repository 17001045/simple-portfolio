<template>
  <section
    class="app_section home_container"
    :class="{ element_blur_off: modalStatus }"
  >
    <router-link class="btn_neon" to="/works">
      works
    </router-link>
  </section>
</template>

<script lang="ts" src="./code.ts"></script>
