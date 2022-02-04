import './App.css';
import { useState } from 'react'

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)

  function calc (e) {
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burn = weight / 10;
    const gramsLeft = grams - (burn * time)

    let promille = 0;
    if (gender === 'male') {
      promille = gramsLeft / (weight * 0.7);
    }
    else {
      promille = gramsLeft / (weight * 0.6);
    }

    if (promille < 0) {
      promille = 0;
    }
    setResult(promille);
  }

  return (
    <form onSubmit={calc}>
      <h3>Calculating blood alcohol level</h3>
      <div>
        <label>Weight:</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>

      <div>
        <label>Bottles:</label>
        <select value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div>
        <label>Time:</label>
        <select value={time} onChange={e => setTime(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div>
        <label>Gender</label>
        <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>

      <div>
        <output> {result.toFixed(2)}</output>
      </div>
    <button>calculate</button>

    </form>
  )
}

export default App;