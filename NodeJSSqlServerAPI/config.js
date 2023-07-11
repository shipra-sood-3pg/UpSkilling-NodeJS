import dotenv from 'dotenv';

dotenv.config();
const { PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER, SQL_PORT } = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

export default {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        port: parseInt(SQL_PORT),
        options: {
            encrypt: sqlEncrypt,
            trustedConnection: true,
            enableArithAbort: true
        },
    },
}