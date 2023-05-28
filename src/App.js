import React, { useState } from "react";

//Data 
import { meetingsData } from "./data";

//Meetings Count Comp 
import MeetingsCount from "./components/meetingsCount";

//Meetings 
import Meetings from "./components/Meetings";

//Buttons
import Buttons from "./components/Buttons";

//Add meetings 

import AddMeetings from "./components/AddMeetings";
import AddMeeting from "./components/AddMeetings";


import { Container } from "react-bootstrap";


function App() {

  const [meetings , setmeetings] = useState(meetingsData);




  //adding meetings 

  const addTheMeeting = (newMeeting) =>{
    setmeetings([...meetings , newMeeting])
  } 



    const deletData = ()=>{
    setmeetings([])
  }

  const viewData = ()=>{
    setmeetings(meetingsData)
  };

  return (
    <div className="colorBody">
     <Container className='py-4'>

      <MeetingsCount meetingsData={meetings}/>

      <Meetings meetingsData={meetings}/>

      <Buttons  viewData={viewData} deletData={deletData}/>

      <AddMeetings addTheMeetings={addTheMeeting} />

     </Container>
    </div>
  );
}

export default App;
