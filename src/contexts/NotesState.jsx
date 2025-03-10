import { useContext, useState } from "react";
import notesContext from "./NotesContext";
import alertContext from "./alertContext";

const NotesState = (props) => {
  const base_url = "http://localhost:3000"
  const [notes, setNotes] = useState([])
  const alert_context = useContext(alertContext)
  const updateAlert = alert_context.updateAlert
  const logged_user = localStorage.getItem('token')
  const addNote = async (title, description, tag) => {
    try {
      let response = await fetch(`${base_url}/api/notes/addNote`, {
        method: "POST",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",
          "auth_token": logged_user
        },
        body: JSON.stringify({
          "title": title,
          "description": description,
          "tag": tag
        })
      });
      if (response.status === 200) {
        let new_note = await response.json()
        setNotes(notes.concat(new_note))
        updateAlert("note added sucessfully","success")
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  const editNote = async (id, title, description, tag) => {
    try {
      let response = await fetch(`${base_url}/api/notes/updateNote/${id}`, {
        method: "PUT",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",
          "auth_token": logged_user
        },
        body: JSON.stringify({
          "title": title,
          "description": description,
          "tag": tag
        })
      });
      if (response.status === 200) {
        let update_note = JSON.parse(JSON.stringify(notes))
        for(let element of update_note){
          if(element._id==id){
            element.title = title,
            element.description = description,
            element.tag = tag
            break;
          }
        }
        setNotes(update_note)
        updateAlert("note updated sucessfully","success")
      }
      else if(response.status == 401){
        updateAlert("Unauthorized","danger")
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  const deleteNote = async (id) => {
    try {
      let response = await fetch(`${base_url}/api/notes/deleteNote/${id}`, {
        method: "DELETE",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",
          "auth_token": logged_user
        }
      });
      if (response.status === 200) {
        const newNotes = notes.filter((note) => {
          return note._id !== id
        })
        setNotes(newNotes)
        updateAlert("note deleted sucessfully","success")
      }
      else if(response.status == 401){
        updateAlert("Unauthorized","danger")
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  const fetchNote = async () => {
    try {
      let response = await fetch(`${base_url}/api/notes/fetchAllNotes`, {
        method: "GET",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",
          "auth_token": logged_user
        }
      });
      let notes_data = await response.json()
      setNotes(notes_data)
    }
    catch (error) {
      console.log(error)
      setNotes([])
    }
  }

  return (
    <notesContext.Provider value={{ notes, addNote, editNote, deleteNote, fetchNote }}>
      {props.children}
    </notesContext.Provider>
  )
}

export default NotesState;