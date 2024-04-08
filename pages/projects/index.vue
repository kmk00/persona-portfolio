<script setup lang="ts">
import { projects } from "~/assets/data/projects";

useSeoMeta({
  title: "Projects",
  description: "Projects I've made and things I worked on",
});
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
      class="fixed 2xl:scale-[1.3] bottom-0 lg:right-0 lg:top-20 lg:translate-x-[200px] xl:translate-x-[100px]"
      src="~/assets/shapes/project-bg2.svg"
    />
  </div>
</template>
