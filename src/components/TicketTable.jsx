import React from 'react'
import { Link } from 'react-router-dom';
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
            <th>Ultima Actualizacion</th>
          </tr>
        </thead>
        <tbody>
          {data_tickets.length ? data_tickets.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td><Link to={`/home/ticket/${row.id}`}>{row.asunto}</Link></td>
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