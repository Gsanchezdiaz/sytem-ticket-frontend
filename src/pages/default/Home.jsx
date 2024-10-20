import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Home = ({children}) => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <header className='row-start-1 row-end-2 mb-2'>
        <Navbar />
      </header>
      <main className='flex-grow'>
        {children}
      </main>
      <footer className='row-start-3 row-end-4'>
        <Footer />
      </footer>
    </div>
  )
}

export default Home