<script setup>
const startPage = useStartPage();
</script>

<template>
  <Transition name="fade">
    <div class="fixed w-screen h-screen z-50" v-if="startPage.isOpen">
      <div
        class="justify-center w-screen h-screen bg-black text-white items-center md:justify-end md:items-end flex"
      >
        <div class="group md:mr-20 md:mb-20 relative">
          <img
            class="opacity-0 group-hover:opacity-100 absolute transition-all ease-in-out duration-100"
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
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
