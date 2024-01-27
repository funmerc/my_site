import express from 'express'
import Logger from './modules/logger/logger'

const logger = Logger('index.ts')

const app = express()
const port = process.env.PORT || 3000;

app.get('*', (_req, res) => {
    res.status(200).send("You hit the server!")
})

app.listen(port, () => {
    logger.log(`Server running on ${port}.`)
})