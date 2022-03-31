import React from "react";
import Signup from "./Signup";
// import {Container} from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Timetable from "./Timetable";
import Login from "./Login";
// import Calender from "./Calender";
import PrivateRoute from "./PrivateRoute";

function App() {
    return (
        <div>
            {/* <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "500px"}}> */}
                    <Router>
                        <AuthProvider>
                            <Routes>
                                {/* <Signup/>
                                <Route exact path="/">
                                    <Timetable/>
                                </Route>
                                <Route path="/signup">
                                    <Signup />
                                </Route>
                                <Route path="/login">
                                    <Login/>
                                </Route> */}
                                <Route exact path="*" element={<PrivateRoute><Timetable/></PrivateRoute>} />                           
                                {/* <Route exact path="*" element={<PrivateRoute component={Timetable} />}/> */}
                                <Route path="/signup" element={<Signup/>} />
                                <Route path="/login" element={<Login/>}/>
                            </Routes>
                        </AuthProvider>
                    </Router>
        </div>
            // </Container>
            // </div>
    )
}

export default App;
