import React, { Fragment, useState, Component } from 'react';
import { FormControl, TextField, Select, Radio, Button, ThemeProvider, RadioGroup, FormControlLabel, InputLabel, MenuItem } from '@material-ui/core';
import { formThemesNewG } from '../Styles/ThemeComponents';
import "../Styles/App.css";
import { buttonTheme } from "../Styles/ThemeComponents";


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




