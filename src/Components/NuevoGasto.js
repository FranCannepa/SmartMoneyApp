import React, { useState, Fragment } from 'react';
import { FormControl, TextField, Select, Radio, Button, ThemeProvider, RadioGroup, FormControlLabel, InputLabel, MenuItem } from '@material-ui/core';
import { formThemesNewG, buttonTheme } from '../Styles/ThemeComponents';


const NewGasto = () => {
  const [valor, setvalor] = useState("");
  const [tipog, settipog] = useState("");
  const [infog, setinfog] = useState("");
  const [tipom, settipom] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { valor, infog, tipog, tipom };
      const response = await fetch('http://localhost:4000/nuevogasto', {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),


      });
      console.log(response);

    } catch (err) {
      console.error(err.message);
    }
  }

  

  return (
    <Fragment>
      <div className="MainForm">
        <form onSubmit={onSubmitForm}>
          <FormControl>

            <ThemeProvider theme={formThemesNewG, buttonTheme}>
              <InputLabel id="demo-simple-select-label">Tipo de Gastos</InputLabel>
              <Select labelId="tgastos" value={tipog} onChange={e => settipog(e.target.value)}>
                <MenuItem value={"Ropa"}>Ropa</MenuItem>
                <MenuItem value={"Comida"}>Comida</MenuItem>
                <MenuItem value={"Salidas"}>Salidas</MenuItem>
                <MenuItem value={"Tecnologia"}>Tecnologia</MenuItem>
                <MenuItem value={"Salidas"}>Salidas</MenuItem>
              </Select>

              <TextField id="gastoValor" label="Valor" value={valor} onChange={e => setvalor(e.target.value)}></TextField>

              <TextField id="infogasto" label="Desc" value={infog} onChange={e => setinfog(e.target.value)}></TextField>


              <RadioGroup aria-label="quiz" name="Moneda" value={tipom} onChange={e => settipom(e.target.value)} >
                <FormControlLabel value="Pesos" control={<Radio />} label="Pesos" />
                <FormControlLabel value="Dolares" control={<Radio />} label="Dolares" />
              </RadioGroup>

              <Button variant="contained" color="primary" type="submit" onSubmit={onSubmitForm}>
                INGRESAR
              </Button>

            </ThemeProvider>

          </FormControl>
        </form>


      </div>
    </Fragment>
  )
}

export default NewGasto;

