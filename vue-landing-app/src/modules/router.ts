import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import About from '../components/sections/about/AboutSection.vue'
import Education from '../components/sections/education/EducationSection.vue'
import Experience from '../components/sections/experience/ExperienceSection.vue'
import Skills from '../components/sections/skills/SkillsSection.vue'
import Summary from '../components/sections/summary/SummarySection.vue'

interface CustomRouterMeta extends Record<string | number | symbol, unknown> {
  title?: string
  hidden?: boolean
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/summary',
    name: 'Summary',
    component: Summary,
    meta: { title: 'Professional Summary' } as CustomRouterMeta,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
    meta: { title: 'Technical Skills' } as CustomRouterMeta,
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
    meta: { title: 'Work Experience' } as CustomRouterMeta,
  },
  {
    path: '/education',
    name: 'Education',
    component: Education,
    meta: { title: 'Education' } as CustomRouterMeta,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About Me' } as CustomRouterMeta,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/summary',
    meta: { hidden: true } as CustomRouterMeta,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
