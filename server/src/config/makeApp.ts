import express from 'express'
import http from 'http'
import appEnv from './env'
import applyMiddleware from './applyMiddleware'
import { routes } from '../routes'
import createDb from '../db/db'

const makeApp = () => {
    const app = express()
    applyMiddleware(app)
    const pgClient = createDb()
    const server = http.createServer(app)

    server.listen(appEnv.appPort, () => {
        console.log(`Server is listening on ${appEnv.appPort}`)
    })

    routes(app)

    return {
        app,
        server,
        pgClient,
    }
}

export default makeApp
