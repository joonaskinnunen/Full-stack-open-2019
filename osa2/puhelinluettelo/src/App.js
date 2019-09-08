import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Matti Meikäläinen', number: '0505001234' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

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
      <p>Filter shown with <input value={newSearch} onChange={handleSearchChange} /></p>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((x, i) => x.name.toLowerCase().includes(newSearch.toLowerCase()) || x.number.includes(newSearch.toLowerCase()) ? <p key={i}>{x.name} {x.number}</p> : console.log("Ei sisällä haettavaa sanaa"))}
    </div>
  )

}

export default App