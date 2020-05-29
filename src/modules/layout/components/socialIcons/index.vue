<template>
  <div class="social_icons">
    <router-link to="/contact">
      <i class="fa fa-envelope-o" aria-hidden="true"></i>
    </router-link>
    <a :target="item.target" v-for="(item,i) in items" :key="i" :href="item.path">
      <i :class="item.icon" aria-hidden="true"></i>
    </a>
  </div>
</template>
<script lang="ts" src="./code.ts"></script>

