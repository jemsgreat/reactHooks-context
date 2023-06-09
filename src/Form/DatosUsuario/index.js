import React, { useState } from "react";
import { TextField, Button, Box, /* Input */ } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

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

const DatosUsuario = ({ updateStep }) => {
  const [email, setEmail] = useState({value: "Harland", valid:null })
  const [password, setPassword] = useState({value: "abc", valid:null })
  
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
      onSubmit={(e) =>{
        e.preventDefault();
        if (email.valid && password.valid){
          console.log("Siguiente formulario")
          console.log(email, password);
          updateStep(1);
        }else {
          console.log("No hacer nada")
        }
        
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={email.valid === false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={(input) => {
          const email = input.target.value
          validarEmail(email)
          const valido = validarEmail(email)
          setEmail ({value: email, valid:valido})}
        }
        
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid === false}
        helperText={password.valid === false && "Ingresa una contraseña valida al menos 8 caracteres maximo 20"}
        value={password.value}
        onChange={(input) => {
          const password = input.target.value
          
          setPassword({value: password, valid: validarPassword(password)});
        }}  
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
  
}

export default DatosUsuario;
