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

    const port = Number(process.env.PORT) || 3000
    server.listen(port, '0.0.0.0', () => {
        console.log(`Server listening on ${port}`)
    })
    routes(app)

    return {
        app,
        server,
        pgClient,
    }
}

export default makeApp
