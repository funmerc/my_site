import * as file from './data/images.json'
import path from 'path'

enum ExistingFiles {
  angular = 'angular',
  chatgpt = 'chatgpt',
  express = 'express',
  kotlin = 'kotlin',
  nodejs = 'nodejs',
  python = 'python',
  postgres = 'postgres',
  typescript = 'typescript',
  vuejs = 'vuejs',
}

const getImageLinks = () => file

const getImagePath = (image: string | null): any => {
  const enumKey = image
    ? Object.keys(ExistingFiles).find((key) => key === image)
    : null
  if (enumKey) {
    return path.join(__dirname, `data/${enumKey}.png`)
  }
  return null
}

export default {
  getImageLinks,
  getImagePath,
}
