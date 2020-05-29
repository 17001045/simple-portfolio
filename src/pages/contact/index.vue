<template>
  <section class="app_section" :class="{element_blur_off:modalStatus }">
    <main class="simple_container about_container">
      <form class="form_container" @submit.prevent="handleSubmit()">
        <div class="inputBox">
          <input v-model="email" type="email" required />
          <label>email</label>
        </div>
        <div class="inputBox">
          <input v-model="asunto" type="text" required />
          <label>asunto</label>
        </div>

        <textarea v-model="mensaje" class="form_textarea" required rows="3" placeholder="mensaje"></textarea>
        <div class="form_footer">
          <button class="btnSubmit btn_neon_effect" type="submit">
            submit
            <span></span>
          </button>
        </div>
      </form>
      <div class="divider"></div>
      <social-icons />
    </main>
  </section>
</template>
<script lang="ts" src="./code.ts"></script>

