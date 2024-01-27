import express from 'express'
import path from 'path'
import Logger from './modules/logger/logger'

const logger = Logger('index.ts')

const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use('/topics', express.static(path.join(__dirname, '../dist/angular-topics-app')))
// app.use('/vue', express.static(path.join(__dirname, '../dist/vue-landing-app'))) //TODO - add app
// app.use('/react', express.static(path.join(__dirname, '../dist/react-references-app'))) //TODO - add app


// Angular Page
app.get('/topics', (_req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../dist/angular-topics-app/index.html'))
})

app.get('*', (_req, res) => {
    res.status(200).send("You hit the server!")
})

app.listen(port, () => {
    logger.log(`Server running on ${port}.`)
})