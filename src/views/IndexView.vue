<script setup lang="ts">
import { ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import router from "@/router";

const route = useRoute();

const activeMenu = ref(0);

interface MenuItem {
  icon: string;
  text: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { icon: "ri:netease-cloud-music-fill", text: "推荐", path: "/" },
  { icon: "mdi:compass", text: "发现", path: "/todo" },
  { icon: "ph:radio", text: "漫游", path: "/todo" },
  { icon: "token:chat", text: "动态", path: "/todo" },
  { icon: "octicon:person-16", text: "我的", path: "/profile" },
];

// 调用示例
import { PlaylistService } from "@/client/api";

const test = async () => {
  await PlaylistService.getPlaylistDetail(6655442283).then((resp) => {
    console.log(resp.code);
  });
};

test();
</script>

<template>
  <RouterView />

  <div
    class="fixed bottom-0 w-full bg-base-100 flex flex-col justify-between gap-2"
  >
    <div class="w-full bg-base-content/10 h-[1px]"></div>

    <div class="flex justify-between items-center px-6 pb-4 pt-0">
      <div
        v-for="(menu, index) in menuItems"
        :key="index"
        :class="{
          'flex flex-col items-center': true,
          'text-primary': route.path === menu.path,
        }"
        @click="router.push(menu.path)"
      >
        <Icon :icon="menu.icon" class="size-7" />
        <span class="text-xs">{{ menu.text }}</span>
      </div>
    </div>
  </div>
</template>
