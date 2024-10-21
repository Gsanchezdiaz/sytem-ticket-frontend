import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BreadcrumbPage from '../../components/BreadcrumbPage'
import data_tickets from '../../assets/data-ticket.json'
import MessageHistory from '../../components/MessageHistory'
import TicketUpdate from '../../components/TicketUpdate'

const ticket = data_tickets[0]

const Ticket = () => {

    const [menssage, setMessage] = useState("")

    useEffect(() => {

    }, [menssage])

    const handleOnChange = (e) => {
        const { value } = e.target
        setMessage(value)
    }

    const handlerOnSubmit = (e) => {
        e.preventDefault()
        console.log(menssage)
    }

  return (
    <Container>
        <Row>
            <Col>
                <BreadcrumbPage page="Tickets" />
            </Col>
        </Row>
        <Row>
            <Col className='text-weight-bolder text-light'>
                <div className=''>Asunto: {ticket.asunto}</div>
                <div className=''>Fecha: {ticket.fechaRegistro}</div>
                <div className=''>Estado: {ticket.estado}</div>
            </Col>
            <Col className='text-right'>
            <button
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="inline-block bg-orange-600 rounded hover:bg-orange-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Cerrar ticket
            </button>
            </Col>
        </Row>
        <Row>
            <Col className='mt-4'>
                <MessageHistory msg={ticket.comentarios} />
            </Col>
        </Row>
        <Row>
            <Col className='mt-4'>
                <TicketUpdate 
                    msg={menssage} 
                    handleOnChange={handleOnChange}
                    handlerOnSubmit={handlerOnSubmit} />
            </Col>
        </Row>
    </Container>
  )
}

export default Ticket