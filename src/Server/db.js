require('dotenv').config();
const { Client } = require('pg');

/* const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
}) */


/* client.connect()
client.query('SELECT * from public.gastos', (err, res) => {
  if (err) throw err
  console.log(res)
  client.end()
}) */

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432
})


client.connect()
.then(()=> console.log("Conection Success!"))
.then(()=> client.query('SELECT * from public.gastos'))
.then(results => console.log(results.rows))
.catch (e => console.log(e))
.finally(() => client.end)


 
/* const NewG = function () {
  let OutputVar;
  client.connect()
  client.query('SELECT * from public.gastos')
  .then((result) => {

    OutputVar = result.rows;
    client.end();
    return OutputVar;
  })
  .then(f => {
      console.log(f);
  })
  .catch(e => {
    if (err) {
      return console.error('error running query', err);
    }
  });
}; */

