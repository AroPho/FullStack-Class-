import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content ex1={exercises1} ex2={exercises2} ex3={exercises3} p1={part1} p2={part2} p3={part3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

const Header = (input) => {
  return (
    <h1>
      {input.course}
    </h1>
  )
}

const Content = (exercises) => {
  return (
    <div>
      {/* <p>
        {exercises.p1} {exercises.ex1}
      </p>
      <p>
        {exercises.p2} {exercises.ex2}
      </p>
      <p>
        {exercises.p3} {exercises.ex3} */}
    {/* </p> */}
      <Part part={exercises.p1} exercises ={exercises.ex1}/>
      <Part part={exercises.p2} exercises ={exercises.ex2}/>
      <Part part={exercises.p3} exercises ={exercises.ex3}/>

    </div>
  )
}

const Total = (ex) => {
  return (
    <div>
      <p>Number of exercises {ex.exercises1 + ex.exercises2 + ex.exercises3}</p>
    </div>
  )
}

const Part = (string) => {
  return (
    <div>
      <p>{string.part} {string.exercises}</p>
    </div>
  )
}

export default App