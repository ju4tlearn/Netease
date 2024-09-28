<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";
import { ref } from "vue";
import PhoneView from "./PhoneView.vue";
import EmailView from "./EmailView.vue";
import QuickView from "./QuickView.vue";
let show = ref(true);
let component = ref<
  typeof PhoneView | typeof EmailView | typeof QuickView | null
>(null);
let fn1 = () => {
  show.value = false;
  component.value = PhoneView;
};
let fn2 = () => {
  show.value = false;
  component.value = EmailView;
};
let fn3 = () => {
  show.value = false;
  component.value = QuickView;
};
let fn4 = () => {
  show.value = true;
  component.value = null;
};
</script>

<template>
  <div class="h-[667px] bg-red-500" v-show="show">
    <div class="flex justify-center">
      <Icon
        icon="simple-icons:neteasecloudmusic"
        class="h-[100px] w-[100px] text-[white] mt-[25%]"
      />
    </div>
    <div class="flex justify-between mt-[45%]">
      <button @click="fn1" class="text-[white]">手机号登录</button>
      <button @click="fn2" class="text-[white]">邮箱登录</button>
      <button @click="fn3" class="text-[white]">二维码登录</button>
    </div>
  </div>
  <component :is="component" @qw="fn4"></component>
</template>
