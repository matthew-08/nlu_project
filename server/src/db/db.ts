import { Pool } from 'pg'
import appEnv from '../config/env'

const createDb = () => {
    return new Pool({
        database: appEnv.pgDatabase,
        user: appEnv.pgUser,
        password: appEnv.pgPassword,
        host: appEnv.pgHost,
    })
}

export default createDb
