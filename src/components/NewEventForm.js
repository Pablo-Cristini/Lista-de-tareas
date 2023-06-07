import { useRef } from 'react'
import './Form.css'

export default function NewEventForm({addEvent}){


    const title = useRef()
    const date = useRef()


    const resetForm = () => {
        title.current.value = ""
        date.current.value = ""
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const event = {
            title: title.current.value,
            date: date.current.value,
            id: Math.floor(Math.random() * 10000)
        }
        addEvent(event)
        resetForm()

    }

    return (
        <form className="event-Form" onSubmit={handleSubmit}>
            <label>
                <span className="event-title">Titulo de la tarea</span>
                <input type="text" id="title" className="input-title"
                ref={title}
                ></input>
            </label>
            <label>
                <span className="event-date">Fecha </span>
                <input type="date" className="input-date"
                ref={date}
                ></input>
            </label>
            <button type='submit' className="input-date">Cargar</button>
            <button className="reset-form" onClick={resetForm}>Reset</button>
        </form>
    )
}