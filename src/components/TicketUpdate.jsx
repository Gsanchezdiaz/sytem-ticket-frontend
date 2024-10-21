import React from 'react'
import { Form } from 'react-bootstrap'

const TicketUpdate = ({ msg, handleOnChange, handlerOnSubmit }) => {
  return (
    <Form onSubmit={handlerOnSubmit}>
        <Form.Label>Nuevo comentario: </Form.Label>
        <Form.Control 
            as='textarea'
            name='detail'
            rows="5"
            value={msg}
            onChange={handleOnChange}
            placeholder='Ingresa tu comentario..'
            
        />
        <div className='my-3 text-right'>
            <button
                type="submit"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="inline-block bg-orange-600 rounded hover:bg-orange-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Enviar
            </button>
        </div>
    </Form>
  )
}

export default TicketUpdate