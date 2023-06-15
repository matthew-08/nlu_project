import * as dotenv from 'dotenv'
dotenv.config()

const appEnv = {
    pgDatabase: process.env.PGDATABASE || 'flavors_app',
    pgUser: process.env.PGUSER || 'postgres',
    pgPassword: process.env.PGPASSWORD || 'postgres',
    pgHost: process.env.PGHOST || 'localhost',
    appPort: process.env.APP_PORT || '5432',
}

export default appEnv
