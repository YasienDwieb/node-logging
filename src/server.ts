import express from 'express'
import { systemInfoLogger, actionsLogger } from './logger'
const PORT = process.env.PORT || 3000

const app = express()
app.use((req, res, done) => {
    actionsLogger.info(req.originalUrl);
    done();
});

const handler = (func: any) => (req: any, res: any) => {
    try {
        actionsLogger.info('server.handler.begun')
        func(req, res)
    } catch (error) {
        res.end('an error occured')
    }
}

app.get('/', handler((req: any, res: any) => {
    res.end('request received')
}))


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

app.get('/causeError', handler((req: any, res: any) => {
    const emptyObject = req.body
    res.end(emptyObject.name.otherValus)
}))

app.listen(PORT, () => {
    systemInfoLogger.info(`started listening on PORT ${PORT}`)
})