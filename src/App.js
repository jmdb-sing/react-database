import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');
  const [print, setPrint] = useState(false);
  const [check, setCheck] = useState([]);
  const [checkedValues, setCheckedValues] = useState([]);

  function handleChange(event) {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedValues(prev => [...prev, value]);
    } else {
      setCheckedValues(prev => prev.filter(skill => skill !== value));
    }
  }

  function getData(event) {
    setData(event.target.value);
    setPrint(false);
  }

  return (
    <div>
      <div className='background'></div>
      <div className='mainpage'>
        <div>
          <div className='header'>
            <h1>Go, Grow, and Glow Tracker</h1>
          </div>
          <div className='text'>
            <p>Welcome to the Go, Grow, and Glow Tracker! In this website, you will be able to track all the food you eat and list them according to their type of food (Go, Grow, or Glow).</p>
          </div>
          <div className='input'>
            <input name="food" id="food" onChange={getData} maxLength={24} />
            <input name="submit" type="button" value="Submit" id="submit" onClick={() => setPrint(true)} />
          </div>
          <div className='checkboxes'>
            <input type="checkbox" value="Go" onChange={handleChange} /><p>Go</p>
            <input type="checkbox" value="Grow" onChange={handleChange} /><p>Grow</p>
            <input type="checkbox" value="Glow" onChange={handleChange} /><p>Glow</p>
            <input type="checkbox" value="N/A" onChange={handleChange} /><p>N/A</p>
          </div>
          <div className='tracker'>
            <div className='food'>
              <h3>Food</h3>
              {print && <p>{data}</p>}
            </div>
            <div className='foodType'>
              <h3>Food Type</h3>
              <p>{checkedValues.join(" , ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
