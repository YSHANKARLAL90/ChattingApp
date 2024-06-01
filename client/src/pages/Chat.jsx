import React, { Fragment, useRef } from 'react';
import AppLayout from '../components/layout/AppLayout';
import {Stack, IconButton} from "@mui/material";
import { grayColor } from '../constants/color';
import {AttachFile as AttachFileIcon,Send as SendIcon} from '@mui/icons-material';
// import { orange } from '@mui/material/colors';
import { InputBox } from '../components/styles/StyledComponents';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';

const user = {
  _id :"hjbdscjh",
  name:"JAI SHREE SHYAM"
}

const Chat = () => {
  // Your component logic here
  const containerRef = useRef(null);
  
  return (
    <Fragment>
      <Stack 
         ref={containerRef}
         boxSizing={"border-box"}
         padding={"1rem"}
         spacing={"1rem"}
         bgcolor={grayColor}
         height={"90%"}
         sx={{
          overflowX:"hidden",
          overflowY:"auto",
         }}
      >
      {
        sampleMessage.map((i)=>(
          <MessageComponent message={i} key={i._id} user={user}/>
        ))
      }
      </Stack>

      <form style={{height:"10%"}}>
        <Stack 
          direction={"row"} 
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}  
        >
          <IconButton
            sx={{
              position:"absolute",
              left:"1.5rem",
              rotate:"30deg"
            }}
          >
            <AttachFileIcon/>
          </IconButton>

          <InputBox placeholder="Type message here..."/>

          <IconButton 
            type="submit"
            sx={{
              rotate: "-30deg",
              backgroundColor:"#ea7070",
              color:"white",
              marginLeft:"1rem",
              padding:"0.5rem",
              "&:hover":{
                bgcolor:"error.dark",
              },
            }}  
          >
            <SendIcon/>
          </IconButton>

        </Stack>
      </form>
      <FileMenu/>
    </Fragment>
  );
};

export default AppLayout(Chat);
