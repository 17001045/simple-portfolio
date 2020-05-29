<template>
  <main class="simple_container">
    <div class="form_container">
      <h1 class="form_title">{{ title }}</h1>
      <form @submit.prevent="handleSubmit()">
        <div class="inputBox">
          <input v-model="formValues.name" type="text" required />
          <label>title</label>
        </div>

        <textarea
          class="form_textarea"
          v-model="formValues.description"
          required
          rows="3"
          placeholder="description"
        ></textarea>

        <div class="inputBox">
          <input v-model="formValues.img" type="url" required />
          <label>image</label>
        </div>

        <div class="form_footer">
          <button class="btnSubmit btn_neon_effect" type="submit">
            submit
            <span></span>
          </button>
        </div>
      </form>
    </div>
  </main>
</template>
<script lang="ts" src="./code.ts"></script>
 
