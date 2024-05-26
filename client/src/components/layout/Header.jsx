import { AppBar,Backdrop,Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React,{Suspense, useState,lazy } from 'react'
import { orange } from '../../constants/color';
import {Menu as MenuIcon,
        Search as SearchIcon,
        Add as AddIcon,
        Group as GroupIcon,
        Logout as LogoutIcon,
        Notifications as NotificationsIcon} from "@mui/icons-material"
import { useNavigate} from 'react-router-dom';
// import SearchDialog from '../specific/Search'
const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

export default function Header() {

  const navigate = useNavigate();

  const [isMobile,setIsMobile] = useState(false);
  const [isSearch,setIsSearch] = useState(false);
  const [isNewGroup,setIsNewGroup] = useState(false);
  const [isNotification,setIsNotification] = useState(false);

  const handleMobile = ()=>{
    setIsMobile((prev)=>!prev);
    console.log("Mobile");   
  };
  const openSearch = ()=>{
    setIsSearch((prev)=>!prev);
    console.log("openSearchDialog");   
  };

  const openNewGroup = ()=>{
    setIsNewGroup((prev)=>!prev);
    console.log("openNewGroup");   
  };

  const openNotification = ()=>{
    setIsNotification((prev)=>!prev);
    console.log("openNotification");   
  };

  const navigateToGroup = ()=>{
    // console.log("navigateToGroup");
    navigate('/groups');   
  };

  const logoutHandler = ()=>{
    console.log("logout");   
  };
  
  return (
    <>

    <Box sx={{flexGrow:1}} height={"4rem"}>
      <AppBar position="static" sx={{
        bgcolor:orange
      }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              display:{xs:"none" ,sm:"block"},
            }}
          >
            Chattu
          </Typography>

          <Box 
            sx={{
              display:{xs:"block" ,sm:"none"},
            }}
          >
            <IconButton color="inherit" onClick={handleMobile}>
              <MenuIcon/>
            </IconButton>
          </Box>
          
          <Box
             sx={{
              flexGrow:1,
             }}
          />
          <Box>
            <IconBtn title={"Search"} icon={<SearchIcon/>} onClick={openSearch}/>
            {/* <Tooltip title="Search">
              <IconButton color="inherit" size="large" onClick={openSearchDialog}>
                <SearchIcon/>
              </IconButton>
            </Tooltip> */}

            <IconBtn title={"New Group"} icon={<AddIcon/>} onClick={openNewGroup}/>
            <IconBtn title={"Manage Groups"} icon={<GroupIcon/>} onClick={navigateToGroup}/>
            <IconBtn title={"Notification"} icon={<NotificationsIcon/>} onClick={openNotification}/>
            <IconBtn title={"Logout"} icon={<LogoutIcon/>} onClick={logoutHandler}/>

          </Box>
        </Toolbar>
      </AppBar>

    </Box>
    
    {
      isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog/>
        </Suspense>
      )
    }

    {
      isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog/>
        </Suspense>
      )
    }

    {
      isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog/>
        </Suspense>
      )
    }

    </>
  )
}

const IconBtn = ({title,icon,onClick}) =>{
  return(
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}