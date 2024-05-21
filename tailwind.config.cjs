/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      danger: "#e3342f",
      pink: "#0286b7",
    }),
    extend: {
      colors: {
        main: "#0286b7",
        pink: "#0286b7",
        pink: {
          400: "#0286b7",
          500: "#0286b7",
        },
        yellow: "rgba(187, 255, 235, 0.76)",
      },
    },
  },
  plugins: [],
};
