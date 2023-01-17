import './App.css';
import Body from './Layout/Body/Body';
import Header from './Layout/Header/Header';
import Titlebar from './Layout/Titlebar/Titlebar';

function App() {
  return (
    <div className="App">

      {/* Calculator */}
      <div className='Calculator-app'>

        {/* Titlebar */}
        <div className='Titlebar-container'>
          <Titlebar />
        </div>

        {/* Header */}
        <div className='Header-container'>
          <Header />
        </div>

        {/* Body */}
        <div className='Body-container'>
          <Body />
        </div>

      </div>
    </div>
  );
}

export default App;
