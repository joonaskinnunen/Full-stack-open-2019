import React, { useState } from 'react';
import Weather from './Weather'

const CountriesListing = (props) => {
    const [displayCountryInfo, toggleDisplayCountryInfo] = useState(false)
    const [countryToShow, setCountryToShow] = useState(false)

    let resultsArr = []
    props.countriesArr.map((x, i) => x.name.toLowerCase().includes(props.filterWord.toLowerCase()) ? resultsArr.push(x) : void 0)

    const OneResult = (props) => {
        return (
            <div>
                <h2>{props.country.name}</h2>
                <p>capital: {props.country.capital}</p>
                <p>population: {props.country.population}</p>
                <h3>Languages</h3>
                <ul>
                    {props.country.languages.map((x, i) => <li key={i}>{x.name}</li>)}
                </ul>
                {props.country.flag ? <img src={props.country.flag} height="150px" alt="flag" /> : console.log("No country flag")}
                {props.country.capital ? <Weather city={props.country.capital} /> : console.log("No capital city")}
            </div>
        )
    }

    const TooManyResults = () => {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
    const handleClick = (prop) => {
        if (prop === countryToShow) {
            toggleDisplayCountryInfo(!displayCountryInfo)
        } else {
            setCountryToShow(prop)
            toggleDisplayCountryInfo(true)
        }

        console.log(displayCountryInfo)

    }


    const Results = () => {
        return (
            <div>
                <ul>
                    {resultsArr.map((x, i) => <li key={i}>{x.name}<button onClick={() => handleClick(x)}>{countryToShow === x && displayCountryInfo === true ? <span>hide</span> : <span>show</span>}</button></li>)}
                </ul>
                {displayCountryInfo ? <OneResult country={countryToShow} /> : void 0}
            </div>
        )
    }

    return (
        <div>
            {resultsArr.length > 10 && props.filterWord.length > 0 ? <TooManyResults /> : console.log(void 0)}
            {resultsArr.length < 10 && resultsArr.length > 1 ? <Results /> : console.log(void 0)}
            {resultsArr.length === 1 && <OneResult country={resultsArr[0]} />}
            {resultsArr.length === 0 && props.filterWord.length > 0 ? <p>No results</p> : void 0}
        </div>

    )
}

export default CountriesListing