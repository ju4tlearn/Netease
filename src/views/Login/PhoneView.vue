<script setup lang="ts">
import { defineEmits, ref } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
import { LogInServiceSend, LogInServicePhone } from "@/client/api";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
let title = ref(true);
let userInfo = ref({
  phone: "",
  captcha: "",
});
const getCode = async () => {
  await LogInServiceSend.getPhoneSend(userInfo.value.phone).then((res) => {
    console.log(res);
  });
};
const getUser = async () => {
  await LogInServicePhone.getPhonePhone(
    userInfo.value.phone,
    userInfo.value.captcha,
  ).then((res) => {
    localStorage.setItem("user", res.cookie);
    let qw = route.query.originPath;
    if (typeof qw === "string") {
      router.push(qw);
    } else if (Array.isArray(qw)) {
      if (qw.length > 0) {
        router.push("/");
      } else {
        router.push("/");
      }
    } else {
      router.push("/");
    }
  });
};
let fn1 = () => {
  title.value = false;
  return getCode();
};
let fn2 = () => {
  return getUser();
};
const emit = defineEmits(["qw"]);
</script>
<template>
  <div class="flex">
    <Icon
      icon="ic:twotone-arrow-back-ios"
      class="w-6 h-6"
      style="color: black"
      @click="emit('qw')"
    />
    <p class="text-xl">手机号登录</p>
  </div>

  <div class="fixed bottom-0">
    <img src="/5FCFB688BF47CEA5FED5BAB01605BE50.png" alt="" />
  </div>
  <div class="flex flex-col items-center gap-4" v-show="title">
    <div class="mt-4 flex border-solid border-b-2 border-black">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn m-1">+86</div>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow"
        >
          <li><a>+1</a></li>
          <li><a>+2</a></li>
        </ul>
      </div>
      <p class="h-full">|</p>
      <input
        type="text"
        placeholder="请输入手机号"
        v-model="userInfo.phone"
        class="input w-full max-w-xs"
      />
    </div>
    <button class="btn btn-secondary bg-primary rounded-full w-4/5">
      下一步
    </button>
  </div>
  <div class="flex flex-col items-center" v-show="!title">
    <div class="mt-4">
      验证码：<input
        type="text"
        placeholder="请输入验证码"
        v-model="userInfo.captcha"
      />
    </div>
    <button @click="fn2" class="mt-2 bg-red-500 rounded-lg w-80 text-[white]">
      登录
    </button>
  </div>
</template>
