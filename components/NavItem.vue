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
    class="relative w-[280px] h-[70px] sm:w-[340px] sm:h-[100px]"
  >
    <img class="absolute" :src="imagePath" />
    <NuxtLink class="left-[50%] translate-x-[-50%] absolute top-[30%]" :to="to">
      {{ label }}
    </NuxtLink>
  </div>
</template>
