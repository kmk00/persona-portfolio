<script setup lang="ts">
const { isOpen, name, description, projectLink, demoLink, toggle } =
  defineProps({
    isOpen: Boolean,
    toggle: Function as PropType<() => void>,
    name: String,
    description: String,
    projectLink: String,
    demoLink: String,
  });
</script>

<!-- @click="toggle" -->

<template>
  <div
    v-if="isOpen"
    class="fixed flex justify-center items-center w-screen h-screen top-0 left-0 z-[10] bg-black/50"
  >
    <div
      class="text-white relative bg-customGray-200 max-w-[400px] text-2xl px-10 mx-8"
    >
      <div
        class="w-[200px] flex justify-center items-center h-[100px] translate-x-[20px] translate-y-[-40px] rotate-[6deg] right-0 top-0 absolute bg-customGray-200"
      >
        <div
          class="bg-white w-[90%] h-[90%] overflow-y-auto border-8 flex flex-wrap font-p5shatty justify-center items-center text-black text-lg border-customGray-300"
        >
          <p>Vue ★&nbsp</p>
          <p>TailwindCSS</p>
          <p>Vue ★&nbsp</p>
          <p>TailwindCSS</p>
          <p>Vue ★&nbsp</p>
          <p>TailwindCSS</p>
        </div>
      </div>
      <button
        @click="toggle"
        class="absolute text-8xl top-0 left-0 translate-x-[-20px] font-expose translate-y-[-50px] rotate-[-20deg]"
      >
        x
      </button>
      <p
        style=""
        class="text-3xl tracking-widest translate-y-[-30px] font-expose rotate-[-10deg] mb-8"
      >
        {{ name }}
      </p>
      <p class="text-xl font-p5shatty">
        {{ description }}
      </p>
      <div class="flex gap-4 font-expose mb-4 text-customGray-300 text-4xl">
        <a v-if="demoLink" :href="demoLink" class="mt-8 inline-block">DEMO</a>
        <a :href="projectLink" class="mt-8 inline-block">PROJECT</a>
      </div>
    </div>
  </div>
</template>
