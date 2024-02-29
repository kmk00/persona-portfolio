<script setup lang="ts">
defineProps<{
  links: { to: string; label: string }[];
}>();

const navigation = useNavigation();
const route = useRoute();
</script>

<template>
  <div>
    <div class="">
      <img
        style="clip-path: polygon(0 0, 88% 0, 64% 100%, 0% 100%)"
        src="~/assets/shapes/bg-mobile.svg"
        alt="stars"
        class="fixed min-h-screen h-[1800px] max-w-[1000px] left-[-300px] top-[-250px] bg-black -z-10 border-8 border-black"
      />
      <div
        class="flex flex-col w-[400px] h-screen justify-center items-center gap-2 z-20"
      >
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>
    <PageTitleComponent
      :div-position-classes="' cursor-pointer left-40 fixed z-[-10] bottom-0'"
      :text-classes="'absolute top-[20%] font-bold uppercase tracking-wide text-white left-[50%] translate-x-[-50%] translate-y-[-10%]  rotate-[-10deg] font-expose text-8xl'"
      :div-sizes-classes="'w-[500px] h-[300px] relative'"
    />
  </div>
</template>
