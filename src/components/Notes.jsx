import React, { useState,useRef } from 'react'
import { useContext, useEffect } from 'react'
import notesContext from '../contexts/NotesContext'
import Noteitem from './Noteitem'
import Addnote from './Addnote'


const Notes = () => {
    const context = useContext(notesContext)
    const { notes, fetchNote, editNote} = context
    const [note,setNote] = useState({"id":"","title":"","description":"","tag":""})
    useEffect(() => {
        fetchNote()
    }, [])
    const handleChange = (e)=>{
        setNote({...note, [e.target.id]:e.target.value})
    }
    const ref = useRef(null)
    const handleClick = (e)=>{
        editNote(note._id,note.title,note.description,note.tag);
    }
    const updateNote = (currentNote)=>{
        ref.current.click()
        setNote(currentNote)
    }
    return (
        <>
            <Addnote />
            <button type="button" className="d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
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
                                    <input type="text" className="form-control" id="tag" value={note.tag} onChange={handleChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.title.length<3 || note.description.length<5} type="button" className="btn btn-primary" data-bs-dismiss="modal"onClick={handleClick}>Update Changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Your notes</h2>
            <div className='container'>
                {notes.length===0 && "No notes to display"}
            </div>
            <div className='row my-3'>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} updateNote={updateNote}></Noteitem>
                })}
            </div>
        </>
    )
}

export default Notes
