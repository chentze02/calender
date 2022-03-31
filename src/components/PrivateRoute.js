import React from 'react'
import {Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// export default function PrivateRoute({component: Component, ...rest}) {

//     const {currUser} = useAuth()
//     console.log("Hello")
//     console.log(currUser)
//   return (
//     // <Routes>
//         <Route {...rest} render={props => {return (currUser !== '' ? (() => {console.log("Helloworld")}, <Component {...props}/>) : (() => {console.log("Helloworld2")}, <Navigate to="/login"/>))}} > 
//         </Route>
//     /* </Routes> */
//   )
// }

export default function PrivateRoute({children}){
    const {currUser} = useAuth()

    return currUser ? children : <Navigate to="/login" />
}