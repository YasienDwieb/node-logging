import express from 'express'
import { systemInfoLogger, actionsLogger } from './logger'
const PORT = process.env.PORT || 3000

const app = express()
app.get('/', (req, res) => {
    actionsLogger.info({
        'cookies': req.cookies,
        'headers': req.headers,
        'ip': req.ip,
        'query': req.query,
    })
    res.end('request received')
})

app.get('/doAction', (req, res) => {
    actionsLogger.info({
        'body': req.body,
        'cookies': req.cookies,
        'headers': req.headers,
        'ip': req.ip,
        'query': req.query,
    })
    res.end('doAction handler hit')
})

app.listen(PORT, () => {
    systemInfoLogger.info('started listening')
})