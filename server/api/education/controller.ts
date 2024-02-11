import express from 'express'
import Service from './service'

const router = express.Router()

export const getEducationItems = async (_req: any, res: any) => {
  try {
    const education = Service.getEducationItems()
    res.status(200).json({ education })
  } catch (err: any) {
    res.status(500).json({
      message:
        err?.message ||
        'Server error occurred retrieving education information.',
    })
  }
}

router.get('/education_items', getEducationItems)
export default router
