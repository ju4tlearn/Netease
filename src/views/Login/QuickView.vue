<script setup lang="ts">
import { defineEmits } from "vue";
import { LogInServiceKey, LogInServiceImg } from "@/client/api";
import { ref } from "vue";
let key = ref("");
let img = ref("");
const test = async () => {
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
};
// const test1 = async () => {
//   await LogInServiceImg.getQuickImg(key.value, true).then((res) => {
//     console.log(key.value);
//     console.log(res.data.qrimg);
//     img.value = res.data.qrimg;
//     console.log(img.value);
//   });
// };
test();
// test1();
// console.log(test());

const emit = defineEmits(["qw"]);
</script>
<template>
  <button @click="emit('qw')">返回</button>

  <div>请扫描二维码</div>
  <img :src="img" alt="" />
</template>
