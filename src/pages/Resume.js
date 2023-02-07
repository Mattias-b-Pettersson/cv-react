import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styles from '../styles/Resume.module.css'

function Resume() {
  return (
    <Container className='border-top mt-5' id="resume">
        <Row className="mt-5">
            <Col xs={12} md={6}>
                <h1>Resume</h1>
                <h3 className='mb-0'>Serviceförvaltningen Servicedesk, Region Stockholm</h3>
                <p className='text-muted mt-0'>juli 2019 - nuvarande</p>
                <p>IT-Support tekniker, Second Line/Back office</p>
                <h3 className='mb-0'>Sekretess belagd tjänst, Teleperformance</h3>
                <p className='text-muted mt-0'>september 2018 - juni 2019</p>
                <p>IT-Support tekniker inom iOS och Mac</p>
                <h3 className='mb-0'>Install Elteknik</h3>
                <p className='text-muted mt-0'>januari 2018 - augusti 2018</p>
                <p>Elektriker lärling</p>
                <h3 className='mb-0'>MatHem</h3>
                <p className='text-muted mt-0'>januari 2017 - februari 2018</p>
                <p>Förare</p>
                <h3 className='mb-0'>Biltema</h3>
                <p className='text-muted mt-0'>mars 2016 - januari 2017</p>
                <p>Butiksmedarbetare</p>
                <h2 className='mt-5'>
                    Utbildning
                </h2>
                <h3 className='mb-0'>Code institute</h3>
                <p className='text-muted mt-0'>Universitet</p>
                <p>Fullstack Webbutveckling</p>
            </Col>
            <Col xs={6} className={`${styles.image} d-xs-none d-md-inline`}>
                {/* img div */}
            </Col>
        </Row>
    </Container>
  )
}

export default Resume