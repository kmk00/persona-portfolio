<script setup lang="ts">
const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/stack", label: "Stack" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const start = useStartPage();
</script>

<template>
  <Transition name="slide-in">
    <div v-if="!start.isOpen" class="fixed z-40 lg:w-1/5 w-full lg:h-screen">
      <!-- Navigation Mobile -->
      <div class="lg:hidden">
        <NavigationMobile :links="navigationLinks" />
      </div>
      <div class="hidden lg:block">
        <NavigationDesktop :links="navigationLinks" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-in-enter-active {
  transition: all 1s ease;
}

.slide-in-enter-from {
  transform: translateX(-100%);
}
</style>
