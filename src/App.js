import './App.css';
import logo from './assets/github-mark.svg'
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <a href="#">
          <img src={logo} alt='github-logo' />
        </a>
      </header>
      <Profile />

    </div>
  );
}

export default App;
