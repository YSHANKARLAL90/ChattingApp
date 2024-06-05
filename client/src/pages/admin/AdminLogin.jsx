import React, { useState } from 'react'
import {Avatar, Button, Container,IconButton,Paper, Stack, TextField, Typography} from "@mui/material";
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import {VisuallyHiddenInput} from '../../components/styles/StyledComponents'
import {useFileHandler, useInputValidation,useStrongPassword} from '6pp'
import {usernameValidator} from "../../utils/validators"
import { bgGradient } from '../../constants/color';
import { Navigate } from 'react-router-dom';

const isAdmin = false;

const AdminLogin = () => { 

    const secretKey = useInputValidation("")

const submitHandler=(e)=>{
    e.preventDefault();
    console.log("submit");
};

if(isAdmin)return <Navigate to="/admin/dashboard"/>;
 

  return (
    <div
     style={{
        backgroundImage:bgGradient,
     }}
    >
    <Container 
       component={"main"} 
       maxWidth="xs"
       sx={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      }}
       >
        <Paper
          elevation={3}
          sx={{
            padding:4,
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
          }}
        >
                  <Typography variant="h5">Adimin ogin</Typography>
                  <form style={{
                    width:"100%",
                    marginTop:"1rem",
                  }}
                   onSubmit={submitHandler}
                  >

                     {/* {
                        username.error && (
                            <Typography color="error" varient="caption">
                                {username.error}
                            </Typography>
                        )
                     } */}

                    <TextField
                     required
                     fullWidth
                     label="Secret Key"
                     type="password"
                     margin="normal"
                     varient="outlined"
                     value={secretKey.value}
                     onChange={secretKey.changeHandler}
                     />

                     {/* {
                        password.error && (
                            <Typography color="error" varient="caption">
                                {password.error}
                            </Typography>
                        )
                     } */}


                     <Button
                      sx={{
                        marginTop:"1rem",
                      }}
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                     >
                        LOGIN
                     </Button>
                  </form>

        </Paper>
    </Container>
    </div>
  )
}

export default AdminLogin
