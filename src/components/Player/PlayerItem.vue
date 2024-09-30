<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";
import { onUnmounted, ref } from "vue";

const ROTATE_SPEED = 5;

const isPlaying = ref(false);
const discRotateDegrees = ref(0);
const discRotateDealer = ref<number>();

const togglePlayStat = () => {
  isPlaying.value = !isPlaying.value;
  isPlaying.value ? startRotation() : stopRotation();
};

const hue = Math.floor(Math.random() * 360);

const randomBackground = (isAlpha?: boolean, alpha: number = 100) => {
  const alphaData = isAlpha ? `/ ${alpha}%` : "";
  return `background: oklch(.65 .1 ${hue} ${alphaData});`;
};

const rotate = () => {
  if (!isPlaying.value) return;
  discRotateDegrees.value += ROTATE_SPEED;
  if (discRotateDegrees.value >= 360) {
    discRotateDealer.value = 0;
  }
};

const startRotation = () => {
  if (!discRotateDealer.value) {
    discRotateDealer.value = setInterval(rotate, 100);
  }
};

const stopRotation = () => {
  if (discRotateDealer.value) {
    clearInterval(discRotateDealer.value);
    discRotateDealer.value = undefined;
  }
};

onUnmounted(() => {
  if (discRotateDealer.value) {
    clearInterval(discRotateDealer.value);
    discRotateDealer.value = undefined;
  }
});
</script>

<template>
  <div
    class="fixed z-20 h-screen w-full p-4 flex flex-col"
    :style="randomBackground()"
  >
    <div class="flex justify-between items-center pb-4 text-base-100/50">
      <Icon icon="formkit:down" class="size-7" />

      <span class="text-md">最后一次点击的歌单名</span>

      <Icon icon="hugeicons:share-04" class="size-7" />
    </div>

    <div class="h-full flex items-center justify-center">
      <div
        class="record size-64"
        :class="{ spinning: isPlaying }"
        :style="{ transform: `rotate(${discRotateDegrees}deg)` }"
      >
        <!-- 歌曲图片 -->
        <img src="" />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex">
        <div class="w-full">
          <div class="w-full text-base-100/75">123123123123123123</div>
          <div class="flex items-center gap-2">
            <span class="text-md text-base-100/50">歌手名</span>
            <span
              class="badge badge-sm badge-ghost bg-base-100/25 border-none text-base-100/50 text-xs"
            >
              关注
            </span>
          </div>
        </div>

        <div class="flex items-center gap-8 text-base-100/50">
          <Icon icon="weui:like-outlined" class="size-7" />
          <!-- <Icon /> -->

          <Icon icon="hugeicons:comment-01" class="size-7" />
        </div>
      </div>

      <div class="w-full">
        <progress class="progress" value="50" max="100"></progress>
        <div class="flex items-center justify-between text-sm text-base-100/50">
          <div>00:00</div>
          <div>11:45</div>
        </div>
      </div>

      <div class="py-4 flex items-center justify-between">
        <Icon
          icon="material-symbols-light:redo"
          class="size-8 text-base-100/50"
        />
        <Icon icon="ion:play-skip-back" class="size-8 text-base-100/75" />

        <button
          class="btn btn-ghost text-base-100/75"
          @click="togglePlayStat()"
        >
          <Icon v-if="isPlaying" icon="ph:pause-fill" class="size-10" />
          <Icon v-else icon="ph:play-fill" class="size-10" />
        </button>

        <Icon icon="ion:play-skip-forward" class="size-8 text-base-100/75" />
        <Icon icon="mynaui:menu" class="size-8 text-base-100/50" />
      </div>

      <div class="pb-6 flex items-center justify-around text-base-100/50">
        <Icon icon="fluent:phone-laptop-24-regular" class="size-6" />
        <Icon icon="hugeicons:download-01" class="size-6" />
        <Icon icon="solar:menu-dots-bold" class="size-6" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.record {
  background-color: black;
  border-radius: 50%;
  transition: transform 0.1s linear;
}

.spinning {
  animation: spin infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
