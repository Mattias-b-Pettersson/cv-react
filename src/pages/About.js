import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faBootstrap, faHtml5, faCss3, faPython, faReact, faGithub, faNpm, faGit } from '@fortawesome/free-brands-svg-icons'
import styles from "../styles/About.module.css"
import djangoLogo from '../assets/images/django-logo.png'
import jQueryLogo from '../assets/images/jquery-logo.png'
import postgresLogo from '../assets/images/postgres-logo.svg'

function About() {
  return (
    <Container id='about'>
        <Row className='mt-5'>
            <Col xs={12} lg={6}>
                    <h2 >Om mig</h2>
                    <p className='lead'>
                        Hej! Mitt namn är Mattias. Jag är en ny examinerad Webbutvecklare från Code Institute universitet där jag har fått lära mig att utveckla webbapplikationer med fokus på frontend och backend.
                        Jag har fått lära mig att använda mig av olika ramverk och bibliotek för att skapa en mer dynamisk och användarvänlig webbapplikation.
                        Jag har även lärt mig att använda mig av olika verktyg för att skapa en mer effektiv utvecklingsprocess. 
                    </p>
            </Col>
            <Col xs={12} lg={6}>
                <Row>
                    <h2 className='mb-4 text-center'>Vad använder jag mig av?</h2>
                    <Col className=''>

                        <div className={`${styles.icons} mt-4 text-center`}>
                            <FontAwesomeIcon icon={faJs} className={`fs-1 w-100`}/>
                            <p className='fs-3'>JavaScript</p>
                        </div>
                        <div className={`${styles.icons} mt-4 text-center`}>
                            <img src={jQueryLogo} className="mx-auto" height="35" alt="" aria-hidden="true" />
                            <p className='fs-3'>jQuery</p>
                        </div>
                        <div className={`${styles.icons} mt-4 text-center`}>
                            <FontAwesomeIcon icon={faReact} className={`fs-1 w-100`}/>
                            <p className='fs-3'>React</p>
                        </div>
                        <div className={`${styles.icons} mt-4 text-center`}>
                            <FontAwesomeIcon icon={faNpm} className={`fs-1 w-100`}/>
                            <p className='fs-3'>NPM</p>
                        </div>
                        <div className={`${styles.icons} mt-4 text-center`}>
                            <FontAwesomeIcon icon={faPython} className={`fs-1 w-100`}/>
                            <p className='fs-3'>Python</p>
                        </div>
                        <div className={`${styles.icons} mt-4 text-center`}>
                            <img src={djangoLogo} className="mx-auto" height="35" alt="" aria-hidden="true" />
                            <p className='fs-3'>Django</p>
                        </div>

                    </Col>
                    <Col>

                        <div className={`${styles.icons} mt-4 text-center`}>
                            <img src={postgresLogo} className="mx-auto" height="35" alt="" aria-hidden="true" />
                            <p className='fs-3'>PostgreSQL</p>
                        </div>
                        <div className={`${styles.icons} mt-4 text-center`}>
                            <FontAwesomeIcon icon={faHtml5} className={` fs-1 w-100`}/>
                            <p className='fs-3'>HTML</p>
                        </div>
                        <div className={`${styles.icons} mt-4 text-center`}>
                            <FontAwesomeIcon icon={faCss3} className={`fs-1 w-100`}/>
                            <p className='fs-3'>CSS</p>
                        </div>
                        <div className={`${styles.icons} mt-4 text-center`}>
                            <FontAwesomeIcon icon={faBootstrap} className={`fs-1 w-100`}/>
                            <p className='fs-3'>Bootstrap</p>
                        </div>
                        <div className={`${styles.icons} mt-4 text-center`}>
                            <FontAwesomeIcon icon={faGit} className={`fs-1 w-100`}/>
                            <p className='fs-3'>Git</p>
                        </div>
                        <div className={`${styles.icons} mt-4 text-center`}>
                            <FontAwesomeIcon icon={faGithub} className={`fs-1 w-100`}/>
                            <p className='fs-3'>GitHub</p>
                        </div>

                    </Col>
                </Row>    
            </Col>
        </Row>
    </Container>
    
  )
}

export default About