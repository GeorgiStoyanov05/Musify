import {Routes, Route} from 'react-router-dom'
import Index from './components/Index/Index';
import About from './components/About/About'
import Songs from './components/Songs/Songs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element = {<Index />}/>
        <Route path='/about' element = {<About />} />
        <Route path='/catalog' element = {<Songs />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/register' element = {<Register />}/>
        <Route path='/logout' element = {<h1>/logout</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
