import React from 'react';

const CountriesListing = (props) => {
    let resultsArr = []
    props.countriesArr.map((x, i) => x.name.toLowerCase().includes(props.filterWord.toLowerCase()) ? resultsArr.push(x) : console.log("Not match"))

    const OneResult = () => {
        const result = resultsArr[0]
        return (
            <div>
                <h2>{resultsArr[0].name}</h2>
                <p>capital: {result.capital}</p>
                <p>population: {result.population}</p>
                <h3>Languages</h3>
                <ul>
                    {result.languages.map((x) => <li>{x.name}</li>)}
                </ul>
                <img src={result.flag} height="150px" alt="flag" />
            </div>
        )
    }

    const TooManyResults = () => {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

    const Results = () => {
        return (
            <ul>
                {resultsArr.map((x, i) => <li key={i}>{x.name}</li>)}
            </ul>
        )
    }

    return (
        <div>
            {resultsArr.length > 10 && props.filterWord.length > 0 ? <TooManyResults /> : console.log(void 0)}
            {resultsArr.length < 10 && resultsArr.length > 1 ? <Results /> : console.log(void 0)}
            {resultsArr.length === 1 && <OneResult />}
            {resultsArr.length === 0 && props.filterWord.length > 0 ? <p>No results</p> : void 0}
        </div>

    )
}

export default CountriesListing