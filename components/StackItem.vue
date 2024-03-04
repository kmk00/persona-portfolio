<script setup lang="ts">
const { stackName } = defineProps<{
  stackName: string;
  iconName: string;
}>();

const tech = useTechnologies();
</script>

<template>
  <div
    @mouseenter="tech.setStackName(stackName, iconName)"
    @mouseout="tech.setStackName('', '')"
    class="relative mx-auto w-[150px] lg:w-[200px] my-8"
  >
    <p
      class="text-2xl text-white lg:text-4xl absolute bottom-2 cursor-pointer p-2 hover:scale-110 hover:text-customYellow transition-all duration-300 ease-in-out right-[50%] translate-x-[50%]"
    >
      {{ stackName }}
    </p>
  </div>
</template>
