import './App.css';



function App() {


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
          <input name="food" id="food"/>
          <input name="submit" type="submit" id="submit" />
        </div>
        <div className='checkboxes'>

          <input type="checkbox" name="go" /><p>Go</p>
          <input type="checkbox" name="grow" /><p>Grow</p>
          <input type="checkbox" name="glow" /><p>Glow</p>
          <input type="checkbox" name="N/A" /><p>N/A</p>

        </div>
        <div className='tracker'>

        <div className='food'>
            <h3>Food</h3>
            <h1>hello</h1>
          </div>

        <div className='foodType'>
            <h3>Food Type</h3>
          </div>


        </div>
     
        </div>
        </div>
      
        
        
        </div>
    


  );
}

export default App;
