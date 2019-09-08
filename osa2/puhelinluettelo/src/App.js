import React, { useState } from 'react'

const Filter = (props) => {
  return (<div>
    <p>Filter shown with <input value={props.inputValue} onChange={props.onChangeFunction} /></p>
  </div>
  )
}

const NewEntry = (props) => {
  return (
    <div>
      <h2>Add a new</h2>
      <form onSubmit={props.onSubmitFunction}>
        <div>
          name: <input value={props.nameInputValue} onChange={props.nameOnChangeFunction} />
        </div>
        <div>
          number: <input value={props.numberInputValue} onChange={props.numberOnChangeFunction} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const NumbersListing = (props) => {
  return (
    <div>
      <h2>Numbers</h2>
      {props.personsArr.map((x, i) => x.name.toLowerCase().includes(props.filterWord.toLowerCase()) || x.number.includes(props.filterWord.toLowerCase()) ? <p key={i}>{x.name} {x.number}</p> : console.log("Ei sisällä haettavaa sanaa"))}
    </div>
  )
}

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
      <Filter inputValue={newSearch} onChangeFunction={handleSearchChange} />
      <NewEntry onSubmitFunction={addName} nameInputValue={newName} nameOnChangeFunction={handleNameChange} numberInputValue={newNumber} numberOnChangeFunction={handleNumberChange} />
      <NumbersListing personsArr={persons} filterWord={newSearch} />
    </div>
  )

}

export default App