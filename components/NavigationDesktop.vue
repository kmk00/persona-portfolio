<script setup lang="ts">
defineProps<{
  links: { to: string; label: string }[];
}>();

const navigation = useNavigation();
const route = useRoute();
</script>

<template>
  <div>
    <div class="cka" v-if="navigation.isOpen">
      <img
        src="~/assets/shapes/stars.svg"
        alt="stars"
        class="fixed h-screen -z-10"
      />
      <div
        class="flex flex-col w-[400px] h-screen justify-center items-center gap-2 z-20"
      >
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>
    <div class="">
      <div
        v-if="route.name === 'index'"
        class="uppercase text-8xl cursor-pointer font-bold right-5 absolute bottom-[20%] -rotate-[10deg]"
      >
        Home
      </div>
      <div
        v-else
        class="uppercase text-8xl cursor-pointer translate-x-[20px] font-bold left-[40%] absolute bottom-[20%] -rotate-[10deg]"
      >
        {{ route.name }}
      </div>
    </div>
  </div>
</template>
