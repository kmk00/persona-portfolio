<script setup>
useSeoMeta({
  title: "Contact",
  description: "Contact me",
});
</script>

<template>
  <div>
    <div
      class="font-expose p-8 lg:px-2 relative z-30 text-center text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-white"
    >
      <p>Don’t hesitate to contact me...</p>
      <div
        class="flex flex-col gap-4 space-y-24 mt-8 lg:mt-24 text-6xl lg:text-8xl"
      >
        <ContactLink link="https://github.com/kmk00" label="Github" />
        <ContactLink link="mailto:lukaminskii00@gmail.com" label="Mail" />
        <ContactLink link="/resume.pdf" label="Resume" />
      </div>
    </div>
    <div
      class="w-[400px] h-[300px] bg-customRed-400 fixed bottom-0 right-0 translate-x-[40%] translate-y-[30%] rotate-[40deg]"
    ></div>
    <div
      class="w-[400px] h-[300px] bg-customGray-100 fixed bottom-0 right-0 translate-x-[-20%] translate-y-[70%] rotate-[40deg]"
    ></div>
  </div>
</template>
