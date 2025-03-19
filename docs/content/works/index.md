---
title: Our Works
description: Explore our portfolio of Japanese 2D animation projects, featuring original anime series and commercial works
---

<div class="vp-hero">
  <div class="vp-hero-content">
    <h1 class="vp-hero-title">Our Works</h1>
    <p class="vp-hero-description">Discover our diverse collection of anime and 2D animation projects, from TV series to original productions.</p>
  </div>
</div>

## Featured Projects

Browse through our most notable animation projects:

<ProjectGrid :projects="featuredProjects" />

## TV Series

<ProjectGrid :projects="tvSeries" />

---

::: info
Still being worked on..
:::

## Animation Categories

We specialize in various animation styles and formats:

::: tip TV ANIMATION
We have produced animation for several television series, including episodic content and opening/ending sequences.
:::

::: tip ORIGINAL PRODUCTIONS
We develop original animated content showcasing our creative vision and storytelling.
:::

## Behind The Scenes

::: details Animation Development Process

### 1. Pre-Production
- Project proposal and production committee formation
- Script development and series composition planning
- Character design and world-building
- Storyboard creation (ekonte) with detailed shot planning

### 2. Production
- Layout drawings establishing scene composition
- Key animation frames by senior animators
- In-between animation to complete movement sequences
- Background art creation and integration

### 3. Post-Production
- Digital coloring and compositing of all elements
- Voice recording and sound design implementation
- Editing and assembly of visual and audio components
- Quality control reviews and final adjustments

### 4. Distribution
- Preparation of master files for broadcast/streaming
- International adaptation (subtitling/dubbing)
- Marketing campaign and merchandise planning
- Release scheduling and distribution

:::

<script setup>
const featuredProjects = [
  {
    id: 1,
    title: 'Bunny Knight',
    description: 'A sci-fi adventure',
    image: '/public/images/testbunny.png',
    link: 'https://www.humaneworld.org/en/resources/rabbit-right-pet-you'
  },
]

const tvSeries = [
  {
    id: 1,
    title: 'Spy x Family',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-vN39AmOWrVB5.jpg',
    link: 'https://anilist.co/anime/140960/SPYFAMILY/'
  },
]
</script>

<style scoped>
.vp-hero {
  padding: 64px 24px;
  margin: -24px -24px 48px;
  background: linear-gradient(to right, var(--vp-c-bg), var(--vp-c-bg-soft));
  border-bottom: 1px solid var(--vp-c-divider);
  text-align: center;
}

.vp-hero-title {
  font-size: 40px;
  font-weight: 700;
  background: linear-gradient(120deg, var(--vp-c-brand) 30%, var(--vp-c-brand-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.vp-hero-description {
  max-width: 640px;
  margin: 24px auto;
  font-size: 18px;
  color: var(--vp-c-text-2);
}
</style>
