import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodButton = () => {
    setGood(good + 1)
  }

  const handleNeutralButton = () =>{
    setNeutral(neutral + 1)
  }

  const handleBadButton = () =>{
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <button onClick={handleGoodButton}>good</button>
        <button onClick={handleNeutralButton}>neutral</button>
        <button onClick={handleBadButton}>bad</button>
      </div>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App