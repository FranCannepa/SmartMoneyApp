const express = require("express");
const app = express();
const pool = require("./database");
const cors = require("cors");
var PORT = 4000;

app.use(cors());
// For parsing application/json
app.use(express.json());

app.post("/nuevogasto", async(req, res) => {
    try {
        console.log(req.body);
        const { valor, infog, tipog, tipom } = req.body;
        const NewG = await pool.query("INSERT INTO gastos (valor, infog, tipog, tipom) VALUES($1, $2, $3, $4)",[valor, infog, tipog, tipom]);
        res.json(NewG.rows).status(200).end();
        console.log(NewG.rows);

    } catch (err) {
        console.error(err.message);
    }
});

app.get



app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

