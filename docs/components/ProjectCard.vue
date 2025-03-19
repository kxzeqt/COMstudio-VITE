<template>
  <div class="project-card">
    <div class="project-image">
      <img :src="imageSrc" :alt="title" />
    </div>
    <div class="project-content">
      <h3>{{ title }}</h3>
      <p class="project-category">{{ category }}</p>
      <p class="project-description">{{ description }}</p>
      <div v-if="link" class="project-link">
        <a :href="link" class="btn">View Project</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.project-card {
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-content h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: var(--vp-c-text-1);
}

.project-category {
  font-size: 0.875rem;
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
  font-weight: 500;
}

.project-description {
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-2);
  flex-grow: 1;
}

.project-link {
  margin-top: auto;
}

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-brand);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn:hover {
  background-color: var(--vp-c-brand-dark);
}
</style>
