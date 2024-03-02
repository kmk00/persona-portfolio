<script setup lang="ts">
import { projects } from "~/assets/data/projects";
</script>

<template>
  <div>
    <div class="p-8 lg:px-2 relative z-30">
      <div class="flex flex-col items-end gap-4 mt-8">
        <ProjectItem
          v-for="(project, index) in projects"
          :key="project.name"
          :name="project.name"
          :description="project.description"
          :technologies="project.technologies"
          :projectLink="project.projectLink"
          :demoLink="project.demoLink"
          :image="project.image"
          :index="index"
        />
      </div>
    </div>
    <img
      class="fixed bottom-0 lg:right-0 lg:translate-x-[200px] xl:translate-x-[400px]"
      src="~/assets/shapes/project-bg.svg"
    />
    <!-- <div
      class="w-[400px] h-[300px] bg-customRed-400 fixed bottom-0 right-0 translate-x-[40%] translate-y-[30%] rotate-[40deg]"
    ></div> -->
  </div>
</template>
