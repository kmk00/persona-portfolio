<script setup lang="ts">
import { technologies, wantToLearn } from "~/assets/data/technologies";

const technologyStore = useTechnologies();
</script>

<template>
  <div>
    <div class="font-expose pr-4 text-xl">
      <p class="text-4xl my-8 text-customGray-100 text-center">
        Technologies and tools I've already used.
      </p>
      <div
        class="grid pt-8 h-[300px] overflow-y-scroll overflow-x-hidden text-white grid-cols-2 sm:grid-cols-3 justify-center items-center text-center scrollbar scrollbar-thumb-customYellow scrollbar-track-white scrollbar-thin"
      >
        <StackItem
          v-for="tech in technologies"
          :key="tech.name"
          :stack-name="tech.name"
          :icon-name="tech.iconName"
        />
      </div>
      <p class="text-4xl my-8 text-customGray-100 text-center lg:text-right">
        Things I want to learn next...
      </p>
      <div class="lg:grid lg:grid-cols-2 justify-center items-center">
        <div class="lg:block hidden opacity-60">
          <Icon
            :name="technologyStore.technologyIcon"
            height="300"
            width="300"
            class="text-customYellow"
          />
        </div>
        <div
          class="grid w-full h-[300px] sm:gap-4 sm:mr-4 mx-auto text-white grid-cols-2 justify-center items-center text-center"
        >
          <StackItem
            v-for="tech in wantToLearn"
            :key="tech.name"
            :stack-name="tech.name"
            :icon-name="tech.iconName"
          />
        </div>
      </div>
    </div>
  </div>
</template>
