import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/rest-countries-api-react/",
  plugins: [
    react(//{
      // babel: {
      //   plugins: [['babel-plugin-react-compiler']],
      // },
    //}
    )
  ],
})
