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

const isOpen = ref(false);
const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="w-full">
    <div
      @click="toggle"
      :class="index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'"
      class="cursor-pointer font-markin text-center border-8 lg:min-w-[650px] lg:max-w-[900px] border-black"
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
    <ProjectModal
      :name="name"
      :description="description"
      :toggle="toggle"
      :isOpen="isOpen"
      :projectLink="projectLink"
      :demoLink="demoLink"
      :image="image"
      :technologies="technologies"
    />
  </div>
</template>
