/**
 * Theme Entry Point
 * This file configures the custom VitePress theme by extending the default theme
 * and registering global components and styles.
 */

// Import Vue and VitePress default theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";

// Import custom styles
import "./styles/tailwind.css"; // Tailwind CSS utilities and components
import "./styles/main.css"; // Custom CSS overrides
import "./styles/custom.css"; // Force override CSS for brand colors

// Import custom components
// Hero - Used for page headers with title, description and call-to-action buttons
import Hero from "./components/Hero.vue";
// AnimatedSection - Adds animation effects to content sections
import AnimatedSection from "../../components/AnimatedSection.vue";
// Timeline - Displays chronological events in a vertical timeline
import Timeline from "../../components/Timeline.vue";
// TabGroup - Creates tabbed interfaces for content organization
import TabGroup from "../../components/TabGroup.vue";
// ContactForm - Form component with validation for contact pages
import ContactForm from "../../components/ContactForm.vue";
// ProjectGrid - Displays a grid of projects or portfolio items
import ProjectGrid from "../../components/ProjectGrid.vue";
// ProjectCard - Individual project card within the grid
import ProjectCard from "../../components/ProjectCard.vue";

/**
 * Theme Configuration Object
 * Extends the default VitePress theme with custom components and functionality
 */
export default {
  // Inherit all functionality from the default theme
  extends: DefaultTheme,

  /**
   * enhanceApp - Called when the app is being created
   * This is where we register global components and extend Vue functionality
   * @param {Object} context - Contains app, router, and siteData
   */
  enhanceApp({ app, router, siteData }) {
    // Register global components that can be used in Markdown files
    app.component("Hero", Hero); // Register Hero component globally
    app.component("AnimatedSection", AnimatedSection); // Register AnimatedSection component globally
    app.component("Timeline", Timeline); // Register Timeline component globally
    app.component("TabGroup", TabGroup); // Register TabGroup component globally
    app.component("ContactForm", ContactForm); // Register ContactForm component globally
    app.component("ProjectGrid", ProjectGrid); // Register ProjectGrid component globally
    app.component("ProjectCard", ProjectCard); // Register ProjectCard component globally
  },

  /**
   * setup - Called during SSR and client-side hydration
   * Use this for theme-wide setup code that needs to run before rendering
   */
  setup() {
    // Theme setup logic can be added here
    // Examples: initialize plugins, set up global state, etc.
  },
};
