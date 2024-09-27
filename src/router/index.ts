import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/LoginView.vue"),
    },
    {
      path: "/",
      name: "index",
      component: () => import("@/views/IndexView.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/Home/HomeView.vue"),
        },
        {
          path: "/profile",
          name: "profile",
          component: () => import("@/views/Profile/ProfileView.vue"),
        },
      ],
    },
    {
      path: "/playlist",
      name: "playlist",
      component: () => import("@/views/Playlist/PlaylistView.vue"),
    },
  ],
});

export default router;
