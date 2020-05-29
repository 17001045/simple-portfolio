import Vue from "vue";
import Vuex from "vuex";
import layoutModule from "./modules/layout.module";
import postModule from "./modules/post.module";
import categorieModule from "./modules/categorie.module";
import adminModule from "./modules/admin.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    layoutModule,
    postModule,
    categorieModule,
    adminModule
  }
});
