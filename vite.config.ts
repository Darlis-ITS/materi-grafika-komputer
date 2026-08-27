import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const copyPracticalOutput = () => ({
  name: 'copy-practical-output',
  closeBundle() {
    fs.cpSync(
      path.resolve('praktikum/output'),
      path.resolve('dist/praktikum/output'),
      { recursive: true },
    )
  },
})

export default defineConfig({
  base: './',
  plugins: [react(), copyPracticalOutput()],
})
