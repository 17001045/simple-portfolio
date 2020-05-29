<template>
  <main class="simple_container">
    <div class="admin_post">
      <h2 class="admin_title">posts</h2>
      <nav class="admin_nav">
        <router-link class="btn_neon_effect" to="/works">
          posts
        </router-link>
        <router-link class="btn_neon_effect" to="/create-post">
          create post
        </router-link>
      </nav>
    </div>
    <div class="admin_post">
      <h2 class="admin_title">Categories</h2>
      <nav class="admin_nav">
        <router-link class="btn_neon_effect" to="/categories">
          Categories
        </router-link>
        <router-link class="btn_neon_effect" to="/create-categorie">
          create Categorie
        </router-link>
      </nav>
    </div>
  </main>
</template>
