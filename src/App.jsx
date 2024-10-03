import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/entry/Login'
import ResetPassword from './pages/entry/ResetPassword'
import Home from './pages/default/Home'

function App() {

  return (
    <div className='flex'>
      {/* <Login /> */}
      <Home>
        Dashboard
      </Home>
      {/* <ResetPassword /> */}
    </div>
  )
}

export default App
