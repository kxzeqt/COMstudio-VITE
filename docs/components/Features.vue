<template>
  <div class="features-container">
    <div
      v-for="(feature, index) in filteredFeatures"
      :key="index"
      class="feature-card"
    >
      <div v-if="feature.icon" class="feature-icon">
        <component :is="feature.icon" />
      </div>
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.details }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "basic",
    validator: (value) => ["basic", "advanced"].includes(value),
  },
});

const allFeatures = {
  basic: [
    {
      title: "Fast Development",
      details: "Built on top of Vite for lightning-fast performance",
      icon: null,
    },
    {
      title: "SEO-friendly",
      details: "Static site generation with dynamic capabilities",
      icon: null,
    },
    {
      title: "Customizable",
      details: "Extend with Vue components and Tailwind CSS",
      icon: null,
    },
  ],
  advanced: [
    {
      title: "Advanced Animations",
      details: "GSAP integration for smooth animations",
      icon: null,
    },
    {
      title: "Plugin System",
      details: "Extend functionality with various plugins",
      icon: null,
    },
    {
      title: "TypeScript Support",
      details: "First-class TypeScript support for type safety",
      icon: null,
    },
  ],
};

const filteredFeatures = computed(() => {
  return allFeatures[props.type] || [];
});
</script>

<style scoped>
.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-card {
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--vp-c-bg-soft);
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
}

h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>
