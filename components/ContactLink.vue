<script setup lang="ts">
const { link, label } = defineProps({
  link: String,
  label: String,
  rotate: String,
});
</script>

<template>
  <div class="relative">
    <a
      class="absolute right-[50%] z-10 translate-x-[50%] hover:scale-110 duration-200 ease-in-out"
      :href="link"
      >{{ label }}</a
    >
  </div>
</template>

<style scoped>
.text-outline {
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: black;
}
</style>
