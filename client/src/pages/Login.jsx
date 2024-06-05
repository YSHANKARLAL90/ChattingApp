import React, { useState } from 'react'
import {Avatar, Button, Container,IconButton,Paper, Stack, TextField, Typography} from "@mui/material";
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import {VisuallyHiddenInput} from '../components/styles/StyledComponents'
import {useFileHandler, useInputValidation,useStrongPassword} from '6pp'
import {usernameValidator} from "../utils/validators"
import { bgGradient } from '../constants/color';

export default function Login() {

   const [isLogin,setIsLogin] = useState(true);

   const toggleLogin = ()=>setIsLogin((prev) => !prev);

   const name = useInputValidation("");
   const bio = useInputValidation("");
   const username = useInputValidation("",usernameValidator);
//    const password = useStrongPassword("");
   const password = useInputValidation("");

   const avatar = useFileHandler("single")

   const handleLogin = (e) =>{
    e.preventDefault();
   }

   const handleSigUp = (e) =>{
    e.preventDefault();
   }

  return(
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

            {
                isLogin ? (
                <>
                  <Typography variant="h5">Login</Typography>
                  <form style={{
                    width:"100%",
                    marginTop:"1rem",
                  }}
                   onSubmit={handleLogin}
                  >
                    <TextField
                     required
                     fullWidth
                     label="Username"
                     margin="normal"
                     varient="outlined"
                     value={username.value}
                     onChange={username.changeHandler}
                     />

                     {
                        username.error && (
                            <Typography color="error" varient="caption">
                                {username.error}
                            </Typography>
                        )
                     }

                    <TextField
                     required
                     fullWidth
                     label="Password"
                     type="password"
                     margin="normal"
                     varient="outlined"
                     value={password.value}
                     onChange={password.changeHandler}
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

                     <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

                     <Button
                    //   sx={{
                    //     marginTop:"1rem",
                    //   }}
                      variant="text"
                      fullWidth
                    //   color="secondary"
                      onClick={toggleLogin}
                     >
                        Sign Up Instead
                     </Button>
                  </form>
                </>
                ) :( 
                    <>
                    <Typography variant="h5">Sign Up</Typography>
                    <form style={{
                      width:"100%",
                      marginTop:"1rem",
                    }}
                     onSubmit={handleSigUp}
                    >

                    <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                        <Avatar
                         sx={{
                            width:"10rem",
                            height:"10rem",
                            objectFit:"contain",
                         }}
                         src={avatar.preview}
                        />
                        
                       <IconButton
                        sx={{
                            position:"absolute",
                            bottom:"0",
                            right:"0",
                            color:"white",
                            bgcolor:"rgba(0,0,0,0.5)",
                            ":hover":{
                                bgcolor:"rgba(0,0,0,0.7)",
                            },
                         }}
                         component="label"
                       >
                         <>
                          <CameraAltIcon/>
                          <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                         </>
                       </IconButton>

                    </Stack>

                    
                    {
                        avatar.error && (
                            <Typography 
                            color="error" 
                            varient="caption"
                            display={"block"}
                            width={"fit-content"}
                            m={"1rem auto"}
                            >
                                {avatar.error}
                            </Typography>
                        )
                    }

                       <TextField
                       required
                       fullWidth
                       label="Name"
                       margin="normal"
                       varient="outlined"
                       value={name.value}
                       onChange={name.changeHandler}
                       />
                       <TextField
                       required
                       fullWidth
                       label="Bio"
                       margin="normal"
                       varient="outlined"
                       value={bio.value}
                       onChange={bio.changeHandler}
                       />
                      <TextField
                       required
                       fullWidth
                       label="Username"
                       margin="normal"
                       varient="outlined"
                       value={username.value}
                       onChange={username.changeHandler}
                       />

                     {
                        username.error && (
                            <Typography color="error" varient="caption">
                                {username.error}
                            </Typography>
                        )
                     }

                      <TextField
                       required
                       fullWidth
                       label="Password"
                       type="password"
                       margin="normal"
                       varient="outlined"
                       value={password.value}
                       onChange={password.changeHandler}
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
                          Sign Up
                       </Button>
  
                       <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
  
                       <Button
                      //   sx={{
                      //     marginTop:"1rem",
                      //   }}
                        variant="text"
                        fullWidth
                      //   color="secondary"
                        onClick={toggleLogin}
                       >
                          Login Instead
                       </Button>
                    </form>
                  </>
            ) }

        </Paper>
    </Container>
    </div>
  )
}
