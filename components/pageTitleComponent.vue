<script setup lang="ts">
const route = useRoute();
const navigation = useNavigation();
</script>

<template>
  <div
    v-if="route.name === 'index'"
    @click="navigation.toggle"
    class="uppercase cursor-pointer font-bold translate-x-[-50%] left-[50%] absolute z-[-10] top-10"
  >
    <div class="w-[300px] h-[300px] relative">
      <img class="absolute" src="~/assets/shapes/titleImg.svg" />
      <p
        class="absolute top-[20%] tracking-widest text-white left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-10deg] font-expose text-6xl"
      >
        home
      </p>
    </div>
  </div>
  <div
    v-else
    @click="navigation.toggle"
    class="uppercase cursor-pointer font-bold translate-x-[-50%] left-[50%] absolute z-[-10] top-10"
  >
    <div class="w-[300px] h-[300px] relative">
      <img class="absolute" src="~/assets/shapes/titleImg.svg" />
      <p
        class="absolute top-[20%] tracking-wide text-white left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-10deg] font-expose text-6xl"
      >
        {{ route.name }}
      </p>
    </div>
  </div>
</template>
