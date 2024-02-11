import path from 'path'
import fs from 'fs'
import EducationMappers from './mappers'

const getEducationItems = () => {
  // Instead of importing the json directly, read it in and grab the items for fun.
  const filePath = path.join(__dirname, '/data', 'education.json')
  const file = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  const items = file?.items ?? []
  // Simulate retrieving items from another service, this would involve mapping them to some degree in most cases.
  return EducationMappers.mapItems(items)
}

export default {
  getEducationItems,
}
