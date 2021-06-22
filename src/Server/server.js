const express = require("express");
const app = express();
const pool = require("./database");
const cors = require("cors");
const { List } = require("@material-ui/core");
var PORT = 4000;

app.use(cors());
// For parsing application/json
app.use(express.json());

app.post("/nuevogasto", async (req, res) => {
    try {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) { dd = '0' + dd } if (mm < 10) { mm = '0' + mm }
        today = yyyy + "-" + mm + "-" + dd;
        //////////////////////////////
        const { valor, infog, tipog, tipom } = req.body;
        const NewG = await pool.query("INSERT INTO gastos (valor, infog, tipog, tipom, fechagasto) VALUES($1, $2, $3, $4, $5)", [valor, infog, tipog, tipom, today]);
        res.json(NewG.rows).status(200).end();
        /* console.log(NewG.rows); */

    } catch (err) {
        console.error(err.message);
    }
});

app.get("/registro", async (req, res) => {
    try {
        const ListG = await pool.query("SELECT * from public.gastos");
        res.json(ListG.rows);
        /* console.log(ListG.rows); */
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

