import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BreadcrumbPage from '../../components/BreadcrumbPage'
import TicketForm from '../../components/TicketForm'
import {shortText} from '../../utils/validation.js'

const initDataForm = {
  title: "",
  typeTicketId: "",
  detail: ""
}

const initDataError = {
  title: "",
  typeTicketId: "",
  detail: ""
}

const AddTicket = () => {

  const [dataForm, setDataForm] = useState(initDataForm);
  const [dataFormError, setDataFormError] = useState(initDataError);

  const handlerOnSubmit = async (e) => {
    e.preventDefault();

    setDataFormError(initDataError);

    const isValid = await shortText(dataForm.title) && dataForm.typeTicketId !== "";
    !isValid && setDataFormError({
      ...dataFormError,
      title: isValid ? "" : "El campo es requerido",
      typeTicketId: isValid ? "" : "El campo es requerido"
    })
    console.log("enviar datos", dataForm);
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
            dataFormError={dataFormError}
            dataForm={dataForm}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default AddTicket