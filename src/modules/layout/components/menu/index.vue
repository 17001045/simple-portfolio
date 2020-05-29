<template>
  <div>
    <button
      type="button"
      id="btnMenu"
      class="btn_menu"
      :class="{element_blur_off:modalStatus }"
      @click="handleModalAndMenu(true)"
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>

    <transition name="fade" mode="out-in">
      <nav v-if="menuStatus" id="menuApp" class="menu_app">
        <ul class="menu_list">
          <li @click="handleModalAndMenu(false)">
            <router-link to="/">home</router-link>
          </li>
          <li @click="handleModalAndMenu(false)">
            <router-link to="/about">about</router-link>
          </li>
          <li @click="handleModalAndMenu(false)">
            <router-link to="/works">works</router-link>
          </li>
          <li @click="handleModalAndMenu(false)">
            <router-link to="/admin">admin</router-link>
          </li>
          <li @click="handleModalAndMenu(false)">
            <router-link to="/contact">contact</router-link>
          </li>
        </ul>
        <social-icons />
      </nav>
    </transition>
  </div>
</template>
<script lang="ts" src="./code.ts"></script>

