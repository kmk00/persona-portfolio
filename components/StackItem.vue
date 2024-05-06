<script setup lang="ts">
const { stackName, iconName, index, technologiesNumber } = defineProps<{
  stackName: string;
  iconName: string;
  index: number;
  technologiesNumber: number;
}>();

const tech = useTechnologies();

const delay = `${index * 0.1}s`;
</script>

<template>
  <div
    @mouseenter="tech.setStackName(stackName, iconName)"
    @mouseout="tech.setStackName('', '')"
    class="relative mx-auto w-[150px] lg:w-[200px] my-8"
  >
    <Transition name="highlight">
      <p
        class="highlight text-2xl text-white lg:text-4xl absolute bottom-2 cursor-pointer p-2 hover:scale-110 hover:text-customYellow transition-all duration-300 ease-in-out"
      >
        {{ stackName }}
      </p>
    </Transition>
  </div>
</template>

<style scoped>
.highlight {
  animation: highlight 1s ease-in-out infinite;
  animation-delay: v-bind(delay);
}

@keyframes highlight {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
