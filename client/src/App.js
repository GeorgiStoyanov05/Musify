import {Routes, Route} from 'react-router-dom'
import Index from './components/Index/Index';
import About from './components/About/About'
import Songs from './components/Songs/Songs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Details from './components/Details/Details'
import Edit from './components/Edit/Edit';
import { AuthContext } from './contexts/AuthContext';
import { CreateContext } from './contexts/CreateContext';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function App() {

  const [showCreate, setShowCreate] = useState(true);
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();


  function CloseCreate(){
    setShowCreate(state=>!state);
  }

  function onLoginSubmit(e){
    e.preventDefault();
    const baseUrl = 'http://localhost:3030/users/login';
    const values = new FormData(e.target);
    const { email, password } = Object.fromEntries(values);
        fetch(baseUrl, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
      })
      .then(res=>res.json())
      .then(data=>setAuth(data))
      navigate('/');
  }

const createContext = {
  showCreate,
  setShowCreate,
  CloseCreate
}

const authContext = {
  onLoginSubmit,
  ...auth
}



  return (
    <AuthContext.Provider value = {authContext}>
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
    </AuthContext.Provider>
  );
}

export default App;
