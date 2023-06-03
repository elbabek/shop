import { Outlet } from 'react-router-dom';
import './App.css';
import Login from './components/pages/login/Login';
import Registration from './components/pages/registration/Registration';


function App() {
  return (
    // <Registration/>
    // <Login/>
    <div id='detail'>
     <Outlet/>
    </div>
  );
}

export default App;
