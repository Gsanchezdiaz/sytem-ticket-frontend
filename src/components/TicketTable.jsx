import React from 'react'

import { Table } from 'react-bootstrap'

const TicketTable = ({ data_tickets }) => {
  if (!data_tickets.Length) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Asunto</th>
            <th>Estado</th>
            <th>Fecha Registro</th>
          </tr>
        </thead>
        <tbody>
          {data_tickets.length ? data_tickets.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.asunto}</td>
              <td>{row.estado}</td>
              <td>{row.fechaRegistro}</td>
            </tr>
          )) : (
            <tr>
              <td colSpan={4} className='text-center'>No tenemos tickets disponibles..</td>
            </tr>
          )}

        </tbody>
      </Table>
    )
  }
}

export default TicketTable