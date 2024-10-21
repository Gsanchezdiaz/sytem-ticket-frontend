import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const BreadcrumbPage = ({page}) => {
  return (
    <Breadcrumb className='text-xs sm:hidden'>
      <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default BreadcrumbPage