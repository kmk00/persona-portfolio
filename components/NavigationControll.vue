<script setup lang="ts">
const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/stack", label: "Stack" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];
</script>

<template>
  <div class="fixed w-full md:w-3/6 lg:w-2/5 h-screen">
    <!-- Navigation Mobile -->
    <div class="md:hidden">
      <NavigationMobile :links="navigationLinks" />
    </div>
    <div class="hidden md:block">
      <NavigationDesktop :links="navigationLinks" />
    </div>
  </div>
</template>
