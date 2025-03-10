import React, { useState } from 'react'
import notesContext from '../contexts/NotesContext'
import { useContext } from 'react'

const Addnote = () => {
  const context = useContext(notesContext)
  const addNote = context.addNote
  const [note,setNote] = useState({"title":"","description":"","tag":""})
  const handleClick = (e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    setNote({"title":"","description":"","tag":""})
  }
  const handleChange = (e)=>{
    setNote({...note, [e.target.id]:e.target.value})
  }

  return (
    <div>
      <h2>Add your notes</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" value={note.title} onChange={handleChange} minLength={3} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" rows={3} value={note.description} onChange={handleChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" value={note.tag} onChange={handleChange}/>
        </div>
        <button disabled={note.title.length<3 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  )
}

export default Addnote
