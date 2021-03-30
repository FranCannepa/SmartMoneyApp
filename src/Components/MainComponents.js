import React, { Fragment, useState, Component } from 'react';
import { FormControl, TextField, Select, Radio, Button, ThemeProvider, RadioGroup, FormControlLabel, InputLabel, MenuItem } from '@material-ui/core';
import { formThemesNewG } from '../Styles/ThemeComponents';
import "../Styles/App.css";
import { buttonTheme } from "../Styles/ThemeComponents";
import e from 'express';
import response from 'express';

/* export const NewGasto = () =>{
    const [valor, infog, tipog, tipom, setValor, setInfog, setTipog, setTipom] = useState("");
    const onSumbitForm = async() =>{
      e.preventDefault();
      try {
        const response = fetch("http://localhost:3000/NuevoGasto",{
          method: "POST",
          headers: {"Content-Type": "application/json"}
        });
        console.log(response);
      } catch (err) {
        
      }
    }
    return(
        <div>
       <input placeholder="Tipo Gasto" value={tipog} onChange={e => setTipog(e.target.value)} /> 
       <input labelId="Valor Gasto" value={tipog} onChange={e => setValor(e.target.value)} /> 
       <input labelId="tgastos" value={tipog} onChange={e => setInfog(e.target.value)} /> 
       <input labelId="tgastos" value={tipog} onChange={e => setTipom(e.target.value)} /> 
       </div>
    )
} */

export const NewGasto = () => {
  const [valor, infog, tipog, tipom, setValor, setInfog, setTipog, setTipom] = useState("");
  const onSumbitForm = async () => {
    e.preventDefault();
    try {
      const res = fetch("http://localhost:3000/NuevoGasto", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      console.log(res);
    } catch (err) {

    }
  }
  return (
    <div>
      <input placeholder="Tipo Gasto" value={tipog} onChange={e => setTipog(e.target.value)} />
      <input labelId="tgastos" value={tipog} onChange={e => setValor(e.target.value)} />
      <input labelId="tgastos" value={tipog} onChange={e => setInfog(e.target.value)} />
      <input labelId="tgastos" value={tipog} onChange={e => setTipom(e.target.value)} />
    </div>
  )
}


export class Registro extends Component {
  render() {
    return (
      <div className="MainForm">
        <ThemeProvider theme={formThemesNewG, buttonTheme}>

          <FormControl>


            <InputLabel id="demo-simple-select-label">Tipo de Gastos</InputLabel>
            <Select labelId="tgastos">
              <MenuItem value={10}>Ropa</MenuItem>
              <MenuItem value={20}>Comida</MenuItem>
              <MenuItem value={30}>Salidas</MenuItem>
              <MenuItem value={40}>Tecnologia</MenuItem>
              <MenuItem value={50}>Salidas</MenuItem>
            </Select>

            <TextField id="gastoValor" label="Valor"></TextField>


            <RadioGroup aria-label="quiz" name="Moneda">
              <FormControlLabel value="uru" control={<Radio />} label="Pesos" />
              <FormControlLabel value="us" control={<Radio />} label="Dolares" />
            </RadioGroup>

            <Button variant="contained" color="primary">
              INGRESAR
    </Button>

          </FormControl>
        </ThemeProvider>

      </div>
    )
  }
}




