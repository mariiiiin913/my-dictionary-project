import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        </header>
      <main>
        <Dictionary defaultKeyword="dictionary"/>
      </main>
      <footer>
         <p className='myName'>Coded by <a href="https://www.linkedin.com/in/marin-rei-70260690/" target="_blank" rel="noreferrer" className="profile-link"> Marin Rei</a></p>
      </footer>
      </div>
    </div>
  );
}

export default App;
