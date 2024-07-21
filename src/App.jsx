import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Private from './pages/Private'
import { useEffect, useState } from 'react'
import ProtectedRoute from "./component/ProtectedRoute"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "./firebase"
import Spinner from 'react-bootstrap/Spinner';

function App() {
 const [user, setUser] = useState(null)
 const [isFetching, setIsFetching] = useState(true)

 useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,(user)=>{
    if(user){
      setUser(user)
      setIsFetching(false)
      return
    }
    setUser(null)
    setIsFetching(false)
  })
  return ()=>unsubscribe()
 },[])
 if(isFetching){
  return <Spinner animation="border" />;
 }
  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element = {<Home/>}></Route>
      <Route path='/Private' element = {
        <ProtectedRoute user={user}>  
          <Private/> 
        </ProtectedRoute>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App