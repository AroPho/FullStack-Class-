import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (parts) => {
  console.log(parts)
  return (
    <div>
      <Part part={parts.parts[0]} />
      <Part part={parts.parts[1]} />
      <Part part={parts.parts[2]} />
    </div>
  )
}

const Total = (parts) => {
  return (
    <div>
      <p>Number of exercises {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}</p>
    </div>
  )
}

const Part = (part) => {
  console.log(part)
  return (
    <div>
      <p>{part.part.name} {part.part.exercises}</p>
    </div>
  )
}

export default App