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
    localStorage.setItem("cookie", res.cookie);
    localStorage.setItem("id", String(res.account.id));
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
  <div class="flex flex-col gap-4">
    <div class="flex gap-4">
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
      <label class="input input-bordered flex items-center gap-2">
        <select class="select w-full max-w-xs">
          <option>+86</option>
          <option>+1</option>
          <option>+2</option>
        </select>
        <input
          type="text"
          class="grow"
          placeholder=" 请输入手机号"
          v-model="userInfo.phone"
        />
      </label>
      <button
        @click="fn1"
        class="btn btn-secondary bg-primary rounded-full w-4/5"
      >
        下一步
      </button>
    </div>
    <div class="flex flex-col items-center gap-4" v-show="!title">
      <label class="input input-bordered flex items-center gap-2">
        验证码
        <input
          type="text"
          v-model="userInfo.phone"
          class="grow"
          placeholder="请输入验证码"
        />
      </label>
      <button
        @click="fn2"
        class="btn btn-secondary bg-primary rounded-full w-4/5"
      >
        登录
      </button>
    </div>
  </div>
</template>
