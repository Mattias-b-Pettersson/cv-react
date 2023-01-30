import React from 'react'
import { Container } from 'react-bootstrap'
import AnimateWhenInView from '../utils/AnimateWhenInView'

function Resume() {
  return (
    <Container>
        <h1>Resume</h1>
        <AnimateWhenInView>
            <h3 h3 className='mb-0'>Serviceförvaltningen Servicedesk, Region Stockholm</h3>
            <p className='text-muted mt-0'>juli 2019 - nuvarande</p>
            <p>IT-Support tekniker, Second Line/Back office</p>
        </AnimateWhenInView>
        <AnimateWhenInView>
            <h3 className='mb-0'>Sekretess belagd tjänst</h3>
            <p className='text-muted mt-0'>september 2018 - juni 2019</p>
            <p>IT-Support tekniker inom iOS och Mac</p>
        </AnimateWhenInView>
        <AnimateWhenInView>
            <h3 h3 className='mb-0'>Install Elteknik</h3>
            <p className='text-muted mt-0'>januari 2018 - augusti 2018</p>
            <p>Elektriker lärling</p>
        </AnimateWhenInView>
        <AnimateWhenInView>
            <h3 h3 className='mb-0'>MatHem</h3>
            <p className='text-muted mt-0'>januari 2017 - februari 2018</p>
            <p>Förare</p>
        </AnimateWhenInView>
        <AnimateWhenInView>
            <h3 h3 className='mb-0'>Biltema</h3>
            <p className='text-muted mt-0'>mars 2016 - januari 2017</p>
            <p>Butiksmedarbetare</p>
        </AnimateWhenInView>
    </Container>
  )
}

export default Resume