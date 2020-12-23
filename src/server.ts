import express from 'express'
import { systemInfoLogger, actionsLogger } from './logger'
const PORT = process.env.PORT || 3000

const app = express()
app.get('/', (req, res) => {
    actionsLogger.info(req)
    res.end('request received')
})

app.get('/doAction', (req, res) => {
    actionsLogger.info(req)
    res.end('doAction handler hit')
})

app.listen(PORT, () => {
    systemInfoLogger.info('started listening')
})