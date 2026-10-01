/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: { aqua: "0 0 40px rgba(34,211,238,.12)" },
      animation: {
        float: "float 6s ease-in-out infinite",
        bubble: "bubble 8s linear infinite",
        shimmer: "shimmer 2s linear infinite"
      },
      keyframes: {
        float: {"0%,100%": {transform:"translateY(0)"}, "50%": {transform:"translateY(-12px)"}},
        bubble: {"0%": {transform:"translateY(110vh) scale(.6)", opacity:"0"}, "15%": {opacity:".5"}, "100%": {transform:"translateY(-10vh) scale(1)", opacity:"0"}},
        shimmer: {"0%": {backgroundPosition:"-500px 0"}, "100%": {backgroundPosition:"500px 0"}}
      }
    }
  },
  plugins: []
}