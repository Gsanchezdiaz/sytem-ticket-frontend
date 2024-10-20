import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TicketTable from '../../components/TicketTable'
import data_tickets from '../../assets/data-ticket.json'
import BreadcrumbPage from '../../components/BreadcrumbPage'

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className=''>
          <BreadcrumbPage page="Dashboard"/>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mt-5 mb-2'>
          <button className='bg-orange-600 p-3 px-3 my-6 rounded font-bold hover:bg-orange-700'>
            Nuevo Ticket
          </button>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mb-2'>
          <div>Total Tickets: 50</div>
          <div>Tickets Pendientes: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className='mt-4'>
          Tickets agregados recientemente:
        </Col>
      </Row>
      <Row>
        <Col className=''>
          <TicketTable data_tickets={data_tickets} />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard