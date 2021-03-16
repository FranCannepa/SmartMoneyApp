import React, { Component } from 'react';
import { FormControl, TextField, Select, Radio, Button, ThemeProvider, RadioGroup } from '@material-ui/core';
import {formThemesNewG} from '../Styles/ThemeComponents';
import "../Styles/App.css";


export class NewGasto extends Component {
  render() {
    return(
        <div className="MainForm">
        <ThemeProvider theme={formThemesNewG}>
          
            <FormControl>
            
                <TextField id="gastoValor" label="Valor"></TextField>
                <Select></Select>
                <RadioGroup>
                    <Radio></Radio>
                    <Radio></Radio>
                </RadioGroup>

        </FormControl>
        </ThemeProvider>
        </div>
    )
  }
}

export class Registro extends Component {
  render() {
    return(
        <div className="MainForm">
        <ThemeProvider theme={formThemesNewG}>
          
            <FormControl>
                <TextField></TextField>
                <TextField></TextField>
                <Select></Select>
                <RadioGroup>
                    <Radio></Radio>
                    <Radio></Radio>
                </RadioGroup>

        </FormControl>
        </ThemeProvider>
        </div>
    )
  }
}

export class Home extends Component {
  render() {
    return(
        <div className="MainForm">
        <ThemeProvider theme={formThemesNewG}>
          
            <FormControl>
                <TextField></TextField>
                <TextField></TextField>
                <Select></Select>
                <RadioGroup>
                    <Radio></Radio>
                    <Radio></Radio>
                </RadioGroup>

        </FormControl>
        </ThemeProvider>
        </div>
    )
  }
}

