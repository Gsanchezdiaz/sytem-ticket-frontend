import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './pages/entry/Login'
import ResetPassword from './pages/entry/ResetPassword'
import Home from './pages/default/Home'
import Dashboard from './pages/dashboard/Dashboard'

function App() {

  return (
    <div className='flex'>
      {/* <Login /> */}
      <Home>
        <Dashboard />
      </Home>
      {/* <ResetPassword /> */}
    </div>
  )
}

export default App
