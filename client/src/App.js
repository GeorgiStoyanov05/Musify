import {Routes, Route} from 'react-router-dom'
import Index from './components/Index/Index';
import About from './components/About/About'
import Songs from './components/Songs/Songs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Details from './components/Details/Details'
import Edit from './components/Edit/Edit';
import { CreateContext } from './contexts/CreateContext';
import { useState, useEffect } from 'react';

function App() {

  const [showCreate, setShowCreate] = useState(true);


  function CloseCreate(){
    setShowCreate(state=>!state);
  }

const createContext = {
  showCreate,
  setShowCreate,
  CloseCreate
}

  return (
    <CreateContext.Provider value = {createContext}>
    <div className="App">
      <Routes>  
        <Route path='/' element = {<Index/>}/>
        <Route path='/about' element = {<About />} />
        <Route path='/catalog' element = {<Songs />} />
        <Route path='/catalog/:id' element={<Details />} />
        <Route path='/create' element = {<Create/>} />
        <Route path='/edit/:id' element = {<Edit />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register /> }/>
        <Route path='/logout' element = {<h1>/logout</h1>} />
      </Routes>
    </div>
    </CreateContext.Provider>
  );
}

export default App;
