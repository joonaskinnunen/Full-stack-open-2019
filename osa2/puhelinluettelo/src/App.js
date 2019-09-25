import React, { useState, useEffect } from 'react'
import FilteredResults from './components/FilteredResults'
import NumbersListing from './components/NumbersListing'
import NewEntry from './components/NewEntry'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Matti Meikäläinen', number: '0505001234' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (!persons.some(person => person.name === newName)) {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }

    console.log('clicked', event.target)
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
      <NumbersListing personsArr={persons} filterWord={newSearch} />
    </div>
  )

}

export default App