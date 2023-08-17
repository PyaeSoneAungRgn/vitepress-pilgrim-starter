const defaultTheme = require('tailwindcss/defaultTheme')
import tailwindConfig from '@hempworks/pilgrim/tailwind.config'

const primary = {
  500: '#4099DE',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    tailwindConfig,
  ],
  
  content: [
    ...tailwindConfig.content,
    './.vitepress/theme/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{md,svg}',
  ],

  theme: {
    extend: {
      colors: { primary },
    },
  },
}
