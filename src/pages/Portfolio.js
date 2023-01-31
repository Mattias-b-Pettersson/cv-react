import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faBootstrap, faHtml5, faCss3, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../styles/Portfolio.module.css'
import djangoLogo from '../assets/images/django-logo.png'

function Portfolio() {
  return (
    <Container className='border-top mt-5'>
        <h1 className='mt-5'>Portfolio</h1>
        <Row >
            <Col xs={12} md={6}>
                <h2 className='mt-5'>Todo app</h2>
                <p>
                    Todo app med företag som fokus.
                    I appen kan man skapa todos och tilldela kollegor, sätta status och prio på todon och lägga till filer. 
                    Det finns även möjlighet att sortera på staus, prio osv. 
                    <a href='https://github.com/Mattias-b-Pettersson/todo' target='_blank' rel='noreferrer'>Källkod Frontend</a>
                    <a href='https://github.com/Mattias-b-Pettersson/todos-backend' target='_blank' rel='noreferrer'>Källkod Backend</a>
                </p>
                <h4>Techstack som använts</h4>
                <div className='d-inline'>
                    <FontAwesomeIcon icon={faReact} className={`fs-2 me-3`} alt="react"/>
                    <FontAwesomeIcon icon={faBootstrap} className={`fs-2 me-3`} alt="bootstrap"/>
                    <FontAwesomeIcon icon={faHtml5} className={`fs-2 me-3`} alt="html"/>
                    <FontAwesomeIcon icon={faCss3} className={`fs-2 me-3`} alt="css"/>
                    <img src={djangoLogo} className=" pb-2" height="45" alt="django" aria-hidden="true" />
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className={`${styles.todoImage} ${styles.image}`}>
                    {/* image div */}
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <div className={`${styles.yamatoImage} ${styles.image}`}>
                    {/* image div */}
                </div>
            </Col>
            <Col xs={12} md={6}>
                <h2 className='mt-5'>Sushi Yamato</h2>
                <p>
                    Sushi Yamato hemsida som är tänkt till en resturang med samma namn. 
                    Här kan man se allt resturangen har att erbjuda och man kan logga in som administratör på sidan och ändra i menyn. 
                    <a href='https://github.com/Mattias-b-Pettersson/Sushi-Yamato' target='_blank' rel='noreferrer'>Källkod</a>
                </p>
                <h4>Techstack som använts</h4>
                <div className='d-inline'>
                <FontAwesomeIcon icon={faHtml5} className={`fs-2 me-3`} alt="html"/>
                    <FontAwesomeIcon icon={faCss3} className={`fs-2 me-3`} alt="css"/>
                    <FontAwesomeIcon icon={faBootstrap} className={`fs-2 me-3`} alt="bootstrap"/>
                    <img src={djangoLogo} className=" pb-2" height="45" alt="django" aria-hidden="true" />
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <h2 className='mt-5'>Tic Tac Toe</h2>
                <p>
                    Tic Tac Toe spel som är skapat med Python. 
                    <a href='https://github.com/Mattias-b-Pettersson/tic-tac-toe2.0' target='_blank' rel='noreferrer'>Källkod</a>
                </p>
                <h4>Techstack som använts</h4>
                <div className='d-inline'>
                    <FontAwesomeIcon icon={faPython} className={`fs-1 me-3`}/>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className={`${styles.ticTacToeImage} ${styles.image}`}>
                    {/* image div */}
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <div className={`${styles.rpslsImage} ${styles.image}`}>
                    {/* image div */}
                </div>
            </Col>
            <Col xs={12} md={6}>
                <h2 className='mt-5'>Rock paper scissors lizard spock</h2>
                <p>
                    Rock paper scissors lizard spock spel som är skapat med JavaScript. 
                    <a href='https://github.com/Mattias-b-Pettersson/RockPaperScissorsLizardSpock-Game' target='_blank' rel='noreferrer'>Källkod</a>
                </p>
                <h4>Techstack som använts</h4>
                <div className='d-inline'>
                    <FontAwesomeIcon icon={faHtml5} className={`fs-1 me-3`}/>
                    <FontAwesomeIcon icon={faCss3} className={`fs-1`}/>
                    <FontAwesomeIcon icon={faJs} className={`fs-1 ms-3`}/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <h2 className='mt-5'>Saikō No Sushi</h2>
                <p>
                    Hemsida riktat mot resturangen Saikō No Sushi.
                    <a href='https://github.com/Mattias-b-Pettersson/RockPaperScissorsLizardSpock-Game' target='_blank' rel='noreferrer'>Källkod</a>
                </p>
                <h4>Techstack som använts</h4>
                <div className='d-inline'>
                    <FontAwesomeIcon icon={faHtml5} className={`fs-1 me-3`}/>
                    <FontAwesomeIcon icon={faCss3} className={`fs-1`}/>
                </div>

            </Col>
            <Col xs={12} md={6}>
            <div className={`${styles.snSushiImage} ${styles.image}`}>
                    {/* image div */}
                </div>
            </Col>
        </Row>
    </Container>
    )
}

export default Portfolio