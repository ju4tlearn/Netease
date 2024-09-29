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
//   const element = document.getElementById("type");
//   const icon = document.querySelector(".icon");
//   const text = document.querySelectorAll(".btn-c");
//   if (color.value) {
//     element?.setAttribute("data-theme", "dark");
//     icon?.classList.add("text-[red]");
//     text.forEach((item) => {
//       item.classList.add("text-[white]");
//     });
//     color.value = false;
//   } else {
//     element?.setAttribute("data-theme", "ligth");
//     icon?.classList.remove("text-[red]");
//     text.forEach((item) => {
//       item.classList.remove("text-[white]");
//     });
//     color.value = true;
//   }
// };
</script>

<template>
  <div
    class="h-screen flex flex-col gap-4 p-4 bg-primary"
    id="type"
    v-show="show"
  >
    <div class="flex items-center justify-center h-full">
      <Icon
        icon="simple-icons:neteasecloudmusic"
        class="h-28 w-28 text-[white]"
      />
    </div>
    <div class="flex justify-around">
      <button
        @click="fn1"
        class="btn btn-outline rounded-full bg-white text-primary"
      >
        手机号登录
      </button>
      <button
        @click="fn2"
        class="btn btn-outline rounded-full bg-white text-primary"
      >
        邮箱登录
      </button>
      <button
        @click="fn3"
        class="btn btn-outline rounded-full bg-white text-primary"
      >
        二维码登录
      </button>
    </div>
    <div class="flex justify-around">
      <Icon icon="ic:baseline-wechat" class="h-9 w-9 text-[white]" />
      <Icon icon="mingcute:qq-fill" class="h-9 w-9 text-[white]" />
      <Icon icon="fa:weibo" class="h-9 w-9 text-[white]" />
    </div>
    <div class="flex justify-center">
      <input type="checkbox" />
      <p class="text-xs text-[white]">
        同意 《用户协议》 《隐私政策》 《儿童隐私政策》
      </p>
    </div>
  </div>
  <component :is="component" @qw="fn4"></component>
</template>
