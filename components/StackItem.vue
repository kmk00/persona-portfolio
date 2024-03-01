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
    <img
      class="absolute bottom-0 right-[50%] translate-x-[50%]"
      src="~/assets/shapes/stack-item.svg"
    />
    <p
      style="pointer-events: none"
      class="text-xl lg:text-2xl absolute bottom-2 right-[50%] translate-x-[50%]"
    >
      {{ stackName }}
    </p>
  </div>
</template>
