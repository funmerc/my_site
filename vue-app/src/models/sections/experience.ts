export interface Section {
  label: string
  value: string
}

export interface ExperienceItem {
  companyTitle: string
  workDateRange: string
  jobTitle: string
  jobLocation: string
  sections: Section[]
}
