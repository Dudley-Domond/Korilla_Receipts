import './App.css';
import receipts from './data.js'
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <h1>Welcome To Korilla BBQ Taco Truck</h1>
      <h2>Hungry?, Your At The Right Place</h2>
      <Main receipts={receipts} />

    </div>
  );
}

export default App;