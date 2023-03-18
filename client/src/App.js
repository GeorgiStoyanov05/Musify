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
      </Routes>
    </div>
  );
}

export default App;
