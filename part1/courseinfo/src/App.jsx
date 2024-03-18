import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <>
      {console.log('Part - ', props)}
      {props.name} {props.exercises} <br />
    </>
  )
}

const Content = (props) => {
  return (
    <>
      {console.log('Content - ', props)}
      <Part name={props.name} exercises={props.exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      Number of Exercises {props.exercises}
    </>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content name={part1.name} exercises={part1.exercises} /> 
      <Content name={part2.name} exercises={part2.exercises} /> 
      <Content name={part3.name} exercises={part3.exercises} /> 
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App
