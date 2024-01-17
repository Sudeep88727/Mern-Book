import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import MyFooter from './Components/MyFooter';
import Navbar from './Components/Navbar';
import { AuthContext } from './contects/AuthProvider';
function App() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return (
      <Login />
    )
  }
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>

        {/* to get children page used in router */}
        <Outlet />

      </div>
      <MyFooter />
    </>
  )
}

export default App