import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faNodeJs, faBootstrap, faHtml5, faCss3, faPython, faReact, faGithub, faNpm, faGit } from '@fortawesome/free-brands-svg-icons'
import styles from "../styles/About.module.css"

function About() {
  return (
    <Container>
        <Row className='mt-5'>
            <Col xs={12} lg={6}>
                <h2 >Om mig</h2>
                <p className='lead'>Hej! Mitt namn är Mattias. Mi in nulla posuere sollicitudin aliquam ultrices. 
                Molestie nunc non blandit massa enim nec dui. Morbi tincidunt augue interdum velit euismod in pellentesque massa. 
                Quis varius quam quisque id diam vel. Rutrum quisque non tellus orci ac auctor augue mauris. Accumsan tortor posuere ac ut consequat. 
                Nunc sed id semper risus in hendrerit gravida rutrum quisque. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. 
                Scelerisque eu ultrices vitae auctor eu. Est sit amet facilisis magna etiam tempor orci.
                </p>
            </Col>
            <Col xs={12} lg={6}>
                <Row>
                <h2 className='mb-4'>Vad använder jag mig av?</h2>
                <Col className=''>
                
                <span className={`${styles.icons} mt-4 text-center`}>
                    <FontAwesomeIcon icon={faJs} className={`${styles.icons} fs-1 w-100`}/>
                    <p className='fs-3'>JavaScript</p>
                </span>
                <span className={`${styles.icons} mt-4 text-center`}>
                    <FontAwesomeIcon icon={faReact} className={`${styles.icons} fs-1 w-100`}/>
                    <p className='fs-3'>React</p>
                </span>
                <span className={`${styles.icons} mt-4 text-center`}>
                    <FontAwesomeIcon icon={faNodeJs} className={`${styles.icons} fs-1 w-100`}/>
                    <p className='fs-3'>Node.js</p>
                </span>
                <span className={`${styles.icons} mt-4 text-center`}>
                    <FontAwesomeIcon icon={faNpm} className={`${styles.icons} fs-1 w-100`}/>
                    <p className='fs-3'>NPM</p>
                </span>
                <span className={`${styles.icons} mt-4 text-center`}>
                    <FontAwesomeIcon icon={faBootstrap} className={`${styles.icons} fs-1 w-100`}/>
                    <p className='fs-3'>Bootstrap</p>
                </span>
                </Col>
                <Col>
                <span className={`${styles.icons} mt-4 text-center`}>
                    <FontAwesomeIcon icon={faHtml5} className={`${styles.icons} fs-1 w-100`}/>
                    <p className='fs-3'>HTML</p>
                </span>
                <span className={`${styles.icons} mt-4 text-center`}>
                    <FontAwesomeIcon icon={faCss3} className={`${styles.icons} fs-1 w-100`}/>
                    <p className='fs-3'>CSS</p>
                </span>
                <span className={`${styles.icons} mt-4 text-center`}>
                    <FontAwesomeIcon icon={faPython} className={`${styles.icons} fs-1 w-100`}/>
                    <p className='fs-3'>Python</p>
                </span>
                <span className={`${styles.icons} mt-4 text-center`}>
                    <FontAwesomeIcon icon={faGit} className={`${styles.icons} fs-1 w-100`}/>
                    <p className='fs-3'>Git</p>
                </span>
                <span className={`${styles.icons} mt-4 text-center`}>
                    <FontAwesomeIcon icon={faGithub} className={`${styles.icons} fs-1 w-100`}/>
                    <p className='fs-3'>GitHub</p>
                </span>
                </Col>
                </Row>    
            </Col>
        </Row>
    </Container>
    
  )
}

export default About