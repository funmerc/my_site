import express from 'express'
import Service from './service'

const router = express.Router()

export const getAboutInformation = async (_req: any, res: any) => {
  try {
    const information = Service.getAboutInformation()
    res.status(200).json({ ...information })
  } catch (err: any) {
    res.status(500).json({
      message:
        err?.message || 'Server error occurred retrieving configuration.',
    })
  }
}

router.get('/about_me', getAboutInformation)
export default router
