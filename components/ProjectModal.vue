<script setup lang="ts">
const { isOpen, name, description, projectLink, demoLink, toggle, image } =
  defineProps({
    isOpen: Boolean,
    toggle: Function as PropType<() => void>,
    name: String,
    description: String,
    projectLink: String,
    demoLink: String,
    image: String,
  });
</script>

<!-- @click="toggle" -->

<template>
  <div
    v-if="isOpen"
    class="fixed flex lg:justify-end lg:items-center justify-center items-center w-screen h-screen top-0 left-0 z-[10] pt-40 lg:pr-10 xl:pr-[100px] 2xl:px-[20%] bg-black/80"
  >
    <div
      class="text-white relative bg-customGray-200 mb-8 md:mb-16 max-w-[400px] max-h-[460px] 2xl:max-w-[800px] 2xl:max-h-[800px] md:max-h-[600px] md:max-w-[600px] text-2xl px-10 mx-8"
    >
      <div
        class="w-[200px] h-[100px] md:w-[300px] md:h-[150px] flex justify-center items-center translate-x-[20px] translate-y-[-60px] md:translate-y-[-80px] rotate-[6deg] right-0 top-0 absolute bg-customGray-200"
      >
        <div
          class="bg-white w-[90%] h-[90%] overflow-y-auto border-8 flex flex-wrap font-p5shatty justify-center items-center text-black text-sm md:text-2xl border-customGray-300"
        >
          <p>Vue ★&nbsp</p>
          <p>TailwindCSS★&nbsp</p>
          <p>Vue ★&nbsp</p>
          <p>TailwindCSS★&nbsp</p>
          <p>Vue ★&nbsp</p>
          <p>TailwindCSS</p>
        </div>
      </div>
      <button
        @click="toggle"
        class="absolute text-8xl top-0 left-0 translate-x-[2px] font-expose translate-y-[-50px] rotate-[-20deg]"
      >
        x
      </button>
      <p
        style=""
        class="text-4xl 2xl:text-6xl tracking-widest translate-y-[40px] md:translate-y-[30px] 2xl:translate-y-[20px] translate-x-[-60px] font-expose rotate-[-7deg] mb-16"
      >
        {{ name }}
      </p>
      <p
        class="text-lg xl:text-2xl max-h-[100px] overflow-y-auto font-p5shatty"
      >
        {{ description }}
      </p>
      <div
        class="flex gap-4 xl:gap-8 font-expose my-2 md:my-4 2xl:my-6 text-customGray-300 text-2xl md:text-3xl 2xl:text-5xl"
      >
        <a v-if="demoLink" :href="demoLink">DEMO</a>
        <a :href="projectLink">PROJECT</a>
      </div>
      <div class="mb-2 border-8 border-customGray-300">
        <img :src="`/img/${image}`" />
      </div>
    </div>
  </div>
</template>
