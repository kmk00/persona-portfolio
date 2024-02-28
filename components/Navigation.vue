<script setup>
const route = useRoute();
const router = useRouter();
const currentRoute = ref("");
const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/technologies", label: "Technologies" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];
</script>

<template>
  <div>
    <div>
      <NuxtLink v-for="link in navigationLinks" :key="link.to" :to="link.to">
        {{ link.label }}
      </NuxtLink>
    </div>

    <div v-if="route.name === 'index'" class="font-bold">Home</div>
    <div v-else class="font-bold">{{ route.name }}</div>
  </div>
</template>
