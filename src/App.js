import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/context/Auth';
import Error from './components/Error';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Header from './components/Header'

function App() {
  const { isAuth } = useContext(Auth)

  return (
    <div className="Center bg">
      { isAuth && <Header /> }
      <Routes>
        <Route path='/' element={<Navigate to='login' replace />}></Route>
        <Route path='login' element={<Login />}></Route>
        { isAuth && 
          <>
          <Route path='home' element={<Home />}></Route>
          <Route path='menu' element={<Menu />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='logout' element={<Logout />}></Route>
          </>
        }
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
