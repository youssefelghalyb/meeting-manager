import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

 const Buttons = ( {viewData , deletData}) => {
  return (
    <Row className="justify-content-center">
    <Col sm='8' className="d-flex justify-content-between p-2">
      <Button onClick={viewData} >Show All</Button>
      <Button  onClick={deletData}>Delete All</Button>
    </Col>
  </Row>
  )
}


export default Buttons