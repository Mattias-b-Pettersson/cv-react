import React, { useState } from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    const [buttonState, setButtonState] = useState("Skicka")
    const [formInfo, setFormInfo] = useState({
        email: '',
        number: '',
        message: '',
        name: '',
    })

    const onChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formInfo)
        setButtonState("Skickar...")

        if (formInfo.name === '' || formInfo.email === '' || formInfo.message === '') {
            alert('Du måste fylla i alla fält')
            return
        }

        let data = {
            service_id: 'service_c07g64h',
            template_id: 'CV',
            user_id: '-zMYICGsWqGso3ZjZ',
            template_params: {
                'from_name': formInfo.name,
                'from_email': formInfo.email,
                'from_number': formInfo.number,
                'message': formInfo.message,
            }
        }

        let customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };

        axios.post('https://api.emailjs.com/api/v1.0/email/send', data, customConfig)
            .then(res => {
                console.log(res)
                setButtonState(<>Skickat! <FontAwesomeIcon icon={faThumbsUp} className="me-2"/></>)
            })
            .catch(err => {
                console.log(err)
                setButtonState("Något gick fel, försök igen")
                setInterval(() => {
                    setButtonState("Skicka")
                }, 3000)
            })
    }
    

    return (
        <Container className='border-top'>
            <Row className='mt-5'>
                <Col xs={12} lg={6} fluid="true" className='mx-auto'>
                    <Form className='mb-5' onSubmit={onSubmit}>
                        <h2><FontAwesomeIcon icon={faEnvelope} className="me-2"/>Kontakta mig</h2>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Namn</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Namn" required={true} onChange={onChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Email" required={true} onChange={onChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="number">
                            <Form.Label>Telefonnummer</Form.Label>
                            <Form.Control type="text" placeholder="Telefonnummer" onChange={onChange} name="number" />
                            <Form.Text className='text-muted'>Du måste inte ange telefonnumer</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="message">
                            <Form.Label>Meddelande</Form.Label>
                            <Form.Control as="textarea" name="message" rows={6} placeholder="Skriv ditt meddelande här..." required={true} onChange={onChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            {buttonState}
                        </Button>
                    </Form >
                </Col>
            </Row>
        </Container>
    )
}

export default Contact