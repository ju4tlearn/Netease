<script setup lang="ts">
import { defineEmits, ref } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
import { LogInServiceEmail } from "@/client/api/services/LogInService";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
let title = ref(true);
const getUser = async () => {
  await LogInServiceEmail.getEmail(
    userInfo.value.email,
    userInfo.value.password,
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
const emit = defineEmits(["qw"]);
let userInfo = ref({
  email: "",
  password: "",
});
let fn1 = () => {
  return getUser();
};
let fn2 = () => {
  title.value = false;
};
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
      <p class="text-xl">邮箱登录</p>
    </div>
    <div class="fixed bottom-0">
      <img src="/5FCFB688BF47CEA5FED5BAB01605BE50.png" alt="" />
    </div>
    <div class="flex flex-col items-center gap-4" v-show="title">
      <label class="input input-bordered flex items-center gap-2">
        邮箱
        <input
          type="text"
          class="grow"
          placeholder="请输入邮箱@163.com"
          v-model="userInfo.email"
        />
      </label>
      <button
        @click="fn2"
        class="btn btn-secondary bg-primary rounded-full w-4/5"
      >
        下一步
      </button>
    </div>
    <div class="flex flex-col items-center gap-4" v-show="!title">
      <label class="input input-bordered flex items-center gap-2">
        密码
        <input
          type="text"
          class="grow"
          placeholder="请输入密码"
          v-model="userInfo.password"
        />
      </label>
      <button
        @click="fn1"
        class="btn btn-secondary bg-primary rounded-full w-4/5"
      >
        登陆
      </button>
    </div>
  </div>
</template>
