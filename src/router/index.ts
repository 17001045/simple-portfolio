import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/home/index.vue";
import { adminModule } from "@/store/getModules";
import { alertSwal, EIcon } from "@/libs/sweetalert2/sweetalert2.handler";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/about/index.vue")
  },
  {
    path: "/works",
    name: "works",
    component: () => import("../pages/works/index.vue")
  },
  {
    path: "/create-post",
    name: "create-post",
    component: () => import("../pages/create-post/index.vue"),
    meta: {
      loginAdmin: true
    }
  },
  {
    path: "/update-post",
    name: "update-post",
    component: () => import("../pages/update-post/index.vue"),
    meta: {
      loginAdmin: true
    }
  },
  {
    path: "/post/:id",
    name: "post",
    component: () => import("../pages/post/index.vue"),
    props: true
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../pages/admin/index.vue")
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../pages/categories/index.vue")
  },
  {
    path: "/categorie/:id",
    name: "categorie",
    component: () => import("../pages/categorie/index.vue"),
    props: true
  },
  {
    path: "/create-categorie",
    name: "create-categorie",
    component: () => import("../pages/create-categorie/index.vue"),
    meta: {
      loginAdmin: true
    }
  },
  {
    path: "/update-categorie",
    name: "update-categorie",
    component: () => import("../pages/update-categorie/index.vue"),
    meta: {
      loginAdmin: true
    }
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pages/contact/index.vue")
  },
  {
    path: "/**",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  if (
    to.matched.some(record => record.meta.loginAdmin) &&
    adminModule.loginStatus == false
  ) {
    await alertSwal({
      icon: EIcon.ERROR,
      title: "Error...",
      text: `admin login required`
    });

    next("/");
  } else {
    next();
  }
});

export default router;
