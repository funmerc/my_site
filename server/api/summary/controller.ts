import express from 'express'
import Service from './service'
import path from 'path'

const router = express.Router()

export const getSummaryImageLinks = async (_req: any, res: any) => {
  try {
    const links = Service.getImageLinks()
    res.status(200).send(links)
  } catch (err: any) {
    res.status(500).json({
      message:
        err?.message || 'Server error occurred retrieving summary links.',
    })
  }
}

export const getSummaryImage = async (req: any, res: any) => {
  try {
    const image = `${req.params?.image}` || null
    res.status(200).sendFile(path.join(__dirname, `data/${image}.png`))
  } catch (err: any) {
    res.status(500).json({
      message:
        err?.message || 'Server error occurred retrieving summary links.',
    })
  }
}

router.get('/summary_image_links', getSummaryImageLinks)
router.get('/summary_image_links/images/:image', getSummaryImage)
export default router
