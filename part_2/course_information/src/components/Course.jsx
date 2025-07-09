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

export default Course