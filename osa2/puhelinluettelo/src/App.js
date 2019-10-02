import React, { useState, useEffect } from 'react'
import FilteredResults from './components/FilteredResults'
import NumbersListing from './components/NumbersListing'
import NewEntry from './components/NewEntry'
import noteService from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([
    { name: '', number: '' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [notificationMessage, setNewNotificationMessage] = useState(null)
  const [errorMessage, setNewErrorMessage] = useState(null)

  useEffect(() => {
    noteService
      .getAll()
      .then(allNotes => {
        setPersons(allNotes)
      })
  }, [])

  const Notification = ({ message }) => {
    const notificationStyle = {
      border: "2px solid green",
      color: "green",
      backgroundColor: "#d3d3d3",
      padding: "10px",
      borderRadius: "5px",
      display: "inline-block",
      fontWeight: "bold"
    }
    if (message === null) {
      return null
    }

    return (
      <div className="notificationDiv" style={notificationStyle}>
        {message}
      </div>
    )
  }

  const Error = ({ message }) => {
    const notificationStyle = {
      border: "2px solid red",
      color: "red",
      backgroundColor: "#d3d3d3",
      padding: "10px",
      borderRadius: "5px",
      display: "inline-block",
      fontWeight: "bold"
    }
    if (message === null) {
      return null
    }

    return (
      <div className="errorDiv" style={notificationStyle}>
        {message}
      </div>

    )
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }

    if (nameObject.name === "") {
      setNewErrorMessage(`Add missing name`)
      setTimeout(() => {
        setNewErrorMessage(null)
      }, 3000)
    } else if (nameObject.number === "") {
      setNewErrorMessage(`Add missing number`)
      setTimeout(() => {
        setNewErrorMessage(null)
      }, 3000)
    }

    else if (persons.some(x => x.name === newName)) {
      if (window.confirm(`${nameObject.name} is already added to phonebook. Replace the old number with a new one?`)) {
        console.log("confirm works")
        const note = persons.find(n => n.name === newName)
        console.log(note)
        noteService
          .update(note.id, nameObject)
          .then(returnedName => {
            const changedNote = { ...note, number: newNumber }
            setPersons(persons.map(x => x.name !== newName ? x : changedNote))
            setNewNotificationMessage(`Updated ${returnedName.name}`)
            setTimeout(() => {
              setNewNotificationMessage(null)
            }, 5000)

            console.log(returnedName)
          })
      }
    } else {

      noteService
        .create(nameObject)
        .then(returnedName => {
          setPersons(persons.concat(returnedName))
          setNewName('')
          setNewNumber('')
          setNewNotificationMessage(`Added ${returnedName.name}`)
          setTimeout(() => {
            setNewNotificationMessage(null)
          }, 5000)
        })

      console.log('clicked', event.target)
    }
  }

  const deleteName = (nameToDelete) => {
    if (window.confirm(`Delete ${nameToDelete.name} ?`)) {
      noteService
        .remove(nameToDelete.id)
        .catch(error => {
          setNewErrorMessage(`Name ${nameToDelete.name} was already deleted from server`)
          setTimeout(() => {
            setNewErrorMessage(null)
          }, 5000)
        })
        .then(returnedName => {
          setPersons(persons.filter(x => x.id !== nameToDelete.id))
          console.log(returnedName)
        })
    }


  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationMessage} />
      <Error message={errorMessage} />
      <FilteredResults inputValue={newSearch} onChangeFunction={handleSearchChange} />
      <NewEntry onSubmitFunction={addName} nameInputValue={newName} nameOnChangeFunction={handleNameChange} numberInputValue={newNumber} numberOnChangeFunction={handleNumberChange} />
      <NumbersListing personsArr={persons} filterWord={newSearch} deleteNameFunction={deleteName} />
    </div>
  )

}

export default App