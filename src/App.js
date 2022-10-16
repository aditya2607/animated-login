import './App.css';

function App() {
  return (
      <div className="slider-thumb">
        <div className='form-group'>
          <h2 className='heading'>Login</h2>
          <div className='form-item'>
            <label>Username</label>
            <input type='text'></input>
          </div>
          <div className='form-item'>
            <label>Password</label>
            <input type='password'></input>
          </div>
          <button>Submit</button>
        </div>
      </div>
  );
}

export default App;
