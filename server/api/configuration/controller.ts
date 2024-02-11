import express from 'express'
import Service from './service'

const router = express.Router()

export const getConfiguration = async (_req: any, res: any) => {
  try {
    const version = Service.getVersion()
    res.status(200).send(version)
  } catch (err: any) {
    res.status(500).json({
      message:
        err?.message || 'Server error occurred retrieving configuration.',
    })
  }
}

router.get('/configuration', getConfiguration)
export default router
