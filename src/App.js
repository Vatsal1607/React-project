import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import {Route,Routes,Link} from 'react-router-dom';
import Feedback from './components/Feedback.js';

function App() {
  return (
    <div className="App">
      
      <h1>Welcome to React Router!</h1>
      <nav>
        <Link to="/"  className='px-2 text-blue-400'>Home</Link>
        <Link to="/about" className='px-2 text-blue-400'>About</Link>
        <Link to="/feedback" className='px-2 text-blue-400'>Feedback</Link>
      </nav>
     
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
      </Routes>
    </div>
  );
}

export default App;
