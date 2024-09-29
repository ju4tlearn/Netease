<script setup lang="ts">
import { defineEmits, ref } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
import { LogInServiceSend, LogInServicePhone } from "@/client/api";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

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
  return getCode();
};
let fn2 = () => {
  return getUser();
};
const emit = defineEmits(["qw"]);
</script>
<template>
  <Icon
    icon="ic:twotone-arrow-back-ios"
    class="w-7 h-7"
    style="color: black"
    @click="emit('qw')"
  />
  <br />
  <div class="flex flex-col items-center">
    <div>
      手机号：<input
        type="text"
        v-model="userInfo.phone"
        placeholder="请输入手机号"
      />
    </div>
    <div>
      验证码：<input
        type="text"
        placeholder="请输入验证码"
        v-model="userInfo.captcha"
      />
    </div>
    <div class="mt-5 flex flex-col items-center">
      <button @click="fn1">发送验证码</button>
      <button @click="fn2">登录</button>
    </div>
    <div class="fixed bottom-0">
      <img src="/5FCFB688BF47CEA5FED5BAB01605BE50.png" alt="" />
    </div>
  </div>
</template>
