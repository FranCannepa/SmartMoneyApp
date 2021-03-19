import { NewGasto } from '../Components/MainComponents';

require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
})

/* const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432
}) */


client.connect()
.then(()=> console.log("Conection Success!"))
.then(()=> client.query('SELECT * from public.gastos'))
.then(results => console.log(results.rows))
.catch (e => console.log(e))
.finally(() => client.end)


