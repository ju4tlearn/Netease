<script setup lang="ts">
import { defineEmits } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
import { LogInServiceKey, LogInServiceImg, LogInService } from "@/client/api";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
let key = ref("");
let img = ref("");
const emit = defineEmits(["qw"]);
const getQuick = async () => {
  await LogInServiceKey.getQuickKey().then((res: { data: { unikey: any } }) => {
    console.log(res.data.unikey);
    key.value = res.data.unikey;
    console.log(key.value);
  });
  await LogInServiceImg.getQuickImg(key.value, true).then((res) => {
    console.log(key.value);
    console.log(res.data.qrimg);
    img.value = res.data.qrimg;
    console.log(img.value);
  });
  qqq();
};
getQuick();
let intervalId: ReturnType<typeof setInterval> | undefined;

const clean = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = undefined;
  }
};

const qqq = () => {
  intervalId = setInterval(async () => {
    try {
      const res = await LogInService.getStatus(key.value);
      switch (res.code) {
        case 800:
          console.log("二维码过期");
          break;
        case 801:
          console.log("等待扫码");
          break;
        case 802:
          console.log("待确认");
          break;
        case 803:
          console.log("登录成功");
          console.log(res);
          alert("登录成功");
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
          clean();
          break;
        default:
          console.log("接口出错");
          break;
      }
    } catch (error) {
      console.error("请求出错:", error);
      clean();
    }
  }, 2000);
};
</script>
<template>
  <div class="flex">
    <Icon
      icon="ic:twotone-arrow-back-ios"
      class="w-7 h-7"
      style="color: black"
      @click="emit('qw')"
    />
    <p class="text-xl">二维码登录</p>
  </div>
  <div class="flex flex-col items-center">
    <div>请扫描二维码</div>
    <img :src="img" alt="" />
  </div>
  <div class="fixed bottom-0">
    <img src="/5FCFB688BF47CEA5FED5BAB01605BE50.png" alt="" />
  </div>
</template>
