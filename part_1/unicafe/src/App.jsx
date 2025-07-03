import { useState } from 'react'
const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}
const Heading = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}
const Statistics= (props) => {
  console.log("props.states: ",props)
  return (
    <table>
        <StatisticLine text='good' value={props.states.good}/>
        <StatisticLine text='neutral' value={props.states.neutral}/>
        <StatisticLine text='bad' value={props.states.bad}/>
        <StatisticLine text='all' value={props.states.total}/>
        <StatisticLine text='average' value={props.states.avg/props.states.total}/>
        <StatisticLine text='positive' value={props.states.good/props.states.total*100+'%'}/>
    </table>
  )
}
const StatisticLine=({text,value})=> {
  return (
    <tr>
      <td>{text}</td><td> {value}</td> <br/>
    </tr>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAvg] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    setTotal(total+1)
    setAvg(avg+1)
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
    setTotal(total+1)
  }
  const handleBad = () => {
    setBad(bad+1)
    setTotal(total+1)
    setAvg(avg-1)
  }
  
  const stateList = {good,neutral,bad,total,avg}

  if(total!==0) {
    return (
      <div>
        <Heading title='give feedback'/>
        <Button onClick={handleGood} text='good'/>
        <Button onClick={handleNeutral} text="neutral"></Button>
        <Button onClick={handleBad} text="bad"></Button>
        <Heading title='statistics'/>
        <Statistics states={stateList}/>
      </div>
    )
  }
  return (
    <div>
      <Heading title='give feedback'/>
      <Button onClick={handleGood} text='good'/>
      <Button onClick={handleNeutral} text="neutral"></Button>
      <Button onClick={handleBad} text="bad"></Button>
      <Heading title='statistics'/>
      No feedback given
    </div>
  )
}

export default App