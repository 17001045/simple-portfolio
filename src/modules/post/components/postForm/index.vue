<template>
  <main class="simple_container">
    <div class="form_container">
      <h1 class="form_title">{{ title }}</h1>
      <form @submit.prevent="handleSubmit()">
        <div class="inputBox">
          <input v-model="formValues.title" type="text" required />
          <label>title</label>
        </div>
        <div class="form_editor">
          <vue-editor v-model="formValues.content" />
        </div>

        <div class="inputBox">
          <input v-model="formValues.img" type="url" required />
          <label>image</label>
        </div>

        <div class="form_categories">
          <h4>Categories</h4>
          <div class="items">
            <div class="center" v-for="(c,index) in categories" :key="index">
              <label :for="c._id">{{c.name}}</label>
              <input
                @change="handleCheck($event,c._id)"
                :id="c._id"
                :value="c._id"
                type="checkbox"
                :checked="formValues.categories.includes(c._id)"
                class="form_check"
                ref="inputCheck"
              />
            </div>
          </div>
        </div>

        <div class="form_tag">
          <div class="inputBox">
            <input ref="taginput" v-model="taginput" type="text" placeholder="tag" />
            <button @click="addTag()" type="button" class="btn_secondary btn_input">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>

          <div class="tags">
            <button
              v-for="(t,index) in formValues.tags"
              :key="index"
              @click="deleteTag(t)"
              type="button"
              class="btn_secondary"
            >{{ t }}</button>
          </div>
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
 
