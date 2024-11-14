import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const Pixelgrade = () => {
  return (
   
    <Container>
        
    <div className="d-flex  flex-column  flex-lg-row justify-content-lg-between  align-items-center  ">
    <img height={450} alt='Images' src="/pixelgrade.svg" data-aos="fade-right" />
    <article className="mx-5 px-5" data-aos="fade-left">
      <h1 className="fw-bold ">
        <p className='mb-1 '>The unseen of spending three</p>
        year at &nbsp;
        <span className=" text-success fw-bold">Pixelgrade</span>
      </h1>
      <p className="mt-3" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
        amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
        Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
        tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
        Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
        elementum pulvinar odio.
      </p>
      <Button variant="success btn-lg mt-3">Learn More</Button>
    </article>
  </div>
    </Container>
  )
}

export default Pixelgrade