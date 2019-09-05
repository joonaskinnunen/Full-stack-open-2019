import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)



const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(anecdotes.map(x => 0))
    console.log(votes)

    const length = anecdotes.length;
    const randomNumber = Math.floor(Math.random() * length);
    let bestAnecdoteLocation = 0;

    const addVote = () => {
        const copy = [...votes]
        copy[randomNumber] += 1
        setVotes(copy)
        setSelected(selected + 1)
    }

    const getTheBestAnecdote = () => {
        let mostVotes = 0;

        for(let i = 0; i < votes.length; i++) {
            if(votes[i] > mostVotes) {
                mostVotes = votes[i];
                bestAnecdoteLocation = i;
            }
        }
        return anecdotes[bestAnecdoteLocation];
    }




    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[randomNumber]}
            <br />
            <p>Has {votes[randomNumber]} votes</p>
            <br />
            <Button text="vote" handleClick={() => addVote()} />
            <Button text="next anecdote" handleClick={() => setSelected(selected + 1)} />
            <h1>Anecdote with the most votes</h1>
            <p>{getTheBestAnecdote()}</p>
            <p>Has {votes[bestAnecdoteLocation]} votes</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)

