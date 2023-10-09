import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faBootstrap, faHtml5, faCss3, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import styles from '../styles/Portfolio.module.css'
import djangoLogo from '../assets/logos/django-logo.png'
import nextJsLogo from '../assets/logos/next.js.png'
import tailwindLogo from '../assets/logos/tailwind-logo.png'
import { motion } from 'framer-motion'

function Portfolio() {
    return (
        <Container className='border-top mt-5' id="portfolio">
            <h1 className='mt-5'>Portfolio</h1>
            <p className='lead'>
                Här kan ni se några om mina tidigare projekt. Om ni klickar in er på Github länken så hittar ni också källkoden och mera information om projektet i dess ReadMe-fil.
                <br /> <br />
                Tyvärr har vissa av projekten inte en live demo version då Heroku har börjat ta betalt för att ha flera projekt uppe samtidigt.
            </p>

            <Row className="mt-5">
                <Col xs={12} md={6}>
                    <h2 className='mt-3'>Trådar</h2>
                    <p className='mb-0'>
                        En hemsida som är gjord för att efterlikna Metas nya hemsida Threads. Projektet är inte klart.
                    </p>
                    <p className='mt-3'>
                        Sidan är byggd med Next.js, tailwind och MongoDB.
                    </p>
                    <motion.a
                        className={`${styles.btnColor} me-4 btn mt-2`}
                        href='https://github.com/Mattias-b-Pettersson/tradar'
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, rotate: "-5deg" }}
                        whileTap={{ scale: 0.9, rotate: "5deg" }}
                    >
                        GitHub
                    </motion.a>
                    <motion.a
                        className={`${styles.btnColor} me-4 btn mt-2`}
                        href='https://tradar-g2arfx0to-mattias-b-petterssons-projects.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, rotate: "5deg" }}
                        whileTap={{ scale: 0.9, rotate: "-5deg" }}
                    >
                        Live Demo
                    </motion.a>
                    <h4 className='mt-5'>Techstack som använts</h4>
                    <div className='pb-4'>
                        <img src={nextJsLogo} className={`${styles.icons} mb-2 me-3`} height="26" alt="django" aria-hidden="true" />
                        <img src={tailwindLogo} className={`${styles.icons} mb-2 me-3`} height="24" alt="django" aria-hidden="true" />
                        <FontAwesomeIcon icon={faReact} className={`fs-2 me-3`} alt="react" />
                        <FontAwesomeIcon icon={faHtml5} className={`fs-2 me-3`} alt="html" />
                        <FontAwesomeIcon icon={faCss3} className={`fs-2 me-3`} alt="css" />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className={`${styles.tradarImage} ${styles.image}`}>
                        {/* image div */}
                    </div>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col xs={12} md={6} className="order-2 order-md-1">
                    <div className={`${styles.sosKcImage} ${styles.image}`}>
                        {/* image div */}
                    </div>
                </Col>
                <Col xs={12} md={6} className="order-1 order-md-2">
                    <h2 className='mt-5'>SÖS KC</h2>
                    <p className='mb-0'>
                        Programmet är skapat för att underlätta för de som sitter med kontohantering på Serviceförvaltningen att hantera konton.
                        Programmet är skapat med Python, Selenium och har ett grafiskt användargränssnitt som är skapat med Tkinter.
                        <br /> <br />
                        Tyvärr finns ingen live demo version då det är interna system som används.
                    </p>
                    <motion.a
                        className={`${styles.btnColor} me-4 btn mt-2`}
                        href='https://github.com/Mattias-b-Pettersson/SOS-KC-Valmeny'
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, rotate: "-5deg" }}
                        whileTap={{ scale: 0.9, rotate: "5deg" }}
                    >
                        GitHub
                    </motion.a>
                    <h4 className='mt-5'>Techstack som använts</h4>
                    <div className='mb-4'>
                        <FontAwesomeIcon icon={faPython} className={`fs-2 me-3`} alt="python" />
                    </div>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col xs={12} md={6}>
                    <h2 className='mt-3'>Install Elteknik</h2>
                    <p className='mb-0'>
                        Install Eltekniks hemsida som planeras för att gå live och byggas ut i framtiden.
                        Sidan är fortfarande under utveckling i samråd med företaget.
                    </p>
                    <p className='mt-3'>
                        Sidan är byggd med React.
                    </p>
                    <motion.a
                        className={`${styles.btnColor} me-4 btn mt-2`}
                        href='https://github.com/Mattias-b-Pettersson/install'
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, rotate: "-5deg" }}
                        whileTap={{ scale: 0.9, rotate: "5deg" }}
                    >
                        GitHub
                    </motion.a>
                    <motion.a
                        className={`${styles.btnColor} me-4 btn mt-2`}
                        href='https://mattias-b-pettersson.github.io/install/'
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, rotate: "5deg" }}
                        whileTap={{ scale: 0.9, rotate: "-5deg" }}
                    >
                        Live Demo
                    </motion.a>
                    <h4 className='mt-5'>Techstack som använts</h4>
                    <div className='mb-4'>
                        <FontAwesomeIcon icon={faReact} className={`fs-2 me-3`} alt="react" />
                        <FontAwesomeIcon icon={faBootstrap} className={`fs-2 me-3`} alt="bootstrap" />
                        <FontAwesomeIcon icon={faHtml5} className={`fs-2 me-3`} alt="html" />
                        <FontAwesomeIcon icon={faCss3} className={`fs-2 me-3`} alt="css" />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className={`${styles.installImage} ${styles.image}`}>
                        {/* image div */}
                    </div>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col xs={12} md={6} className="order-2 order-md-1">
                    <div className={`${styles.yamatoImage} ${styles.image}`}>
                        {/* image div */}
                    </div>
                </Col>
                <Col xs={12} md={6} className="order-1 order-md-2">
                    <h2 className='mt-5'>Sushi Yamato</h2>
                    <p className='mb-0'>
                        Hemsida som är skapat till en resturang som heter Sushi Yamato.
                        Här kan man se allt resturangen har att erbjuda och man kan logga in som administratör på sidan och ändra i menyn.
                    </p>
                    <p className='mt-3'>
                        Sidan är byggd med Django som är ett Python MVC framework.
                    </p>
                    <motion.a
                        className={`${styles.btnColor} me-4 btn mt-2`}
                        href='https://github.com/Mattias-b-Pettersson/Sushi-Yamato'
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        GitHub
                    </motion.a>
                    <h4 className='mt-5'>Techstack som använts</h4>
                    <div className='mb-4'>
                        <FontAwesomeIcon icon={faHtml5} className={`fs-2 me-3`} alt="html" />
                        <FontAwesomeIcon icon={faCss3} className={`fs-2 me-3`} alt="css" />
                        <FontAwesomeIcon icon={faBootstrap} className={`fs-2 me-3`} alt="bootstrap" />
                        <img src={djangoLogo} className="pb-2" height="45" alt="django" aria-hidden="true" />
                    </div>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col xs={12} md={6}>
                    <h2 className='mt-3'>Todo app</h2>
                    <p className='mb-0'>
                        Todo app med företag som fokus.
                        I appen kan man skapa todos och tilldela kollegor, sätta status och prio på todon och lägga till filer.
                        I vyn där man ser alla Todos finns det möjlighet att sortera på staus, prio osv.
                        Om man klickar sig in på en Todo så kan man kommentera på todon och ändra i alla fält.
                    </p>
                    <p className='mt-3'>
                        Appen är byggd med React som frontend och Django restframework som backend.
                    </p>
                    <motion.a
                        className={`${styles.btnColor} me-4 btn mt-2`}
                        href='https://github.com/Mattias-b-Pettersson/todo'
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, rotate: "-5deg" }}
                        whileTap={{ scale: 0.9, rotate: "5deg" }}
                    >
                        GitHub Frontend
                    </motion.a>
                    <motion.a
                        className={`${styles.btnColor} me-4 btn mt-2`}
                        href='https://github.com/Mattias-b-Pettersson/todos-backend'
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, rotate: "5deg" }}
                        whileTap={{ scale: 0.9, rotate: "-5deg" }}

                    >
                        GitHub Backend
                    </motion.a>
                    <h4 className='mt-5'>Techstack som använts</h4>
                    <div className='mb-4'>
                        <FontAwesomeIcon icon={faReact} className={`fs-2 me-3`} alt="react" />
                        <FontAwesomeIcon icon={faBootstrap} className={`fs-2 me-3`} alt="bootstrap" />
                        <FontAwesomeIcon icon={faHtml5} className={`fs-2 me-3`} alt="html" />
                        <FontAwesomeIcon icon={faCss3} className={`fs-2 me-3`} alt="css" />
                        <img src={djangoLogo} className="pb-2" height="45" alt="django" aria-hidden="true" />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className={`${styles.todoImage} ${styles.image}`}>
                        {/* image div */}
                    </div>
                </Col>
            </Row>

            <Row className="mt-5">
                
                <Col xs={12} md={6} className="order-2 order-md-1">
                    <div className={`${styles.ticTacToeImage} ${styles.image}`}>
                        {/* image div */}
                    </div>
                </Col>
                <Col xs={12} md={6} className="order-1 order-md-2">
                    <h2 className='mt-5'>Tic Tac Toe</h2>
                    <p>
                    Mitt tredje projekt för att förstå grunderna i python. Tic Tac Toe spel som är skapat med Python.


                    </p>
                    <motion.a
                        className={`${styles.btnColor} me-4 btn mt-2`}
                        href='https://github.com/Mattias-b-Pettersson/tic-tac-toe2.0'
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, rotate: "-5deg" }}
                        whileTap={{ scale: 0.9, rotate: "5deg" }}
                    >
                        GitHub
                    </motion.a>
                    <h4 className='mt-5'>Techstack som använts</h4>
                    <div className='mb-4'>
                        <FontAwesomeIcon icon={faPython} className={`fs-1 me-3 mb-5`} />
                    </div>
                </Col>

            </Row>

            <Row className="mt-5">
                
                <Col xs={12} md={6}>
                    <h2 className='mt-5'>Rock paper scissors lizard spock</h2>
                    <p>
                        Mitt andra projekt för att förstå grunderna i Javascript. Rock paper scissors lizard spock spel som är skapat med JavaScript.
                    </p>
                    <motion.a
                        type='button'
                        className={`${styles.btnColor} me-4 btn mt-2`}
                        whileHover={{ scale: 1.1, rotate: "-5deg" }}
                        whileTap={{ scale: 0.9, rotate: "5deg" }}
                        href='https://github.com/Mattias-b-Pettersson/RockPaperScissorsLizardSpock-Game'
                        target='_blank'
                        rel='noreferrer'
                    >
                        GitHub
                    </motion.a>
                    <motion.a
                        className={`${styles.btnColor} me-4 btn mt-2`}
                        href='https://mattias-b-pettersson.github.io/RockPaperScissorsLizardSpock-Game/'
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, rotate: "5deg" }}
                        whileTap={{ scale: 0.9, rotate: "-5deg" }}
                    >
                        Live Demo
                    </motion.a>
                    <h4 className='mt-5'>Techstack som använts</h4>
                    <div className='mb-4'>
                        <FontAwesomeIcon icon={faHtml5} className={`fs-1 me-3`} />
                        <FontAwesomeIcon icon={faCss3} className={`fs-1`} />
                        <FontAwesomeIcon icon={faJs} className={`fs-1 ms-3`} />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className={`${styles.rpslsImage} ${styles.image}`}>
                        {/* image div */}
                    </div>
                </Col>

            </Row>

            <Row className="mt-5">
                <Col xs={12} md={6} className="order-2 order-md-1">
                    <div className={`${styles.snSushiImage} ${styles.image}`}>
                        {/* image div */}
                    </div>
                </Col>
                <Col xs={12} md={6} className="order-1 order-md-2">
                    <h2 className='mt-5'>Saikō No Sushi</h2>
                    <p>
                        Mitt första projekt för att förstå grunderna i HTML och CSS. En hemsida som är riktat mot resturangen Saikō No Sushi.
                    </p>
                    <motion.a
                        className={`${styles.btnColor} me-4 btn mt-2`}
                        href='https://github.com/Mattias-b-Pettersson/Saiko-no-sushi'
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, rotate: "-5deg" }}
                        whileTap={{ scale: 0.9, rotate: "5deg" }}
                    >
                        GitHub
                    </motion.a>
                    <motion.a
                        className={`${styles.btnColor} me-4 btn mt-2`}
                        href='https://mattias-b-pettersson.github.io/Saiko-no-sushi/'
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, rotate: "5deg" }}
                        whileTap={{ scale: 0.9, rotate: "-5deg" }}
                    >
                        Live Demo
                    </motion.a>
                    <h4 className='mt-5'>Techstack som använts</h4>
                    <div className='mb-4'>
                        <FontAwesomeIcon icon={faHtml5} className={`fs-1 me-3`} />
                        <FontAwesomeIcon icon={faCss3} className={`fs-1`} />
                    </div>
                </Col>
                
            </Row>
        </Container>
    )
}

export default Portfolio