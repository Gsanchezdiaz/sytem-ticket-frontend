import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './pages/entry/Login'
import ResetPassword from './pages/entry/ResetPassword'
import Home from './pages/default/Home'
import Dashboard from './pages/dashboard/Dashboard'
import AddTicket from './pages/newTicket/addTicket';
import ListTicket from './pages/listTicket/ListTicket';

function App() {

  return (
    <div className='flex'>
      {/* <Login /> */}
      <Home>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <ListTicket />
      </Home>
      {/* <ResetPassword /> */}
    </div>
  )
}

export default App
