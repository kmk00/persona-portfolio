<script setup lang="ts">
import btn1 from "~/assets/shapes/nav-btn-1.svg";
import btn2 from "~/assets/shapes/nav-btn-2.svg";
import btn3 from "~/assets/shapes/nav-btn-3.svg";
import btn4 from "~/assets/shapes/nav-btn-4.svg";
import btn5 from "~/assets/shapes/nav-btn-5.svg";

const { to, label, index } = defineProps<{
  to: string;
  label: string;
  index: number;
}>();

const imagePath = ref("");

switch (index + 1) {
  case 1:
    imagePath.value = btn1;
    break;
  case 2:
    imagePath.value = btn2;
    break;
  case 3:
    imagePath.value = btn3;
    break;
  case 4:
    imagePath.value = btn4;
    break;
  case 5:
    imagePath.value = btn5;
    break;
}
</script>

<template>
  <div
    :class="
      index % 2 == 0
        ? 'translate-x-[-5%] rotate-[-1deg]'
        : 'translate-x-[4%] rotate-[1deg]'
    "
    class="relative horizontal-shake font-prototype tracking-widest w-[280px] h-[70px] md:w-[310px] md:h-[90px] lg:w-[340px] lg:h-[100px] xl:w-[380px] xl:h-[120px]"
  >
    <img class="absolute" :src="imagePath" />
    <NuxtLink class="left-[50%] translate-x-[-50%] absolute top-[30%]" :to="to">
      {{ label }}
    </NuxtLink>
  </div>
</template>

<style scoped>
.horizontal-shake:hover {
  animation: horizontal-shaking 0.35s infinite;
}

@keyframes horizontal-shaking {
  0% {
    transform: translateX(0);
    transform: rotate(0deg);
  }
  25% {
    transform: translateX(1px);
    transform: rotate(0.5deg);
  }
  50% {
    transform: translateX(-1px);
    transform: rotate(0deg);
  }
  75% {
    transform: translateX(1px);
    transform: rotate(-0.5deg);
  }
  100% {
    transform: translateX(0);
    transform: rotate(0deg);
  }
}
</style>
