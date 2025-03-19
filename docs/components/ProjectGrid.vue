<template>
  <div class="project-grid">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :category="project.category"
      :description="project.description"
      :image-src="project.imageSrc"
      :link="project.link"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ProjectCard from "./ProjectCard.vue";

defineProps({
  projects: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

@media (max-width: 640px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
