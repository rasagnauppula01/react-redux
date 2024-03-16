import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, resetAction } from './redux/actions';

function App() {
  const {count}=useSelector(state=>state)
  const dispatch=useDispatch()
  const handleClick=()=>{

    dispatch(incrementAction())
  };

  const handleDecrementClick=()=>{
    dispatch(decrementAction());
  };

  const handleResetClick = () => {
    dispatch(resetAction());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {count}
        </p>
        <button onClick={handleClick}>Increment counter</button> <br></br>
        <button onClick={handleDecrementClick}>Decrement counter</button> <br></br>
        <button onClick={handleResetClick}>Reset counter</button>
      </header>
    </div>
  );
}

export default App;
