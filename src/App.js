import {  useState } from 'react';
import './App.css';

import Title from './components/Title'
import Modal from './components/Modal';
import NewEventForm from './components/NewEventForm';



  

function App() {
  const [showModal, setShowModal] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  } 
  const titulo = "To do List46"

  const handleClose = () => {
    setShowModal(false)
  }
  const handleShowForm = () => {
    setShowModal(true)
  }
  return (
    <div className='main-container'>
    <div>
      
      <Title titleProp={titulo}/>
    </div>
    <div className='event-container'>
      {events.map((event, index) => (
        <div key={event.id}>
          <h2 className='event-title'>{index +1}* {event.title}</h2>
          <button className='delete-event' onClick={() => {handleClick(event.id)}}>Delete event</button>
        </div>
      ))}
      {showModal && <Modal handleClose={handleClose}>
      <NewEventForm addEvent={addEvent}/>
      </Modal>}
    </div>
        <button className='put-event' onClick={handleShowForm}>Cargar una tarea</button>
    </div>
  )
}

export default App;
