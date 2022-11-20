import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [maxVal, setMaxVal] = useState(0)

  const nextAnecdote = () => {
    const t = Math.floor(Math.random() * 7)
    setSelected(t)
  }

  const [points, setPoints] = useState([0,0,0,0,0,0,0])

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    let current = 0
    let location = 0
    for (let i=0; i < 7; i++) {
      if (copy[i] > current) {
        current = copy[i]
        location = i
      }
    }
    setMaxVal(location)
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      <p>has {points[selected]} votes</p>
      <button onClick={() => vote()}>vote</button> 
      <button onClick={() => nextAnecdote()}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxVal]}</p>
      <p>has {points[maxVal]} votes</p>
    </div>
  )
}

export default App