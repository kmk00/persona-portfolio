<script setup>
const navigation = useNavigation();

useSeoMeta({
  title: "Home",
  description: "Home Page",
});
</script>

<template>
  <div>
    <div
      class="text-customGray-100 font-prototype p-8 text-3xl relative z-30 md:text-5xl lg:text-7xl text-center flex flex-col gap-8 lg:gap-20 mx-auto"
    >
      <div class="lg:text-left flex flex-col gap-5">
        <p class="lg:ml-20">Hi,</p>
        <p class="lg:ml-10">I'm Lucas,</p>
        <p>Web Developer</p>
      </div>
      <span
        class="border-b-2 border-customGray-300 max-w-[700px] w-full mx-auto"
      ></span>
      <div class="lg:text-right flex flex-col gap-5">
        <p>Welcome</p>
        <p class="lg:mr-10">to my portfolio</p>
      </div>
    </div>
    <img
      :class="navigation.isOpen ? 'hidden' : 'block'"
      class="lg:hidden fixed bottom-10 opacity-10 z-0 scale-[.6] left-[50%] translate-x-[-50%]"
      src="~/assets/shapes/Star.svg"
    />
    <img
      :class="navigation.isOpen ? 'hidden' : 'block'"
      class="lg:hidden fixed bottom-0 z-0"
      src="~/assets/shapes/home-rect.svg"
    />
    <img
      :class="navigation.isOpen ? 'hidden' : 'block'"
      class="lg:hidden fixed bottom-0 right-0 z-0"
      src="~/assets/shapes/home-rect2.svg"
    />
  </div>
</template>
