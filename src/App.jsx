import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/entry/Login'
import ResetPassword from './pages/entry/ResetPassword'
import Dashboard from './pages/dashboard/Dashboard'
import AddTicket from './pages/newTicket/addTicket';
import ListTicket from './pages/listTicket/ListTicket';
import Ticket from './pages/ticket/Ticket';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <div className='flex'>
      <Router>
        <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/home' element={<PrivateRoute />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='add-ticket' element={<AddTicket />} />
            <Route path='list-tickets' element={<ListTicket />} />
            <Route path='ticket/:id' element={<Ticket />} />
        </Route>
          {/* <Home> */}
            {/* <Dashboard /> */}
            {/* <AddTicket /> */}
            {/* <ListTicket /> */}
            {/* <Ticket /> */}
          {/* </Home> */}
          {/* <ResetPassword /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
