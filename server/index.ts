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
  '/angular-app',
  express.static(path.join(__dirname, `${folderLocation}angular-app`))
)
app.use(
  '/vue-app',
  express.static(path.join(__dirname, `${folderLocation}vue-app`))
)
app.use(
  '/react-app',
  express.static(path.join(__dirname, `${folderLocation}react-app`))
)

app.use('/api', APIRoutes)

// Angular Page
app.get('/angular-app', (_req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, `${folderLocation}angular-app/index.html`))
})

// React Page
app.get('/react-app', (_req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, `${folderLocation}react-app/index.html`))
})

// Vue Page
app.get('/vue-app', (_req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, `${folderLocation}vue-app/index.html`))
})

app.get('*', (req, res) => {
  res.redirect('/vue-app')
})

app.listen(port, () => {
  logger.log(`Server running on ${port}.`)
})
