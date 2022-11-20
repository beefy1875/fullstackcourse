import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.name}
  </button>
)

const StatisticLine = (props) => (
    <div>{props.text} {props.value}</div>
  )


const Statistics = (props) => {
  const good=props.good
  const neutral=props.neutral
  const bad=props.bad
  const total= good+bad+neutral
  const avg = (good - bad) / total
  const pos = good/total*100

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="total" value={total}/>
      <StatisticLine text="average" value={avg}/>
      <StatisticLine text="positive" value={pos}/>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handleClick={() => addGood()}/>
      <Button name="neutral" handleClick={() => addNeutral()}/>
      <Button name="bad" handleClick={() => addBad()}/>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App