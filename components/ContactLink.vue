<script setup lang="ts">
const { link, label, rotate } = defineProps({
  link: String,
  label: String,
  rotate: String,
});

const isHovered = ref(false);
</script>

<template>
  <div class="relative">
    <img
      :class="isHovered ? 'opacity-100' : 'opacity-0 '"
      class="absolute top-0 right-[50%] transition-all duration-200 translate-x-[65%] translate-y-[-20%] h-[100px] lg:h-[200px] z-0"
      src="~/assets/shapes/splash1.svg"
    />
    <a
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      :class="isHovered ? `text-outline ${rotate}` : `${rotate}`"
      class="absolute right-[50%] z-10 translate-x-[50%]"
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
