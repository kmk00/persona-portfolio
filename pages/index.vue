<script setup>
const navigation = useNavigation();
</script>

<template>
  <div>
    <div
      class="text-customGray-100 font-markin p-3 text-5xl text-center relative flex flex-col justify-center items-center gap-8 mx-auto"
    >
      <p>Hi, I'm Lucas, Web Developer</p>
      <p>Welcome to my portfolio</p>
    </div>
    <img
      :class="navigation.isOpen ? 'hidden' : 'block'"
      class="lg:hidden fixed bottom-10 opacity-20 scale-[.4] left-[50%] translate-x-[-50%]"
      src="~/assets/shapes/Star.svg"
    />
    <img
      :class="navigation.isOpen ? 'hidden' : 'block'"
      class="lg:hidden fixed bottom-0 z-10"
      src="~/assets/shapes/home-rect.svg"
    />
    <img
      :class="navigation.isOpen ? 'hidden' : 'block'"
      class="lg:hidden fixed bottom-0 right-0 z-0"
      src="~/assets/shapes/home-rect2.svg"
    />
  </div>
</template>
