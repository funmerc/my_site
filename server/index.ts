import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import path from 'path'
import Logger from './modules/logger'
import APIRoutes from './api/routes'

const logger = Logger('index.ts')

const app = express()
const port = process.env.PORT || 3000

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  limit: 100, // each IP can make 100 requests/10 minutes,
  standardHeaders: true,
  legacyHeaders: true,
})

if (process.env?.LOCAL) {
  app.use(cors())
} else {
  app.use(limiter)
  app.use(helmet())
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        'default-src': ["'self'"],
        'script-src': ["'self'"],
        'img-src': ["'self'", 'blob:'],
      },
    })
  )
}

const folderLocation = `${process.env?.LOCAL ? '../dist/' : './'}`

app.use(
  '/topics',
  express.static(path.join(__dirname, `${folderLocation}angular-topics-app`))
)
app.use(
  '/vue-app',
  express.static(path.join(__dirname, `${folderLocation}vue-landing-app`))
)
app.use(
  '/references',
  express.static(path.join(__dirname, `${folderLocation}react-references-app`))
)

app.use('/api', APIRoutes)

// Angular Page
app.get('/topics', (_req, res) => {
  res
    .status(200)
    .sendFile(
      path.join(__dirname, `${folderLocation}angular-topics-app/index.html`)
    )
})

// React Page
app.get('/references', (_req, res) => {
  res
    .status(200)
    .sendFile(
      path.join(__dirname, `${folderLocation}react-references-app/index.html`)
    )
})

// Vue Page
app.get('/vue-app', (_req, res) => {
  res
    .status(200)
    .sendFile(
      path.join(__dirname, `${folderLocation}vue-landing-app/index.html`)
    )
})

app.get('*', (req, res) => {
  res.redirect('/vue-app')
})

app.listen(port, () => {
  logger.log(`Server running on ${port}.`)
})
