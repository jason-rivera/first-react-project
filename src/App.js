import './App.css';
import Title from './Title.js';
import Card from './Card.js';


function App() {
  return (
    <div className="App">
        <Title />
                
        <div className="card-container">
            <Card name="Hiro" description="Wing Zero" url="https://static.wikia.nocookie.net/gundam/images/8/89/Wing_1.jpg"/>
            <Card name="Duo" description="Death Scythe" url="https://static.wikia.nocookie.net/gundam/images/3/30/Wing_2.jpg"/>
            <Card name="Trowa" description="Heavy Arms" url="https://static.wikia.nocookie.net/gundam/images/0/0b/Wing_3.jpg"/>
            <Card name="Quatre" description="??" url="https://static.wikia.nocookie.net/gundam/images/4/42/Wing_4.jpg"/>
            <Card name="Wufei" description="Shen Long" url="https://static.wikia.nocookie.net/gundam/images/6/60/Wing_5.jpg"/>
            <Card name="Zechs" description="Epyon" url="https://static.wikia.nocookie.net/gundam/images/a/a2/Wing_6.jpg"/>
            <Card name="Lady Une" description="None" url="https://static.wikia.nocookie.net/gundam/images/8/8a/Wing_8.jpg"/>
        </div>
        
    </div>
  );
}

export default App;
