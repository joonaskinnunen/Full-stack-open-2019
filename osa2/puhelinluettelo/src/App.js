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

  useEffect(() => {
    noteService
      .getAll()
      .then(allNotes => {
        setPersons(allNotes)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }

    if (persons.some(x => x.name === newName)) {
      if (window.confirm(`${nameObject.name} is already added to phonebook. Replace the old number with a new one?`)) {
        console.log("confirm works")
        const note = persons.find(n => n.name === newName)
        console.log(note)
        noteService
          .update(note.id, nameObject)
          .then(returnedName => {
            const changedNote = { ...note, number: newNumber }
            setPersons(persons.map(x => x.name !== newName ? x : changedNote))
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
        })

      console.log('clicked', event.target)
    }
  }

  const deleteName = (nameToDelete) => {
    if (window.confirm(`Delete ${nameToDelete.name} ?`)) {
      noteService
        .remove(nameToDelete.id)
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
      <FilteredResults inputValue={newSearch} onChangeFunction={handleSearchChange} />
      <NewEntry onSubmitFunction={addName} nameInputValue={newName} nameOnChangeFunction={handleNameChange} numberInputValue={newNumber} numberOnChangeFunction={handleNumberChange} />
      <NumbersListing personsArr={persons} filterWord={newSearch} deleteNameFunction={deleteName} />
    </div>
  )

}

export default App