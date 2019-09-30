import React, { useState, useEffect } from 'react';
import FilterResults from './components/FilterResults';
import axios from 'axios';
import CountriesListing from './components/CountriesListing';

const App = () => {
  const [newSearch, setNewSearch] = useState('')
  const [countries, setCountries] = useState([])


  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)

      })
  }, [])
  return (
    <div>
      <h1>Find countries</h1><FilterResults inputValue={newSearch} onChangeFunction={handleSearchChange}></FilterResults>
      <CountriesListing countriesArr={countries} filterWord={newSearch} />
    </div>
  )
}

export default App