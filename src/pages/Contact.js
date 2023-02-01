import React, { useState } from 'react'
import { Container, Form, Col, Row, Card, Image } from 'react-bootstrap'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import styles from '../styles/Contact.module.css'
import envelope from '../assets/images/envelope.png'

function Contact() {
    const [buttonState, setButtonState] = useState("Skicka")
    const [sentMail, setSentMail] = useState(false)
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
                setButtonState("Skickat!")
                setInterval(() => {
                    setSentMail(true)
                }, 2000)
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
        sentMail ? (
            <>
                <div>
                    <Container className='border-top'>
                        <Row className='mt-5'>
                            <Col xs={12} lg={6} fluid="true" className='mx-auto'>
                                <h2><FontAwesomeIcon icon={faPhoneAlt} className="me-2"/>Kontaktuppgifter</h2>
                                <p>Telefon: <a href="tel:070-6140570">070-614 05 70</a></p>
                                <p>Email: <a href="mailto:Mattep3@gmail.com">Mattep3@gmail.com</a></p>
                                <div >
                                    <h1>Tack för ditt mail!</h1>
                                    <p className='mb-3'>Jag svarar så fort jag kan.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className={`${styles.thanksOuter} overflow-hidden w-100 mb-5`}>
                        <motion.img
                            src={envelope}
                            alt=""
                            className={styles.envelope}
                            animate={{transition: { duration: 2 }, x:[200, 100, 5000], rotate: ["3deg", "-5deg", "-20deg"] }}
                        />
                    </div>
                </div>
            </>
        ) : (
            <Container className='border-top'>
                <Row className='mt-5'>
                    <Col xs={12} lg={6} fluid="true" className='mx-auto'>
                        <h2><FontAwesomeIcon icon={faPhoneAlt} className="me-2"/>Kontaktuppgifter</h2>
                        <p>Telefon: <a href="tel:070-6140570">070-614 05 70</a></p>
                        <p>Email: <a href="mailto:Mattep3@gmail.com">Mattep3@gmail.com</a></p>
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

                            <motion.button 
                            className={`${styles.btnColor} btn`} 
                            type="submit"
                            whileHover={{scale: 1.1, rotate: "-5deg"}} 
                            whileTap={{ 
                                scale: 0.9, 
                                rotate: "5deg",
                                transition: { duration: 0.2 }
                            }}
                            >
                                {buttonState}
                            </motion.button>
                        </Form >
                    </Col>
                </Row>
            </Container>
        )
    )
}

export default Contact