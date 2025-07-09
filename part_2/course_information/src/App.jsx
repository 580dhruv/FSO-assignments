// app is the main commpoent 
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
      id: 2,
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
    <>
    <h1>Web development curriculam</h1>
      {
        courses.map((course,index)=><Course key={index} course= {course}/>)
      }
    </>
  )
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
    <h2>{name}</h2>
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
  let initialValue=0
  const total = parts.reduce(
    (accumulatePrev, currentObj) => {
    return accumulatePrev+currentObj.exercises
  },0)
  return (
    <>
    <b>total of {total} exercises</b>
    </>
  )
}
export default App
