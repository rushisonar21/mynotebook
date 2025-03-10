import React from 'react'
import { useContext } from 'react'
import notesContext from '../contexts/NotesContext'

const Noteitem = (props) => {
  const {note, updateNote} = props
  const context = useContext(notesContext)
  const deleteNote = context.deleteNote
  const handleDelete = () => {
    deleteNote(note._id)
  }
  const handleEdit = () => {
    updateNote(note)
  }

  return (
    <>
    <div className='col md-3'>
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <span className="badge text-bg-info">{note.tag}</span>
          <div className="d-flex my-2">
            <i className="fa-solid fa-trash" onClick={handleDelete}></i>
            <i className="mx-3 fa-solid fa-pen-to-square" onClick={handleEdit}></i>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Noteitem
