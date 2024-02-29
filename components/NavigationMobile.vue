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
    if (navigation.isOpen && windowWidth.value > 1024)
      navigation.isOpen = false;
  });
}
</script>

<template>
  <div>
    <PageTitleComponent
      :div-position-classes="' cursor-pointer left-[50%] translate-x-[-50%] fixed z-[-10]  top-10'"
      :text-classes="'absolute top-[20%] font-bold uppercase tracking-wide text-white left-[50%] translate-x-[-50%] translate-y-[-50%]  rotate-[-10deg] font-expose text-5xl'"
      :div-sizes-classes="'w-[300px] h-[300px] relative'"
    />
    <div class="" v-if="navigation.isOpen">
      <div
        class="flex text-4xl gap-2 flex-col h-screen bg-black justify-center items-center z-20"
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
            class="left-[50%] font-prototype text-white translate-x-[-50%] absolute top-[30%]"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
