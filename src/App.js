import './App.css';
import Title from './Title.js';
import Card from './Card.js';
import Search from './Search.js';

function App() {
  return (
    <div className="App">
        <Title />
        
        <div className="search-container">
            <Search />
        </div>
        
        <div className="card-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        
    </div>
  );
}

export default App;
