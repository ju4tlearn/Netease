<template>
  <div class="wrapper h-screen">
    <div class="image-with-text relative">
      <div class="rounded-full w-10 absolute left-[45vw] top-[6vw]">
        <img :src="img" class="rounded-full" />
      </div>
      <div class="absolute left-[44vw] top-[17vw]">{{ name }}</div>
      <div class="absolute left-[40vw] top-[24vw] text-xs">{{ label }}</div>
      <div class="flex ml-10 h-18 mt-32 absolute">
        <div
          class="flex w-16 h-8 leading-8 mr-3 rounded-xl text-center bg-gray-700 text-white"
        >
          <Icon
            icon="teenyicons:clock-outline"
            style="color: white"
            class="ml-1 mt-2 mr-1"
          />
          <div>最近</div>
        </div>
        <div
          class="flex w-16 h-8 leading-8 mr-3 rounded-xl text-center bg-gray-700 text-white"
        >
          <Icon
            icon="streamline:download-box-1-solid"
            style="color: white"
            class="ml-1 mt-2 mr-1"
          />
          <div>本地</div>
        </div>
        <div
          class="flex w-16 h-8 leading-8 mr-3 rounded-xl text-center bg-gray-700 text-white"
        >
          <Icon
            icon="typcn:cloud-storage"
            style="color: white"
            class="ml-1 mt-2 mr-1"
          />
          <div>云盘</div>
        </div>
        <div
          class="flex w-16 h-8 leading-8 mr-3 rounded-xl text-center bg-gray-700 text-white"
        >
          <Icon
            icon="hugeicons:baby-boy-dress"
            style="color: white"
            class="ml-1 mt-2 mr-1"
          />
          <div>装扮</div>
        </div>
      </div>
      <img :src="imgbk" class="object-cover h-48 w-96" />
    </div>
    <div>
      <div
        class="sticky top-0 z-10 bg-gray-800 rounded-tl-2xl rounded-tr-2xl -translate-y-3"
      >
        <div class="flex">
          <div class="flex-1 basis-1/3 mt-2 text-center">音乐</div>
          <div class="flex-1 basis-1/3 mt-2 text-center">播客</div>
          <div class="flex-1 basis-1/3 mt-2 text-center">动态</div>
        </div>
        <div class="flex justify-between mt-2">
          <div class="flex ml-2">
            <div class="mr-7">近期</div>
            <div class="mr-7">创建{{ c }}</div>
            <div class="mr-7">收藏{{ s }}</div>
          </div>
          <div class="flex">
            <Icon icon="mdi:input" style="color: white" class="mr-4 mt-1" />
            <Icon
              icon="formkit:reorder"
              style="color: white"
              class="mr-4 mt-1"
            />
          </div>
        </div>
      </div>
      <div class="w-full py-4 bg-gray-800 -translate-y-3">
        <div v-for="(item, index) in songs">
          <div class="flex mt-4 ml-2">
            <img :src="item.coverImgUrl" class="w-20" />
            <div class="mt-4 ml-2">
              <div class="overflow-hidden text-ellipsis whitespace-nowrap w-60">
                {{ item.name }}
              </div>
              <div>{{ formatPlayCount(item.playCount) }}播放</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted, reactive } from "vue";
import { ProdetailService } from "@/client/api/services/profileService";
import { ProsubcountService } from "@/client/api";
import { PlayhighqualityService } from "@/client/api";
const name = ref("123");
const img = ref("");
const label = ref("");
const imgbk = ref("");
const c = ref();
const s = ref();
const songs = ref();
const test1 = async () => {
  let a = localStorage.getItem("id");
  await ProdetailService.getProfileDetail(Number(a)).then((resp) => {
    name.value = resp.profile.nickname;
    img.value = resp.profile.avatarUrl;
    imgbk.value = resp.profile.backgroundUrl;
    label.value = resp.profile.signature;
  });
};
test1();
const test = async () => {
  let a = localStorage.getItem("cookie");
  await ProsubcountService.getProfileDetail(String(a)).then((resp) => {
    s.value = resp.subPlaylistCount;
    c.value = resp.djRadioCount;
  });
};
test();
const test2 = async () => {
  await PlayhighqualityService.getProfileDetail().then((resp) => {
    songs.value = resp.playlists;
    console.log(songs.value);
  });
};
test2();
function formatPlayCount(playCount) {
  if (playCount >= 10000) {
    return (playCount / 10000).toFixed(1) + "万次";
  } else {
    return playCount + "次";
  }
}
</script>
