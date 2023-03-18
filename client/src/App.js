import {Routes, Route} from 'react-router-dom'
import Index from './components/Index/Index';
import About from './components/About/About'
import Books from './components/Games/Books';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element = {<Index />}/>
        <Route path='/about' element = {<About />} />
        <Route path='/games' element = {<Books />}/>
        <Route path='/login' element = {<h1>/login</h1>}/>
        <Route path='/register' element = {<h1>/register</h1>}/>
        <Route path='/logout' element = {<h1>/logout</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
