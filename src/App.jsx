import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/entry/Login'
import ResetPassword from './pages/entry/ResetPassword'

function App() {

  return (
    <div className='flex'>
      <Login />
      {/* <ResetPassword /> */}
    </div>
  )
}

export default App
