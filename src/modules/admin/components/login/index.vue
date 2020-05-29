<template>
  <main class="simple_container">
    <div class="form_container">
      <h1 class="form_title">Login</h1>
      <form @submit.prevent="handleLogin()">
        <div class="inputBox">
          <input v-model="password" type="password" required />
          <label>password</label>
        </div>

        <div class="form_footer">
          <button class="btnSubmit btn_neon_effect" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  </main>
</template>
<script lang="ts" src="./code.ts"></script>
