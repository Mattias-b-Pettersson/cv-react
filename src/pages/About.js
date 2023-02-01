import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faBootstrap, faHtml5, faCss3, faPython, faReact, faGithub, faNpm, faGit } from '@fortawesome/free-brands-svg-icons'
import styles from "../styles/About.module.css"
import djangoLogo from '../assets/images/django-logo.png'
import jQueryLogo from '../assets/images/jquery-logo.png'

function About() {
  return (
    <Container>
        <Row className='mt-5'>
            <Col xs={12} lg={6}>
                    <h2 >Om mig</h2>
                    <p className='lead'>
                        Hej! Mitt namn är Mattias. Mi in nulla posuere sollicitudin aliquam ultrices. 
                        Molestie nunc non blandit massa enim nec dui. Morbi tincidunt augue interdum velit euismod in pellentesque massa. 
                        Quis varius quam quisque id diam vel. Rutrum quisque non tellus orci ac auctor augue mauris. Accumsan tortor posuere ac ut consequat. 
                        Nunc sed id semper risus in hendrerit gravida rutrum quisque. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. 
                        Scelerisque eu ultrices vitae auctor eu. Est sit amet facilisis magna etiam tempor orci.
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