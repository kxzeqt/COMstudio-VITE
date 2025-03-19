<template>
  <div class="timeline">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="timeline-item"
      :class="{ 'timeline-item-right': index % 2 !== 0 }"
    >
      <div class="timeline-content">
        <div class="timeline-date">{{ item.date }}</div>
        <h3 class="timeline-title">{{ item.title }}</h3>
        <div class="timeline-body">
          <slot :name="`item-${index}`">
            <p>{{ item.content }}</p>
          </slot>
        </div>
        <div v-if="item.image" class="timeline-image">
          <img :src="item.image" :alt="item.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    validator: (items) => {
      return items.every(
        (item) =>
          item.date !== undefined &&
          item.title !== undefined &&
          (item.content !== undefined || item.image !== undefined)
      );
    },
  },
});
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}

.timeline::after {
  content: "";
  position: absolute;
  width: 4px;
  background-color: var(--vp-c-brand-lighter);
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 0 40px 60px 0;
}

.timeline-item-right {
  left: 50%;
  padding: 0 0 60px 40px;
}

.timeline-content {
  padding: 24px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.timeline-content::after {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  right: -12px;
  top: 20px;
  background-color: var(--vp-c-bg-soft);
  transform: rotate(45deg);
}

.timeline-item-right .timeline-content::after {
  left: -12px;
  right: auto;
}

.timeline-item::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  right: -10px;
  background-color: var(--vp-c-brand);
  border: 4px solid var(--vp-c-brand-lighter);
  top: 20px;
  border-radius: 50%;
  z-index: 1;
}

.timeline-item-right::before {
  left: -10px;
  right: auto;
}

.timeline-date {
  display: inline-block;
  padding: 4px 12px;
  background-color: var(--vp-c-brand);
  color: white;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;
}

.timeline-title {
  margin: 0 0 12px 0;
  color: var(--vp-c-text-1);
  font-size: 20px;
}

.timeline-body {
  margin-bottom: 16px;
  color: var(--vp-c-text-2);
}

.timeline-image {
  overflow: hidden;
  border-radius: 4px;
  margin-top: 16px;
}

.timeline-image img {
  width: 100%;
  height: auto;
  transition: transform 0.5s ease;
}

.timeline-image img:hover {
  transform: scale(1.05);
}

@media screen and (max-width: 768px) {
  .timeline::after {
    left: 31px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 0;
  }

  .timeline-item-right {
    left: 0;
    padding-left: 70px;
    padding-right: 0;
  }

  .timeline-item::before,
  .timeline-item-right::before {
    left: 21px;
    right: auto;
  }

  .timeline-content::after,
  .timeline-item-right .timeline-content::after {
    left: -12px;
    right: auto;
  }
}
</style>
