import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'

const TicketForm = ({ handlerOnSubmit, handleOnChange, dataForm, dataFormError }) => {
  console.log(dataForm);
  return (
    <div
      className="rounded-lg p-6 my-5 text-surface shadow-lg dark:bg-neutral-700 dark:text-white dark:shadow-black/30">
      <h1 className="text-center mb-5 uppercase text-lg font-bold">Nuevo Ticket</h1>
      <Form className='m-3' autoComplete='off' onSubmit={handlerOnSubmit}>
        <Form.Group as={Row} className='mt-3'>
          <Form.Label column sm={3}>Solicitud: </Form.Label>
          <Col sm={9}>
            <Form.Control
              type='text'
              name='title'
              //minLength={10}
              maxLength={50}
              value={dataForm.title}
              onChange={handleOnChange}
              placeholder='Ingresa un titulo principal'
              required
            />
            <Form.Text className="text-danger">
              {dataFormError.title}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mt-3'>
          <Form.Label column sm={3}>Solicitud: </Form.Label>
          <Col sm={9}>
            <Form.Select
              name='typeTicketId'
              value={dataForm.typeTicketId}
              onChange={handleOnChange}
              required
            >
              <option value="">Seleccionar...</option>
              <option value="1">Nuevo desarrollo</option>
              <option value="2">Actualizar pantalla</option>
              <option value="3">Correccion error</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group className='mt-3'>
          <Form.Label>Detalle: </Form.Label>
          <Form.Control
            as='textarea'
            name='detail'
            rows="5"
            value={dataForm.detail}
            onChange={handleOnChange}
            placeholder='Detalla la solicitud a desarrollar..'
            required
          />
        </Form.Group>
        <button
          type="submit"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          className="inline-block bg-orange-600 rounded hover:bg-orange-700 px-6 mt-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
          Enviar ticket
        </button>
      </Form>

    </div>
  )
}

export default TicketForm