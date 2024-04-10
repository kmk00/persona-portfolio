<script setup lang="ts">
const { name, description, technologies, projectLink, demoLink, image, index } =
  defineProps<{
    name: string;
    description: string;
    technologies: string[];
    projectLink: string;
    demoLink?: string;
    image?: string;
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
      class="gentle-tilt-move-shake cursor-pointer font-markin text-center border-8 lg:min-w-[650px] lg:max-w-[900px] border-black"
    >
      <div class="bg-white text-3xl p-2">
        <p>{{ name }}</p>
      </div>
      <div
        class="flex gap-3 justify-center bg-black text-white overflow-x-auto whitespace-nowrap px-4 py-2"
      >
        <p v-for="(tech, index) in technologies">
          {{ tech }}
        </p>
      </div>
    </div>
    <Transition name="fade">
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
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.gentle-tilt-move-shake:hover {
  animation: tilt-n-move-shaking 1s infinite;
}

@keyframes tilt-n-move-shaking {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0) rotate(0deg);
  }
  75% {
    transform: translate(-1px, 1px) rotate(-0.5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
</style>
