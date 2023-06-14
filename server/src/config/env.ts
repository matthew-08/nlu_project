import * as dotenv from 'dotenv'
dotenv.config()

const appEnv = {
    pgDatabase: process.env.PG_DATABASE,
    pgUser: process.env.PG_USER,
    pgPassword: process.env.PG_PASSWORD,
    pgHost: process.env.PG_HOST,
    appPort: process.env.APP_PORT,
}

export default appEnv
