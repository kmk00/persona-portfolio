<script setup lang="ts">
defineProps<{
  links: { to: string; label: string }[];
}>();

const navigation = useNavigation();

const windowWidth = useState("windowWidth", () =>
  process.client ? window.innerWidth : 0
);

if (process.client) {
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
    if (navigation.isOpen && windowWidth.value > 768) navigation.isOpen = false;
  });
}
</script>

<template>
  <div>
    <PageTitleComponent />
    <div class="" v-if="navigation.isOpen">
      <div
        class="flex font-prototype text-4xl sm:text-5xl gap-2 tracking-widest gap flex-col h-screen bg-black justify-center items-center z-20"
      >
        <img
          class="fixed h-[1200px] max-w-[2000px] w-[2000px]"
          src="~/assets/shapes/bg-mobile.svg"
        />
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
