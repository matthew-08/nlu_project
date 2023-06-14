import makeApp from './config/makeApp'

const { app, server, pgClient } = makeApp()

export { app, server, pgClient }
