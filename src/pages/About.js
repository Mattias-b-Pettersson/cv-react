import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faBootstrap, faHtml5, faCss3, faPython, faReact, faGithub, faNpm, faGit } from '@fortawesome/free-brands-svg-icons'
import styles from "../styles/About.module.css"
import djangoLogo from '../assets/logos/django-logo.png'
import jQueryLogo from '../assets/logos/jquery-logo.png'
import postgresLogo from '../assets/logos/postgres-logo.svg'

function About() {
    return (
        <Container id='about'>
            <Row className='mt-5'>
                <Col xs={12} lg={6}>
                    <h2 >Om mig</h2>
                    <p className='lead'>
                        Hej! Mitt namn är Mattias Pettersson och jag är en ny examinerad Webbutvecklare från Code Institute.
                        Under min utbildning har jag fått lära mig utveckla webbapplikationer med användarvänlighet och mångsidighet som fokus.
                        Jag har också fått erfarenhet av arbetssätt och verktyg som hjälper hålla utvecklingsprocessen effektiv och flexibel.
                        <br /><br />
                        Jag bor i Gustavsberg strax utanför Stockholm med min fru och vår hund. Som person är jag driven samt målmedveten och gillar att lära mig nya saker som får mig att utvecklas.
                        Tidigare har jag arbetat som it-support tekniker, vilket har gett mig erfarenhet av att arbeta i team och att hantera stressiga situationer.
                    </p>
                </Col>
                <Col xs={12} lg={6}>
                    <Row>
                        <h2 className='mb-4 text-center'>Vad använder jag mig av?</h2>
                        <Col className=''>

                            <div className={`${styles.icons} mt-4 text-center`}>
                                <FontAwesomeIcon icon={faJs} className={`fs-1 w-100`} />
                                <p className='fs-3'>JavaScript</p>
                            </div>
                            <div className={`${styles.icons} mt-4 text-center`}>
                                <img src={jQueryLogo} className="mx-auto" height="35" alt="" aria-hidden="true" />
                                <p className='fs-3'>jQuery</p>
                            </div>
                            <div className={`${styles.icons} mt-4 text-center`}>
                                <FontAwesomeIcon icon={faReact} className={`fs-1 w-100`} />
                                <p className='fs-3'>React</p>
                            </div>
                            <div className={`${styles.icons} mt-4 text-center`}>
                                <FontAwesomeIcon icon={faNpm} className={`fs-1 w-100`} />
                                <p className='fs-3'>NPM</p>
                            </div>
                            <div className={`${styles.icons} mt-4 text-center`}>
                                <FontAwesomeIcon icon={faPython} className={`fs-1 w-100`} />
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
                                <FontAwesomeIcon icon={faHtml5} className={` fs-1 w-100`} />
                                <p className='fs-3'>HTML</p>
                            </div>
                            <div className={`${styles.icons} mt-4 text-center`}>
                                <FontAwesomeIcon icon={faCss3} className={`fs-1 w-100`} />
                                <p className='fs-3'>CSS</p>
                            </div>
                            <div className={`${styles.icons} mt-4 text-center`}>
                                <FontAwesomeIcon icon={faBootstrap} className={`fs-1 w-100`} />
                                <p className='fs-3'>Bootstrap</p>
                            </div>
                            <div className={`${styles.icons} mt-4 text-center`}>
                                <FontAwesomeIcon icon={faGit} className={`fs-1 w-100`} />
                                <p className='fs-3'>Git</p>
                            </div>
                            <div className={`${styles.icons} mt-4 text-center`}>
                                <FontAwesomeIcon icon={faGithub} className={`fs-1 w-100`} />
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