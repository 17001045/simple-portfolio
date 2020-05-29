<template>
  <select @change="handleSelectPostsForCategorie($event)" class="select_categorie">
    <option value="all">all</option>
    <option v-for="(c,i) in categories" :key="i" :value="c._id">{{ c.name }}</option>
  </select>
</template>
<script lang="ts" src="./code.ts"></script>
