import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import About from '../components/sections/about/AboutSection.vue'
import Education from '../components/sections/education/EducationSection.vue'
import Experience from '../components/sections/experience/ExperienceSection.vue'
import Skills from '../components/sections/skills/SkillsSection.vue'
import Summary from '../components/sections/summary/SummarySection.vue'

interface CustomRouterMeta extends Record<string | number | symbol, unknown> {
  title?: string
  hidden?: boolean
  right?: boolean
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
    path: '/references',
    name: 'References',
    meta: { title: 'References', right: true } as CustomRouterMeta,
    beforeEnter: (_to, _from, _next) => {
      const isLocalDev = window?.location?.host?.includes('localhost:8080')
      const isLocalServer = window?.location?.host?.includes('localhost:3000')

      if (isLocalDev) {
        window.location.replace('http://localhost:4200')
      } else if (isLocalServer) {
        window.location.replace('http://localhost:3000/angular-app')
      } else {
        window.location.replace('https://www.jasonrice.me/angular-app')
      }
    },
    component: () => ({}),
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
