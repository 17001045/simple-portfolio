<template>
  <main class="simple_container">
    <router-link to="/works" class="btn_back">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
    </router-link>
    <h1 class="post_title">{{ postSelected.title }}</h1>
    <p class="post_content" v-html="postSelected.content"></p>
    <div class="divider"></div>
    <div class="post_tools">
      <button @click="infoActive = !infoActive" class="btn_secondary" type="button">
        <i class="fa fa-info" aria-hidden="true"></i>
      </button>
      <router-link v-if="loginStatus" class="btn_secondary" to="/update-post">
        <i class="fa fa-pencil" aria-hidden="true"></i>
      </router-link>
      <button v-if="loginStatus" @click="delePost()" class="btn_secondary" type="button">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>

    <transition name="fade_top" mode="out-in">
      <div v-if="infoActive" class="post_info_container">
        <div class="post_info">
          <h4>{{ arrayExistsMsg(postSelected.categories, "categorias" ) }}</h4>
          <div class="post_info_items">
            <button
              @click="goPageId(t._id)"
              v-for="(t,index) in postSelected.categories"
              :key="index"
              type="button"
              class="btn_secondary post_info_item"
            >{{ t.name }}</button>
          </div>
        </div>
        <div class="post_info">
          <h4>{{ arrayExistsMsg(postSelected.tags, "tags" ) }}</h4>
          <div class="post_info_items">
            <button
              v-for="(t,index) in postSelected.tags"
              :key="index"
              type="button"
              class="btn_secondary post_info_item"
            >{{ t }}</button>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>
<script lang="ts" src="./code.ts"></script>

