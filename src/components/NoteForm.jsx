import { useState } from 'react'
import PropTypes from 'prop-types'

const NoteForm = ({ handleSubmit }) => {
  const [newNote, setNewNote] = useState('')
  const handleChange = (event) => setNewNote(event.target.value)

  const addNote = (event) => {
    event.preventDefault()
    handleSubmit({
      content: newNote,
      important: true,
    })

    setNewNote('')
  }

  return (
    <div className="formDiv">
      <h2>Create a new note</h2>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleChange}
          placeholder="write note content here"
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

NoteForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}
export default NoteForm
