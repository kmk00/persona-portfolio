<script setup lang="ts">
const { stackName } = defineProps<{
  stackName: string;
}>();
</script>

<template>
  <div class="relative mx-auto w-[150px] lg:w-[200px] my-8">
    <img
      class="absolute bottom-0 right-[50%] translate-x-[50%]"
      src="~/assets/shapes/stack-item.svg"
    />
    <p
      class="text-xl lg:text-2xl absolute bottom-2 right-[50%] translate-x-[50%]"
    >
      {{ stackName }}
    </p>
  </div>
</template>
