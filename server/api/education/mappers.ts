import { DefaultItem, MappedItem } from './models'

const mapItems = (items: DefaultItem[]): MappedItem[] => {
  return items.map(
    (item: DefaultItem): MappedItem => ({
      name: item.name,
      graduationDate: item.graduation_date,
      degreeTitle: item.degree_title,
      location: `${item.location.city}, ${item.location.state}`,
      relevantCoursework: item.relevant_coursework.join(', '),
    })
  )
}

export default {
  mapItems,
}
