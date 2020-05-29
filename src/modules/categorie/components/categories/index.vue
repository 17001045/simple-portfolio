<template>
  <div>
    <main v-if="categories.length > 0" class="items_container">
      <article class="item_container" v-for="(c,index) in categories" :key="index">
        <img :src="c.img" :alt="c.name" />
        <div class="item_bgd" @click="goPost(c._id)">
          <h3 class="item_title">{{ c.name }}</h3>
        </div>
      </article>
    </main>
    <div class="simple_container" v-else>
      <h2 class="title_common">No hay categorias</h2>
    </div>
  </div>
</template>
<script lang="ts" src="./code.ts"></script>

