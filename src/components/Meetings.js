import React from 'react'
import { Alert, Col, Row } from 'react-bootstrap'

 const Meetings = ({meetingsData}) => {
  return (




    <Row className="justify-content-center my-2">
        <Col sm='8'>
            <div className='rectangle'>
                {
                    meetingsData.length ? (meetingsData.map((item)=>{
                        return(
                            <div key={item.id} className="d-flex border-bottom py-2">
                                <div >
                                    <img src="person.jpg" className="img-avatar"/>
                                </div>
                                <div className="pt-1">
                                    <h6 className="d-inline ">{item.Name}</h6>
                                    <p > {item.Time}</p>
                                </div>
                            </div> 
                            )
                            })): <Alert className="text-center" variant='danger'>No Meetings Today!</Alert>
                        }


            </div>
        </Col>
    </Row>
  )
}


export default Meetings