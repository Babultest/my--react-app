
import './App.css';
import Header from './component/Header';
import Test from './test';
import Game from './component/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Test />
          Learn React
          <h1> Hello</h1>
      </header>
      <Game />
    </div>
    
  );
}

export default App;
