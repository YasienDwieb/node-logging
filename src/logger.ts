import { createLogger, transports } from 'winston';

const systemInfoLogger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({ filename: "systemInfo.log" })
  ]
});

const actionsLogger = createLogger({
  transports: [
    new transports.File({ filename: "actions.log" })
  ]
});

export { systemInfoLogger, actionsLogger };