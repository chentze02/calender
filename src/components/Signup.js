import React, { useState } from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate} from 'react-router-dom'

export default function Signup(){
    const emailRef = useRef()
    const passRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [success, setSucess] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passRef.current.value)
            setSucess('Signup Success!')
            navigate("/")
        }catch{
            setError('Failed to create account')
        }
    }

    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center'>Sign Up</h2>
                    {(error !== '') && <Alert variant='danger'>{error}</Alert>}
                    {(success !== '') && <Alert variant='success'>{success}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder='Email' type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control placeholder='Password' type="password" ref={passRef} required />
                        </Form.Group>
                        <Button disabled={loading} className='w-100' type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}