<!--
  TabGroup Component
  Create tabbed interfaces to organize and display related content
  Usage example:
  <TabGroup>
    <template #tab1>First Tab Title</template>
    <template #tab2>Second Tab Title</template>
    <template #panel1>First tab content</template>
    <template #panel2>Second tab content</template>
  </TabGroup>
-->
<template>
  <div class="tab-group">
    <div class="tab-nav">
      <button
        v-for="(_, i) in tabs"
        :key="i"
        class="tab-button"
        :class="{ 'tab-active': activeTab === i }"
        @click="activeTab = i"
      >
        <slot :name="`tab${i + 1}`">Tab {{ i + 1 }}</slot>
      </button>
    </div>
    <div class="tab-panels">
      <div
        v-for="(_, i) in tabs"
        :key="i"
        class="tab-panel"
        :class="{ 'panel-active': activeTab === i }"
      >
        <slot :name="`panel${i + 1}`"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, useSlots, computed } from "vue";

// Get all available slots to determine number of tabs
const slots = useSlots();

// Calculate how many tabs we have based on tab slots
const tabs = computed(() => {
  return Object.keys(slots)
    .filter((name) => name.startsWith("tab"))
    .sort((a, b) => {
      const aNum = parseInt(a.replace("tab", ""));
      const bNum = parseInt(b.replace("tab", ""));
      return aNum - bNum;
    });
});

// Track which tab is currently active
const activeTab = ref(0);
</script>

<style scoped>
.tab-group {
  margin: 24px 0;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.tab-nav {
  display: flex;
  background-color: var(--vp-c-bg-soft);
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.tab-nav::-webkit-scrollbar {
  display: none;
}

.tab-button {
  padding: 12px 20px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  border-bottom: 2px solid transparent;
}

.tab-button:hover {
  color: var(--vp-c-text-1);
}

.tab-active {
  color: var(--vp-c-brand);
  border-bottom: 2px solid var(--vp-c-brand);
}

.tab-panels {
  padding: 24px;
  background-color: var(--vp-c-bg);
}

.tab-panel {
  display: none;
}

.panel-active {
  display: block;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive design */
@media (max-width: 640px) {
  .tab-button {
    padding: 10px 16px;
    font-size: 13px;
  }

  .tab-panels {
    padding: 16px;
  }
}
</style>
