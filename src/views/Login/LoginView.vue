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
let color = ref(true);
let fn5 = () => {
  const element = document.getElementById("type");
  const icon = document.querySelector(".icon");
  const text = document.querySelectorAll(".btn-c");
  if (color.value) {
    element?.setAttribute("data-theme", "dark");
    icon?.classList.add("text-[red]");
    text.forEach((item) => {
      item.classList.add("text-[white]");
    });
    color.value = false;
  } else {
    element?.setAttribute("data-theme", "ligth");
    icon?.classList.remove("text-[red]");
    text.forEach((item) => {
      item.classList.remove("text-[white]");
    });
    color.value = true;
  }
};
</script>

<template>
  <div class="h-[667px]" id="type" data-theme="ligth" v-show="show">
    <input type="checkbox" value="synthwbave" class="toggle" @click="fn5" />
    <div class="flex justify-center">
      <Icon
        icon="simple-icons:neteasecloudmusic"
        class="h-28 w-28 text-[red] mt-[25%] icon"
      />
    </div>
    <div class="flex justify-around mt-[45%]">
      <button @click="fn1" class="text-[black] btn-c">手机号登录</button>
      <button @click="fn2" class="text-[black] btn-c">邮箱登录</button>
      <button @click="fn3" class="text-[black] btn-c">二维码登录</button>
    </div>
    <div class="flex justify-around mt-10">
      <Icon icon="ic:baseline-wechat" class="h-10 w-10" />
      <Icon icon="mingcute:qq-fill" class="h-10 w-10" />
      <Icon icon="fa:weibo" class="h-10 w-10" />
    </div>
    <div class="flex justify-center mt-32">
      <input type="checkbox" />
      <p class="text-sm">同意 《用户协议》 《隐私政策》 《儿童隐私政策》</p>
    </div>
  </div>
  <component :is="component" @qw="fn4"></component>
</template>
