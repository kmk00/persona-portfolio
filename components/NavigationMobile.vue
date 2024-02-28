<script setup lang="ts">
defineProps<{
  links: { to: string; label: string }[];
}>();

const navigation = useNavigation();
const route = useRoute();
</script>

<template>
  <div>
    <div>
      <div
        v-if="route.name === 'index'"
        @click="navigation.toggle"
        class="uppercase cursor-pointer font-bold translate-x-[-50%] left-[50%] absolute z-[-10] top-10"
      >
        Home
      </div>
      <div
        v-else
        @click="navigation.toggle"
        class="uppercase cursor-pointer font-bold translate-x-[-50%] left-[50%] absolute z-[-10] top-10"
      >
        {{ route.name }}
      </div>
    </div>
    <div class="" v-if="navigation.isOpen">
      <!-- <img src="~/assets/shapes/stars.svg" alt="stars" class="absolute -z-10" /> -->
      <div
        class="flex font-prototype text-4xl sm:text-5xl gap-2 tracking-widest gap flex-col h-screen bg-red-800 justify-center items-center z-20"
      >
        <NavItem
          v-for="(link, index) in links"
          :to="link.to"
          :key="index"
          :index="index"
          :label="link.label"
        />
        <div class="relative w-[340px] h-[100px]">
          <img
            class="absolute right-[50%] translate-x-[50%] top-2 h-[100px]"
            src="~/assets/shapes/exit-btn.svg"
          />
          <button
            @click="navigation.toggle"
            class="left-[50%] text-white translate-x-[-50%] absolute top-[30%]"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
