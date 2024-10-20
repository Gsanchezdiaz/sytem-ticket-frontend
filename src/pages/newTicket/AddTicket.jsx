import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BreadcrumbPage from '../../components/BreadcrumbPage'
import TicketForm from '../../components/TicketForm'

const initDataForm = {
  title: "",
  typeTicketId: "",
  detail: ""
}

const AddTicket = () => {

  const [dataForm, setDataForm] = useState(initDataForm);

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    console.log("enviar datos")
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value
    })
  }

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page="Nuevo Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <TicketForm
            handleOnChange={handleOnChange}
            handlerOnSubmit={handlerOnSubmit}
            dataForm={dataForm}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default AddTicket