import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';


    const AddMeetings = ({addTheMeetings}) => {


    const [Name , setName] = useState();
    const [Time , setTime] = useState();



   const handleSubmit = (e)=>{
    e.preventDefault();


    // Validate Name and Time fields
    if (!Name || !Time || Name.trim() === '' || Time.trim() === '') {
        return; // If any field is empty or undefined, prevent form submission
      }


       //Create A New Meeting Object 
   const newMeeting ={
    Name :Name ,
    Time : Time ,
    id:Date.now()
   }


   addTheMeetings(newMeeting) ; 




    // Reset form fields
    setName('');
    setTime('');
    
   } 






  return (
    <Row className="justify-content-center my-2">
        <Col sm='8'>
            <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={Name} onChange={(e)=> setName(e.target.value)} />
            <Form.Text className="text-muted">
                HERE THE NAME OF THE PERSON .
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Label>Time </Form.Label>
            <Form.Control type="text" placeholder="Time"  value={Time} onChange={(e)=> setTime(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit"  disabled={!Name || !Time || Name.trim() === '' || Time.trim() === ''}>
            Submit
            </Button>
        </Form>
    </Col>
  </Row>
  )
}


export default AddMeetings