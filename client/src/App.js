import {Routes, Route} from 'react-router-dom'
import Index from './components/Index/Index';
import About from './components/About/About'
import Songs from './components/Songs/Songs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Details from './components/Details/Details'
import Edit from './components/Edit/Edit';
import Logout from './components/Logout/Logout';
import { AuthContext } from './contexts/AuthContext';
import { useState } from 'react';

function App() {

  const [auth, setAuth] = useState({});
  

  async function onLogOut(){
    const baseUrl = 'http://localhost:3030/users/logout'
    await fetch(baseUrl);
    setAuth({});
  }

const authContext = {
  onLogOut,
  setAuth,
  ...auth
}

  return (
    <AuthContext.Provider value = {authContext}>
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
        <Route path='/logout' element = {<Logout />} />
        <Route  path='*' element = {<h1>404</h1>} />
      </Routes>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
