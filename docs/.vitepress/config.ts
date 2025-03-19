import { defineConfig } from "vitepress";

export default defineConfig({
  title: "COM",
  description: "Animation Studio",
  lang: "en-US",
  lastUpdated: true,

  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap",
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#6a5acd" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    [
      "style",
      {},
      `:root {
        --vp-c-brand: #0066cc;
        --vp-c-brand-light: #0080ff;
        --vp-c-brand-lighter: #3399ff;
        --vp-c-brand-dark: #004c99;
        --vp-c-brand-darker: #003366;
      }`,
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "COM Animation Studio" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Japanese based animation studio creating high-quality animations with passion and expertise.",
      },
    ],
    ["meta", { property: "og:image", content: "/images/og-image.jpg" }],
    ["meta", { property: "og:url", content: "https://comanimation.studio" }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
  ],

  appearance: true,

  themeConfig: {
    logo: "/images/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Works", link: "/content/works/" },
      { text: "Products", link: "/content/products/" },
      { text: "Team", link: "/content/team/" },
      { text: "Contact", link: "/content/contact/" },
    ],

    sidebar: {},

    footer: {
      message: "Made with ❤️ by Kwzeqt.",
      copyright: "Copyright © 2025 COM. All rights reserved.",
    },

    socialLinks: [
      { icon: "x", link: "https://x.com/COM_Animation" },
      { icon: "youtube", link: "https://www.youtube.com/@COM-Project" },
    ],

    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },

    lastUpdatedText: "Last Updated",

    outlineTitle: "On This Page",

    darkModeSwitchLabel: "Appearance",
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            :root {
              --vp-c-brand: #0066cc;
              --vp-c-brand-light: #0080ff;
              --vp-c-brand-lighter: #3399ff;
              --vp-c-brand-dark: #004c99;
              --vp-c-brand-darker: #003366;
            }
          `,
        },
      },
    },
  },
});
