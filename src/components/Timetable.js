import React from 'react'
import {Card, Button, Alert} from "react-bootstrap"
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom"
import Calender from './Calender'

export default function Timetable() {
    const [error, setError] = useState("")
    const {currUser, logout} = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try{
            await logout()
            navigate('/login')           
        }catch{
            setError('Failed to logout')
        }
    }

  return (
        <div>
            <Calender/>
             <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Profile</h2>
                    {error && <Alert variant='danger'>{error}</Alert> }
                    <strong>Email:</strong>{currUser.email}
                 </Card.Body>
             </Card>
             <div className='w-100 text-center mt-2'> 
                 <Button variant="link" onClick={handleLogout}>Log Out</Button>
             </div>
         </div>
  )
}
