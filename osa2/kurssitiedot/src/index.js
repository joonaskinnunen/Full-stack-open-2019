import React from 'react'
import ReactDOM from 'react-dom'

const Header = props =>
  <h1>{props.course}</h1>

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Total = props => {
  const exercisesArr = props.parts.map(x => x.exercises)
  const total = exercisesArr.reduce((accumulator, currentValue) => accumulator + currentValue)
  return <p>yhteensä {total} tehtävää</p>
}
const Content = props => (
  <div>
    {props.parts.map((x, i) => <Part part={x} key={i} />)}
    <Total parts={props.parts} />
  </div>
)

const Course = props => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)