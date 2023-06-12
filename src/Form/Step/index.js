import React from "react";
import { TextField, Button, Box, /* Input */ } from "@mui/material";

/* class DatoUsuario extends React.Component {
  render(){
    return<></>
  }
}     esta es la estructura de una clase */

/* function DatoUsuario () {
  return <></>
}  esta es la estructura de una function */

/* const DatoUsuario = () => {
  return <></>
}   esta es la estructura de una funcion arrow anonima es la mismo q una funcion */


/* class DatosUsuario extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email : {
        value: 'jhony',
        valid: true,
      },
      password : {
        value: 'asd',
        valid:true,
      },
    }
  } */

const Step = ({ data, step }) => {

    const {inputs, buttonText, onSubmit} = data;
    
 
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={ onSubmit }
    >
        {
            inputs.map( (input, i) => {
                const { label, type, value, valid, onChange, helperText, validator } = input;
                return (
                    <TextField
                        key={i}
                        label={ label }
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        type={ type }
                        error={valid === false}
                        helperText={valid === false && { helperText }
                        }
                        value={value}
                        onChange={ (e) => onChange(e, i, step, validator) }
                    />
                )
            })
        }
      
      <Button variant="contained" type="submit">
        { buttonText }
      </Button>
    </Box>
  );
   
}

export default Step;
