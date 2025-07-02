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
const Statistics= ({stat_type,stats})=> {
  return (
    <>
    {stat_type} {stats} <br/>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good+1)
  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad+1)

  return (
    <div>
      <Heading title='give feedback'/>
      <Button onClick={handleGood} text='good'/>
      <Button onClick={handleNeutral} text="neutral"></Button>
      <Button onClick={handleBad} text="bad"></Button>
      <Heading title='statistics'/>
      <Statistics stat_type='good' stats={good}/>
      <Statistics stat_type='neutral' stats={neutral}/>
      <Statistics stat_type='bad' stats={bad}/>
    </div>
  )
}

export default App