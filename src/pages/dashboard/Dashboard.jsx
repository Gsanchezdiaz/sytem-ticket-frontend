import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col className='text-center mt-5 mb-2'>
                <Button variant='info' style={{'padding': '5px'}}>Nuevo Ticket</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default Dashboard