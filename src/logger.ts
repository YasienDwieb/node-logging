import { createLogger, format, transports } from 'winston';
const { combine, timestamp, json } = format;

const systemInfoLogger = createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "systemInfo.log" })
  ]
});

const actionsLogger = createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    json()
  ),
  transports: [
    new transports.File({ filename: "actions.log" })
  ],
});

export { systemInfoLogger, actionsLogger };