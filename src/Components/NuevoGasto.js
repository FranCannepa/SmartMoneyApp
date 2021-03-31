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
                <MenuItem value={10}>Ropa</MenuItem>
                <MenuItem value={20}>Comida</MenuItem>
                <MenuItem value={30}>Salidas</MenuItem>
                <MenuItem value={40}>Tecnologia</MenuItem>
                <MenuItem value={50}>Salidas</MenuItem>
              </Select>

              <TextField id="gastoValor" label="Valor" value={valor} onChange={e => setvalor(e.target.value)}></TextField>

              <TextField id="infogasto" label="Desc" value={infog} onChange={e => setinfog(e.target.value)}></TextField>


              <RadioGroup aria-label="quiz" name="Moneda" value={tipom} onChange={e => settipom(e.target.value)} >
                <FormControlLabel value="uru" control={<Radio />} label="Pesos" />
                <FormControlLabel value="us" control={<Radio />} label="Dolares" />
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

