import './styles/index.css'
import background from "./images/background-stars.svg"

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <h1>Testing</h1>
    </div>
  );
}

export default App;
