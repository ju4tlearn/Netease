<script setup lang="ts">
import { PlaylistService } from "@/client/api";
import PlaylistSongItem from "@/components/PlaylistSongItem.vue";
import type { Playlist } from "@/client/api";
import { Icon } from "@iconify/vue/dist/iconify.js";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import PlayerItem from "@/components/Player/PlayerItem.vue";

const route = useRoute("playlist");

const playlistDetail = ref<Playlist>();

const hue = Math.floor(Math.random() * 360);

const randomBackground = (isAlpha?: boolean, alpha: number = 100) => {
  const alphaData = isAlpha ? `/ ${alpha}%` : "";
  return `background: oklch(.65 .1 ${hue} ${alphaData});`;
};

const getPlaylistDetail = async () => {
  const id = Number(route.query.id);
  await PlaylistService.getPlaylistDetail(id).then((resp) => {
    playlistDetail.value = resp.playlist;
  });
};

getPlaylistDetail();

const getPlayCount = computed(() => {
  if (!playlistDetail.value) {
    return 0;
  }

  return Math.floor(playlistDetail.value.playCount / 10000);
});
</script>

<template>
  <div class="relative h-screen" :style="randomBackground()">
    <PlayerItem />

    <div
      class="fixed z-10 h-14 px-2 w-full flex items-center justify-between"
      :style="randomBackground(true, 50)"
      style="backdrop-filter: blur(10px)"
    >
      <a href="/">
        <Icon icon="weui:back-outlined" class="size-8 text-base-100" />
      </a>

      <span class="absolute left-1/2 -translate-x-1/2 text-base-100 text-xl"
        >歌单</span
      >

      <div class="flex items-center gap-2">
        <Icon
          icon="material-symbols-light:search"
          class="size-8 text-base-100"
        />

        <Icon icon="pepicons-pencil:dots-y" class="size-8 text-base-100" />
      </div>
    </div>

    <div class="overflow-y-auto pt-[4.5rem] h-full">
      <div class="flex flex-col px-4">
        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <div class="relative shadow-md rounded-2xl shrink-0">
              <span
                class="absolute right-1 top-1 badge badge-ghost bg-base-200/25 border-none text-xs text-base-100"
              >
                <Icon icon="mdi:play" class="size-4" />
                {{ getPlayCount }} 万
              </span>
              <img
                :src="playlistDetail?.coverImgUrl"
                class="size-28 rounded-lg"
              />
            </div>

            <div class="flex flex-col gap-2">
              <div class="flex gap-2">
                <h1 class="text-lg text-base-100">
                  {{ playlistDetail?.name }}
                </h1>
                <button
                  class="btn btn-xs btn-circle bg-base-100/25 border-none"
                >
                  <Icon icon="formkit:down" class="size-5 text-base-100" />
                </button>
              </div>

              <div class="flex items-center gap-1">
                <img
                  :src="playlistDetail?.creator.avatarUrl"
                  class="size-6 rounded-full"
                />
                <span class="text-base-100/75 text-sm"
                  >{{ playlistDetail?.creator.nickname }}
                </span>
                <span
                  class="badge badge-sm bg-base-100/25 border-none text-base-100"
                >
                  + 关注
                </span>
              </div>

              <div class="flex items-center gap-1">
                <span
                  v-for="tag in playlistDetail?.tags"
                  :key="tag"
                  class="badge badge-sm badge-ghost bg-base-100/25 border-none text-base-100 !rounded-sm pl-1 pr-0"
                >
                  {{ tag }}
                  <Icon icon="mingcute:right-line" class="size-4" />
                </span>
              </div>
            </div>
          </div>

          <div class="relative flex items-center">
            <span class="truncate text-sm text-base-100/50">
              {{ playlistDetail?.description }}
            </span>

            <Icon
              icon="mingcute:right-line"
              class="shrink-0 text-base-100/50 size-5"
            />
            <!-- <div class="absolute right-0 top-0 bg-gradient-to-l from-transparent"></div> -->
          </div>
        </div>
      </div>

      <div class="p-4 flex items-center justify-between text-base-100">
        <div
          class="flex items-center gap-1 px-5 py-2 bg-base-100/15 rounded-full"
        >
          <Icon icon="majesticons:share" class="size-6" />
          <span class="text-sm">{{ playlistDetail?.shareCount }}</span>
        </div>

        <div
          class="flex items-center gap-1 px-5 py-2 bg-base-100/15 rounded-full"
        >
          <Icon icon="bi:chat-dots-fill" class="size-6" />
          <span class="text-sm">{{ playlistDetail?.commentCount }}</span>
        </div>

        <div class="flex items-center gap-1 px-5 py-2 bg-error rounded-full">
          <Icon icon="fluent:collections-add-24-filled" class="size-6" />
          <span class="text-sm">{{ playlistDetail?.subscribedCount }}</span>
        </div>
      </div>

      <div>
        <div class="p-4 bg-base-100/50 flex items-center gap-4 rounded-t-2xl">
          <Icon icon="ci:gift" class="shrink-0 size-4 text-red-500" />

          <span class="shrink-0 text-base-content text-sm"
            >VIP 5.5 折！抢独家护肤礼包</span
          >

          <div class="w-full"></div>

          <div class="shrink-0 text-base-100/50 flex items-center text-xs">
            立即抢购
            <Icon icon="mingcute:right-line" class="size-5" />
          </div>
        </div>

        <div class="bg-base-100 h-full p-4">
          <div class="flex justify-between pb-4">
            <div class="flex items-center gap-2">
              <button class="btn btn-sm btn-circle bg-red-500">
                <Icon icon="mdi:play" class="size-6 text-base-100" />
              </button>

              <span class="text-base-content text-lg">
                播放全部
                <span class="text-xs text-base-content/75">
                  ({{ playlistDetail?.trackCount }})
                </span>
              </span>
            </div>

            <div class="flex items-center gap-4">
              <Icon icon="hugeicons:download-01" class="size-6" />
              <Icon icon="lucide:list-check" class="size-6" />
            </div>
          </div>

          <PlaylistSongItem
            v-for="(song, index) in playlistDetail?.tracks"
            :key="index"
            :index="index"
            :name="song.name"
            :author="song.ar[0].name"
            :al-name="song.al.name"
            :is-s-q="song.sq !== undefined"
            :is-have-video="song.videoInfo.video !== undefined"
          />
        </div>
      </div>
    </div>
  </div>
</template>
