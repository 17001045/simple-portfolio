<template>
  <div>
    <select-component />
    <main v-if="posts.length > 0" class="items_container">
      <article class="item_container" v-for="(post,index) in posts" :key="index">
        <img :src="post.img" :alt="post.title" />
        <div class="item_bgd" @click="goPost(post._id)">
          <h3 class="item_title">{{ post.title }}</h3>
        </div>
      </article>
    </main>
    <div class="simple_container" v-else>
      <h2 class="title_common">No hay posts</h2>
    </div>
  </div>
</template>
<script lang="ts" src="./code.ts"></script>

