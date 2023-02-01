import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion } from "framer-motion"
import styles from '../styles/LandingPage.module.css'
import NavBar from '../components/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll'


function LandingPage() {
  const characters = "abcdefghijklmnopqrstuvwxyz"
  let interval = null;
  const onHoverEnter = (event) => {
    let iterations = 0;
    const originalText = event.target.dataset.value;

    interval = setInterval( () => {event.target.innerText = event.target.innerText.split("").map((letter, index) => {
      if(index < iterations) {
        return originalText[index];
     }
      return letter === " " ?  letter : characters[Math.floor(Math.random() * 26)];
    }).join("")

    if(iterations >= originalText.length) {
      clearInterval(interval);
    }
    iterations += 1 / 3;
    }, 30)
  }

  const onHoverLeave = (event) => {
    clearInterval(interval);
    event.target.innerText = event.target.dataset.value;
  }


  return (
    <div className={styles.bg}>
      <div className={styles.mask}>
        <NavBar />
        <Container id="home" className={`${styles.ContainerHeight} d-flex align-items-center`}>
          <Row className='w-100'>
            <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
              <div className={`${styles.imageOuter} d-flex align-items-center justify-content-center ms-md-auto`}>
                <div className={`${styles.image}`} />
              </div>
            </Col>
            <Col className='d-flex align-items-center px-2' xs={12} md={4}>¨
              <div>
                <h1 className='d-block text-white mx-auto'>Hej! <br />Mitt namn är <span className={styles.name}>Mattias</span></h1>
                <p className='lead text-white'>Jag är Fullstack utvecklare med fokus på React som frontend och Django som backend.</p>
                <a href='https://www.linkedin.com/in/mattias-pettersson-80b558180' target="blank" rel='noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} className={`${styles.icon} me-2 fs-3`} />
                </a>
                <a href='https://github.com/Mattias-b-Pettersson' target="blank" rel='noreferrer'>
                  <FontAwesomeIcon icon={faGithubSquare} className={`${styles.icon} ms-2 fs-3`} />
                </a>
              </div>
            </Col >
            <Col xs={12} md={4}>
              <div>
                <motion.div whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}>
                  <Link to="about" className={`${styles.link} fs-2 d-block text-muted mx-auto`} data-value="Om mig" onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>Om mig</Link>
                </motion.div>

                <motion.div whileHover={{
                scale: 1.1,
                transition: { duration: 0.2},
                }}>
                  <Link to="resume" className={`${styles.link} fs-2 d-block text-muted mx-auto mt-4`} data-value="Resume" onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>Resume</Link>
                </motion.div>

                <motion.div whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
                }}>
                  <Link to="portfolio" className={`${styles.link} fs-2 d-block text-muted mx-auto mt-4`} data-value="Portfolio" onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>Portfolio</Link>
                </motion.div>

                <motion.div whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
                }}>
                  <Link to="contact" className={`${styles.link} fs-2 d-block text-muted mx-auto mt-4`} data-value="Kontakt" onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>Kontakt</Link>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default LandingPage