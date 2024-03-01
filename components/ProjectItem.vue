<script setup lang="ts">
const { name, description, technologies, projectLink, demoLink, image, index } =
  defineProps<{
    name: string;
    description: string;
    technologies: string[];
    projectLink: string;
    demoLink?: string;
    image: string;
    index: number;
  }>();
</script>

<template>
  <div
    :class="index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'"
    class="font-markin text-center border-8 lg:min-w-[700px] w-full lg:max-w-[900px] border-black"
  >
    <div class="bg-white text-3xl p-2">
      <p>{{ name }}</p>
    </div>
    <div class="bg-black text-white p-2 flex justify-center">
      <p v-for="(tech, index) in technologies">
        {{ tech }} {{ index < technologies.length - 1 ? "★&nbsp" : "" }}
      </p>
    </div>
  </div>
</template>
