import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity="Kyiv"/>
     <footer><a href="https://github.com/polllyann/new-react-weather-project" target="_blank" rel="noreferrer">Open-sourse code</a> by <a href="https://anna-p.netlify.app/" target="_blank" rel="noreferrer">Anna P.</a></footer>
    </div>
    </div>
  );
}

export default App;
