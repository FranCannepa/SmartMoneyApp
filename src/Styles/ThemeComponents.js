import { createMuiTheme } from '@material-ui/core/styles';

export const buttonTheme = createMuiTheme({
  palette:{
    primary:{
        main: '#231f20'
    }
},
  overrides: {
    MuiButton: {
      root:{
        margin: '15px 50px',
        padding: '10px',
        color: '#fffff',
       
      },
    },
  }
});

export const formThemesNewG = createMuiTheme({
    overrides:{
        MuiTextField:{
            root:{
                margin: '20px auto 10px auto',
                textAlign: 'left'
                
            }
        },
        MuiSelect:{
            root:{
              margin: '20px auto 10px auto'
            },
            select:{
              textAlign: 'left' 
            }

        },

        MuiFormGroup:{
          root:{
            display: 'inline-block'
          }
        },

    }
});


