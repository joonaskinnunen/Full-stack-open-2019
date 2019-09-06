import React from 'react'

const Header = props =>
    <h2>{props.course}</h2>

const Part = props =>
    <p>{props.part.name} {props.part.exercises}</p>

const Total = props => {
    const exercisesArr = props.parts.map(x => x.exercises)
    const total = exercisesArr.reduce((accumulator, currentValue) => accumulator + currentValue)
    return <p>Total of {total} exercises</p>
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
export default Course