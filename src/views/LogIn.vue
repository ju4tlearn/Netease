<template>
  <div>
    手机号：<input type="text" v-model="useInfo.phone" /><br />
    验证码：<input type="password" v-model="useInfo.captcha" />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
let useInfo = ref({
  phone: "",
  captcha: "",
});
watch(useInfo.value, () => {
  console.log(useInfo.value);
});
</script>
