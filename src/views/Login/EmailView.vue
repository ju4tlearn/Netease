<script setup lang="ts">
import { defineEmits, ref } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
import { LogInServiceEmail } from "@/client/api/services/LogInService";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const getUser = async () => {
  await LogInServiceEmail.getEmail(
    userInfo.value.email,
    userInfo.value.password,
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
const emit = defineEmits(["qw"]);
let userInfo = ref({
  email: "",
  password: "",
});
let fn1 = () => {
  return getUser();
};
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
      邮箱：<input
        type="text"
        v-model="userInfo.email"
        placeholder="请输入163邮箱"
      />
    </div>
    <div>
      密码：<input
        type="text"
        placeholder="请输入密码"
        v-model="userInfo.password"
      />
    </div>
    <button @click="fn1">登录</button>
    <div class="fixed bottom-0">
      <img src="/5FCFB688BF47CEA5FED5BAB01605BE50.png" alt="" />
    </div>
  </div>
</template>
