import express from 'express'
import Service from './service'

const router = express.Router()

export const getWorkExperienceItems = async (_req: any, res: any) => {
  try {
    const experience = Service.getWorkExperienceItems()
    res.status(200).send(experience)
  } catch (err: any) {
    res.status(500).json({
      message:
        err?.message || 'Server error occurred retrieving work experience.',
    })
  }
}

router.get('/work_experience_items', getWorkExperienceItems)
export default router
