import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
      <main>
        <Dictionary defaultKeyword="joy"/>
      </main>
      <footer>
        <p className="myName">This project was coded by {""}
        <a href='https://www.linkedin.com/in/marin-rei-70260690/' target="_brank" className="profile-link" rel='norefferer'>Marin Rei</a> 
        {""} and is{""} <a href="https://github.com/mariiiiin913/my-dictionary-project" target="_brank" rel='norefferer' className='github-link'>open-sorced on GitHub</a> and <a href='https://app.netlify.com/teams/mariiiiin913/overview' target="_brank" className="netlify-link" rel='norefferer'>hosted on Netlify</a> </p>
      </footer>
      </div>
    </div>
  );
}

export default App;
