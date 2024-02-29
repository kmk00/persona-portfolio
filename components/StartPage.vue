<script setup>
const startPage = useStartPage();
</script>

<template>
  <div
    v-if="startPage.isOpen"
    class="fixed w-screen h-screen bg-black justify-center text-white items-center md:justify-end md:items-end flex"
  >
    <div class="group md:mr-20 md:mb-20 relative">
      <img
        class="hidden group-hover:block absolute"
        src="~/assets/shapes/start-rect2.svg"
      />
      <button
        @click="startPage.toggle"
        class="font-prototype rotate-[-15deg] p-5 m-5 text-6xl"
      >
        S<span class="group-hover:text-black">T</span>A<span
          class="group-hover:text-black"
          >R</span
        >T
      </button>
    </div>
  </div>
</template>
