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
      <Total parts={course.parts} />
    </div>
  )
}
const Header = ({course}) => {
  return (
    <>
    <h1>{course}</h1>
    </>
  )
}
const Content=({parts})=> {
  return (
    <div>
        <Part parts={parts[0]}></Part>
        <Part parts={parts[1]}></Part>
        <Part parts={parts[2]}></Part>    
    </div>
  )
}
const Part=({parts})=> {
  console.log(parts)
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
    <p>Number of exercises : {total}</p>
    </>
  )
}
export default App