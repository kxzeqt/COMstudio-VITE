<template>
  <div ref="section" class="opacity-0">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section = ref(null);

const props = defineProps({
  duration: { type: Number, default: 0.8 },
  delay: { type: Number, default: 0.2 },
  fromY: { type: Number, default: 50 },
});

onMounted(() => {
  gsap.to(section.value, {
    opacity: 1,
    y: 0,
    duration: props.duration,
    delay: props.delay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});
</script>
