export interface Location {
  city: string
  state: string
}

export interface DefaultItem {
  name: string
  graduation_date: string
  degree_title: string
  location: Location
  relevant_coursework: string[]
}

export interface MappedItem {
  name: string
  graduationDate: string
  degreeTitle: string
  location: string
  relevantCoursework: string
}
