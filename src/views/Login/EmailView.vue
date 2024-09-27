<script setup lang="ts">
import { defineEmits } from "vue";
const emit = defineEmits(["qw"]);
</script>
<template>
  <button @click="emit('qw')">返回</button>

  <div>邮箱登录</div>
</template>
