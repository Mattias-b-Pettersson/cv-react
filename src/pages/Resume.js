import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AnimateWhenInView from '../utils/AnimateWhenInView'
import manSittingAtDesk from '../assets/images/man-sitting-at-desk.png'
import styles from '../styles/Resume.module.css'

function Resume() {
  return (
    <Container>
        <Row>
            <Col xs={12} md={6}>
                <AnimateWhenInView>
                    <h1>Resume</h1>
                </AnimateWhenInView>
                <AnimateWhenInView>
                    <h3 className='mb-0'>Serviceförvaltningen Servicedesk, Region Stockholm</h3>
                    <p className='text-muted mt-0'>juli 2019 - nuvarande</p>
                    <p>IT-Support tekniker, Second Line/Back office</p>
                </AnimateWhenInView>
                <AnimateWhenInView>
                    <h3 className='mb-0'>Sekretess belagd tjänst, Teleperformance</h3>
                    <p className='text-muted mt-0'>september 2018 - juni 2019</p>
                    <p>IT-Support tekniker inom iOS och Mac</p>
                </AnimateWhenInView>
                <AnimateWhenInView>
                    <h3 className='mb-0'>Install Elteknik</h3>
                    <p className='text-muted mt-0'>januari 2018 - augusti 2018</p>
                    <p>Elektriker lärling</p>
                </AnimateWhenInView>
                <AnimateWhenInView>
                    <h3 className='mb-0'>MatHem</h3>
                    <p className='text-muted mt-0'>januari 2017 - februari 2018</p>
                    <p>Förare</p>
                </AnimateWhenInView>
                <AnimateWhenInView>
                    <h3 className='mb-0'>Biltema</h3>
                    <p className='text-muted mt-0'>mars 2016 - januari 2017</p>
                    <p>Butiksmedarbetare</p>
                </AnimateWhenInView>
            </Col>
            <Col xs={6} className={`${styles.image} d-xs-none d-md-inline`}>
                {/* <img src={manSittingAtDesk} alt="Man som sitter och jobbar vid en dator"/> */}
            </Col>
        </Row>
    </Container>
  )
}

export default Resume