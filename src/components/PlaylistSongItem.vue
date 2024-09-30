<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";

defineProps<{
  index: number;
  name: string;
  author: string;
  alName: string;
  isSQ: boolean;
  isHaveVideo: boolean;
}>();
</script>

<template>
  <div class="overflow-hidden flex justify-between py-1">
    <div class="flex items-center gap-1">
      <div class="text-base-content/50 text-lg size-8 text-center">
        {{ index + 1 }}
      </div>

      <div class="relative w-60">
        <p class="truncate text-lg">{{ name }}</p>
        <div class="flex items-center gap-1">
          <div
            v-if="isSQ"
            class="rounded border border-red-500/50 text-red-500 px-[2px] py-[0.5px] text-[0.5rem]"
          >
            SQ
          </div>

          <span class="text-sm text-base-content/50 truncate w-48">
            {{ author }}
            -
            {{ alName }}
          </span>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <Icon
        v-if="isHaveVideo"
        icon="octicon:play-24"
        class="size-6 text-base-content/50"
      />
      <Icon icon="pepicons-pencil:dots-y" class="size-6 text-base-content/50" />
    </div>
  </div>
</template>
