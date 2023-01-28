import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { motion } from "framer-motion"
import styles from '../styles/LandingPage.module.css'


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
    }, 50)
  }

  const onHoverLeave = (event) => {
    clearInterval(interval);
    event.target.innerText = event.target.dataset.value;
  }


  return (
    <div className={styles.mask}>
      <Container className='min-vh-100 d-flex align-items-center'>
        <Row className='w-100'>
          <Col xs={12} md={4} className='d-flex align-items-center'>
            <div className={`${styles.imageOuter} d-flex align-items-center justify-content-center ms-md-auto`}>
              <div className={`${styles.image}`} />
            </div>
          </Col>
          <Col className='d-flex align-items-center' xs={12} md={4}>
            <h1 className='d-block text-white mx-auto'>Hej! <br />Mitt namn är <span className={styles.name}>Mattias</span></h1>
          </Col >
          <Col xs={12} md={4}>
            <motion.div whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}>
              <h2 className={`${styles.link} d-block text-muted mx-auto`} data-value="Om mig" onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>Om mig</h2>
            </motion.div>

            <motion.div whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
            }}>
              <h2 className={`${styles.link} d-block text-muted mx-auto mt-4`} data-value="Portfolio" onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>Portfolio</h2>
            </motion.div>

            <motion.div whileHover={{
            scale: 1.1,
            transition: { duration: 0.2},
            }}>
              <h2 className={`${styles.link} d-block text-muted mx-auto mt-4`} data-value="Resume" onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>Resume</h2>
            </motion.div>

            <motion.div whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
            }}>
              <h2 className={`${styles.link} d-block text-muted mx-auto mt-4`} data-value="Kontakt" onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>Kontakt</h2>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage