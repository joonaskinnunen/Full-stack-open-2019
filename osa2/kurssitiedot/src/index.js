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
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      {courses.map((x, i) => <Course course={x} key={i} />)}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)