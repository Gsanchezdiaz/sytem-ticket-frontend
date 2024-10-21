import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BreadcrumbPage from '../../components/BreadcrumbPage'
import SearchForm from '../../components/SearchForm'
import TicketTable from '../../components/TicketTable'
import data_tickets from '../../assets/data-ticket.json'

const ListTicket = () => {
    
    const [str, setStr] = useState("");
    const [dispTickets, setDispTickets] = useState(data_tickets);

    useEffect(() => {

    }, [str, dispTickets])
    
    const handleOnChange = (e) => {
        const { value } = e.target;
        setStr(value);
        searchTickets(value);
    }

    const searchTickets = (sttr) => {
        const normalizeStr = (str) => 
            str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        const display = data_tickets.filter((row) => 
            normalizeStr(row.asunto).toLowerCase().includes(normalizeStr(sttr).toLowerCase())
          );
        
        console.log(display);
        setDispTickets(display);
    }

  return (
    <Container>
        <Row>
            <Col>
                <BreadcrumbPage page="Lista de Tickets" />
            </Col>
        </Row>

        <Row className='mt-4 mb-4'>
            <Col>
            <button
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="inline-block bg-orange-600 rounded hover:bg-orange-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Nuevo ticket
            </button>
            </Col>
            <Col className='text-right'>
                <SearchForm 
                    handleOnChange={handleOnChange}
                    str={str}
                />
            </Col>
        </Row>

        <Row>
            <Col>
                <TicketTable data_tickets={dispTickets} />
            </Col>
        </Row>
    </Container>
  )
}

export default ListTicket