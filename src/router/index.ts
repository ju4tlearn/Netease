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
    {
      path: "/:pathMatched(.*)*",
      name: "Not Found",
      props: (route: { params: { pathMatched: string } }) => ({
        pathMatched: `/${route.params.pathMatched}`,
      }),
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.getItem('isLogin') === '1'
//   if (to.name !== 'login' && !isLogin) {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })

router.beforeEach((to, from, next) => {
  if (!to.fullPath.startsWith("/login")) {
    const cookie = localStorage.getItem("user");
    if (cookie) {
      next();
    } else {
      next(`/login?originPath=${to.fullPath}`);
    }
  } else {
    next();
  }
});

export default router;
