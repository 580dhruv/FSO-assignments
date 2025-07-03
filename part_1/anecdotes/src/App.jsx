import { useState } from 'react'

const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}
const Heading = ({text}) => {
  return (
    <h3>{text}</h3>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  function getRandomNo(max) {
    return Math.round(Math.random()*max)
  }
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] =  useState({0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0 })
  const handleNextAnecdote = ()=> {
    let randomNo = getRandomNo(anecdotes.length-1)
    setSelected(randomNo)
  }
  const handleVotes = () => {
    let copy ={...votes}
    copy[selected] = copy[selected]+1
    setVotes(copy)
  }
  let maxkey=0
  let maxvalue=0
  function findMax() {
    for (let key in votes) {
      if (maxvalue<=votes[key]) {
        maxkey = key
        maxvalue = votes[key]
      }
    }
  }
  findMax()
  return (
    <div>
      <Heading text="Anecdote of the Day"/>
      {anecdotes[selected]}<br/>
      has {votes[selected]} votes<br/>
      <Button onClick={handleVotes} text='vote'/>
      <Button onClick={handleNextAnecdote} text='next anecdote'/>
      <Heading text="Anecdote with most votes"/>
      {anecdotes[maxkey]}<br/>
      has {votes[maxkey]} votes<br/>
    </div>
  )
}
export default App