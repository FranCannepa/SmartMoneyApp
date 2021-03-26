const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./src/Server/database");


//middleware
app.use(cors());
app.use(express.json());

//routes

//NUEVO GASTO
app.post("/NuevoGasto", async (req, res) => {
    try {
        const { valor, infog, tipog, tipom } = req.body;
        console.log(req.body)
        const NewG = await pool.query(
            "INSERT INTO gastos (valor, infog, tipog, tipom) VALUES($1, $2, $3, $4)",
            [valor, infog, tipog, tipom]);
        res.json(NewG.rows);

    } catch (err) {
        console.error(err.message);
    }
});

//MOSRTRAR GASTOS
app.get("/Registro", async (req, err) => {
    try {
        const ListG = await pool.query("SELECT * from public.gastos");
        res.json(ListG.rows);
    } catch (err) {
        console.error(err.message);
    }
})



//RUTAS
app.listen(5000, () => {
    console.log("server started at 5000");
});