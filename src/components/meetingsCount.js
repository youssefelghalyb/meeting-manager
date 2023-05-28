import React from 'react'
import { Col, Row } from 'react-bootstrap'

 const MeetingsCount = ({meetingsData}) => {
  return (
    <Row className="justify-content-center">
    <Col sm='8'>
      You Have { meetingsData.length } Meetings Today 
    </Col>
  </Row>
  )
}

export default MeetingsCount
