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
    let average = 0;
    let goodPercentage = 0;
    if(total > 0) {
        average = sum / total
        goodPercentage = good / total * 100;
    }


    return (
        <div>
            <Header />
            <Button handleClick={incrementGood} text="good" />
            <Button handleClick={incrementNeutral} text="neutral" />
            <Button handleClick={incrementBad} text="bad" />
            <h1>Statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {good + neutral + bad}</p>
            <p>average {average}</p>
            <p>positive {goodPercentage} %</p>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)