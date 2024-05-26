import React,{Suspense, lazy} from "react";
import {BrowserRouter as Router,Routes,Route,BrowserRouter} from "react-router-dom";
import ProtectRoute from "./components/auth/Protectroute";
import { LayoutLoader } from "./components/layout/Loaders";



const Home = lazy(()=>import("./pages/Home"));
const Login = lazy(()=>import("./pages/Login"));
const Chat = lazy(()=>import("./pages/Chat"));
const Groups = lazy(()=>import("./pages/Groups"));
const NotFound = lazy(()=>import("./pages/NotFound"));

let user = true;

function App() {
  return (
   <BrowserRouter>
      <Suspense fallback={<LayoutLoader/>}>
        <Routes>
          <Route element={<ProtectRoute user={user}/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/chat/:chatId" element={<Chat/>}/>
            <Route path="/groups" element={<Groups/>}/>
            <Route path="/about" element={<h1>About</h1>}/>
          </Route>
          
          <Route 
            path="/login" 
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login/>
              </ProtectRoute>
            }/>

          {/* <Route path="/home" element={<Home/>}/> */}
          {/* <Route path="/chat/:chatId" element={<Chat/>}/> */}
          {/* <Route path="/groups" element={<Groups/>}/>
          <Route path="/about" element={<h1>About</h1>}/> */}

          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Suspense>
   </BrowserRouter>
  )
}

export default App
