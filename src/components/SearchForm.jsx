import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const SearchForm = ({ handleOnChange, str }) => {
  return (
    <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>Buscar:{" "} </Form.Label>
            <Col sm={9}>
                <Form.Control
                    type="text"
                    name="search"
                    placeholder="Ingresa un texto para buscar"
                    onChange={handleOnChange}
                    value={str}
                />
            </Col>
        </Form.Group>
    </Form>
  )
}

export default SearchForm