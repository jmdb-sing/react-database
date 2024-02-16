import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');
  const [checkedValues, setCheckedValues] = useState([]);
  const [foodEntries, setFoodEntries] = useState([]);
  const [checkboxState, setCheckboxState] = useState({
    Go: false,
    Grow: false,
    Glow: false,
    'N/A': false,
  });

  function handleChange(event) {
    const { value, checked } = event.target;
    setCheckboxState((prev) => ({ ...prev, [value]: checked }));

    if (checked) {
      setCheckedValues((prev) => [...prev, value]);
    } else {
      setCheckedValues((prev) => prev.filter((skill) => skill !== value));
    }
  }

  function getData(event) {
    setData(event.target.value);
  }

  function handleFoodSubmit() {
    if (data.trim() !== '' && checkedValues.length > 0) {
      const existingEntryIndex = foodEntries.findIndex(
        (entry) => entry.name === data.trim()
      );

      if (existingEntryIndex !== -1) {
        const updatedEntry = {
          ...foodEntries[existingEntryIndex],
          type: checkedValues.join(', '),
        };
        setFoodEntries((prev) => [
          updatedEntry,
          ...prev.slice(0, existingEntryIndex),
          ...prev.slice(existingEntryIndex + 1),
        ]);
      } else {
        const newEntry = {
          name: data.trim(),
          type: checkedValues.join(', '),
        };
        setFoodEntries((prev) => [newEntry, ...prev]);
      }

      setCheckedValues([]);
      setData('');
      setCheckboxState({
        Go: false,
        Grow: false,
        Glow: false,
        'N/A': false,
      });
    }
  }

  function handleReset() {
    setFoodEntries([]);
    setCheckedValues([]);
    setData('');
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
            <input name="food" id="food" onChange={getData} maxLength={24} value={data} />
            <input name="reset" type="button" value="Reset" id="reset" onClick={handleReset} />
            <input name="submit" type="button" value="Submit" id="submit" onClick={handleFoodSubmit} />
          </div>
          <div className='checkboxes'>
            <input type='checkbox'value='Go'onChange={handleChange}checked={checkboxState.Go} />
              <p>Go</p>
            <input type='checkbox' value='Grow' onChange={handleChange} checked={checkboxState.Grow} />
              <p>Grow</p>
            <input type='checkbox' value='Glow' onChange={handleChange} checked={checkboxState.Glow} />
              <p>Glow</p>
        <input type='checkbox' value='N/A' onChange={handleChange} checked={checkboxState['N/A']} />
              <p>N/A</p>
          </div>
          <div className='tracker'>
            <div className='foodNames'>
              <h3>Food Names</h3>
              {foodEntries.map((entry, index) => (
                <p key={index}>{entry.name}</p>
              ))}
            </div>
            <div className='foodType'>
              <h3>Food Type</h3>
              {foodEntries.map((entry, index) => (
                <p key={index}>{entry.type}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

              }

export default App;
