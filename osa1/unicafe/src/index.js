import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
    return (
        <div>
            <h1>Give feedback</h1>
        </div>
    )
}
// painike elementti
const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistics = (props) => {
    if (props.all > 0) {
        return (<div>
            <h1>Statistics</h1>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {props.all}</p>
            <p>average {props.average}</p>
            <p>positive {props.positive} %</p>
        </div>
        )
    }
    return (<div><h1>Statistics</h1><p>No feedback given</p></div>)
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    // kasvata hyvien palautteiden määrää yhdellä
    const incrementGood = () => {
        setGood(good + 1)
    }

    // kasvata neutraalien palautteiden määrää yhdellä
    const incrementNeutral = () => {
        setNeutral(neutral + 1)
    }

    // kasvata huonojen palautteiden määrää yhdellä
    const incrementBad = () => {
        setBad(bad + 1)
    }

    const total = good + neutral + bad;
    const sum = good * 1 + bad * -1
    const average = sum / total
    const goodPercentage = good / total * 100;

    return (
        <div>
            <Header />
            <Button handleClick={incrementGood} text="good" />
            <Button handleClick={incrementNeutral} text="neutral" />
            <Button handleClick={incrementBad} text="bad" />
            <Statistics good={good} neutral={neutral} bad={bad} all={total} average={average} positive={goodPercentage} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)