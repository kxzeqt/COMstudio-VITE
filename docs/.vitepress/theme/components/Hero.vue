<!--
  Hero Component
  This component creates a prominent hero section at the top of pages.
  It displays a title, description, and optional action buttons.

  Usage example in Markdown:
  <Hero
    title="Welcome to Our Documentation"
    description="Learn how to use our amazing product">
    <template #actions>
      <a class="btn btn-primary" href="/guide/">Get Started</a>
      <a class="btn btn-outline" href="/api/">API Reference</a>
    </template>
  </Hero>
-->
<template>
  <div class="vp-hero">
    <div class="vp-hero-content">
      <h1 class="vp-hero-title">{{ title }}</h1>
      <p class="vp-hero-description">{{ description }}</p>
      <div class="vp-hero-actions">
        <!-- Slot for action buttons -->
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Component Props
 * These define the data that must be passed to this component
 */
defineProps({
  /**
   * The main heading text displayed in the hero
   * This should be concise and attention-grabbing
   */
  title: {
    type: String,
    required: true,
  },
  /**
   * The descriptive text displayed below the title
   * This should provide a brief overview or value proposition
   */
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Hero component following VitePress naming conventions and styling approach */
.vp-hero {
  padding: 96px 24px;
  margin: -24px -24px 24px;
  /* Use viewport units but keep some space for header/footer */
  min-height: calc(100vh - 64px - 48px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  border-bottom: 1px solid var(--vp-c-divider);
}

.vp-hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.vp-hero-title {
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  background: linear-gradient(
    120deg,
    var(--vp-c-brand) 30%,
    var(--vp-c-brand-light)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.vp-hero-description {
  margin: 24px auto 40px;
  max-width: 640px;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.vp-hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

/* Responsive adjustments - match VitePress breakpoints */
@media (max-width: 960px) {
  .vp-hero {
    padding: 80px 20px;
  }

  .vp-hero-title {
    font-size: 36px;
  }

  .vp-hero-description {
    font-size: 18px;
  }
}

@media (max-width: 640px) {
  .vp-hero {
    padding: 64px 16px;
  }

  .vp-hero-title {
    font-size: 32px;
  }

  .vp-hero-description {
    font-size: 16px;
    margin-bottom: 32px;
  }
}

/* Add smooth transitions */
.vp-hero-title,
.vp-hero-description,
.vp-hero-actions {
  transition: all 0.3s ease;
}

/* Optional animation - can be removed if causing issues */
@media (prefers-reduced-motion: no-preference) {
  .vp-hero-title {
    animation: fadeInDown 0.6s ease-out;
  }

  .vp-hero-description {
    animation: fadeInUp 0.6s ease-out 0.1s both;
  }

  .vp-hero-actions {
    animation: fadeIn 0.6s ease-out 0.2s both;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
