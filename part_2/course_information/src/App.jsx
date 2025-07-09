// app is the main commpoent 
const App = () => {
  const course = {
    id: 1,
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
      },
    ]
  }
  return <Course course={course} />
}
const Course = ({course}) => {
  return (
    <>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}
const Header = ({name}) => {
  return (
    <>
    <h1>{name}</h1>
    </>
  )
}
const Content=({parts})=> {
  return (
    <div>
        {
          parts.map((part,index)=><Part key={index} parts={parts[index]}></Part>)
        }
    </div>
  )
}
const Part=({parts})=> {
  return (
    <>
    <p>{parts.name} {parts.exercises}</p>
    </>
  )
}
const Total=({parts})=>{
  let total=0
  parts.forEach(element => {
    total +=element.exercises
  })
  return (
    <>
    <b>total of {total} exercises</b>
    </>
  )
}
export default App
