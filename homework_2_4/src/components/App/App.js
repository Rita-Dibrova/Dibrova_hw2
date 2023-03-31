import Children from '../children';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello, Childrens!
        </h1>
        <Children 
          myFirstChildren="Ivan" 
          mySecondChildren="Oleg" 
          myThirdChildren="Petro" 
        />
      </header>
   </div>
  );
}

export default App;
