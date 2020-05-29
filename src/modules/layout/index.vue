<template>
  <div id="appContainer" ref="appContainer" class="app_container">
    <button
      v-if="modalStatus"
      @click="handleModalAndMenu(false)"
      id="btnMenuClose"
      class="btn_modal_close"
    >
      &times;
    </button>
    <modal-app />
    <menu-app />
    <slot></slot>
  </div>
</template>
<script lang="ts" src="./code.ts"></script>
