import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, /* MainSpace, */ FormSpace, Img } from "./styles";
// import DatosUsuario from "./DatosUsuario";
// import DatosPersonales from "./DatosPersonales";
// import DatosEntrega from "./DatosEntrega";
// import Com plete from "./Complete"; 
import Stepper from "../Stepper"; 
//validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";
import Step from "./Step";

const Form = () => {
  const [step, setStep] = useState(0)

  useEffect(() =>{
    console.log("se ha actualizado el step", step)

  }, [step]) //los corchetes cuadrados sirven para escuchar cambios dentro de nuestros estados y tambien podemos llamar o escuchar un backend, en este caso escucharemos step

  /* useEffect(async() => {
    try { */
      /* const data = const data = (await fetch("https://jsonplaceholder.typicode.com/posts")).json; */ //puede ser de esta manera o de la siguiente se ahorra la const posts
      /* const posts = await data.json(); */ //en este caso no seria necesaria la const posts
      /* const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await data.json();
      console.log(posts)
    } catch (e) {
      console.log(e);
    }
  }, [])  */

  // useEffect( () => {
  //   async function getData () {
  //     try {
  //       const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  //       const posts = await data.json();
  //       console.log(posts)
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }              //en este caso se usa cuando te manda error al usar el async dentro de los parentesis del useEffect, toca llamarla como una funcion.
  //   getData();    
  // }, []) 

/* 
  step = 0 ----> <DatosUsuario />
  step = 1 ----> <DatosPersonales />
  step = 2 ----> <DatosEntrega />
  step = 3 ----> <Complete /> */

 /*  const selectStep = () => {
    switch (step) {
      case 0:
        return <DatosUsuario />;
        break;
      case 1:
        return <DatosPersonales />;
        break;
      case 2:
        return <DatosEntrega />;
        break;
      case 3:
        return <Complete />;
        break;  
    }
  } */ /* puede hacerse se este modo o como objeto en la siguiente funcion steps */

  //  const updateStep = (step) => {
  //   console.log("actualizar paso", step)
  //   setStep(step)
  //   console.log(updateStep)

  // } 
  /* const steps = {
    0: <DatosUsuario updateStep={updateStep}/>,
    1: <DatosPersonales updateStep={updateStep}/>,
    2: <DatosEntrega updateStep={updateStep}/>,
    3: <Complete/>,
  } */

  const onSubmit = (e) => {
    e.preventDefault();
    let newStep = step + 1;     //este caso demuestra que llamar un evento con e.ejemplo y al por ejemplo step +1 al momento de escuchar ese incremento tarda mas de lo esperado por eso usamos useEffect
    setStep(newStep);
    console.log("newStep", newStep);
    console.log(step);
  }

  function handleChange (element, position, currentStep, validator) {
    const value = element.target.value
    const valid = validator(value)
    console.log(value)
    console.log(valid)

    console.log("position", position)
    console.log("currentStep",currentStep)
    console.log("validator", validator)

    stepsFlow[0].inputs[0].label = "nombre"

    console.log("stepsFlow", stepsFlow)

  }

  const stepsFlow = {
    0: {
      inputs: [
        {
          label:"Correo electrónico",
          type:"email",
          value : "",
          valid : null,
          onChange: handleChange,
          helperText: "Ingresa un correo electrónico válido",
          validator: validarEmail,
        },
        {
          label:"Contraseña",
          type:"password",
          value : "",
          valid : null,
          onChange: handleChange,
          helperText: "Ingresa una contraseña valida al menos 8 caracteres maximo 20",
          validator: validarPassword,

        },
        
      ],
      buttonText: "Siguiente",
      onSubmit,
    }
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />} 
        {/* <DatosUsuario />
        <DatosPersonales />
        <DatosEntrega /> */}
        {/* {steps[step]} */}
        <Step data={ stepsFlow[step] } step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;
