/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React 파일들에서 Tailwind 사용 가능
  ],
  theme: {
    extend: {}, // 필요 시 커스텀 설정
  },
  plugins: [],
}

