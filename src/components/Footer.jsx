import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4 px-4 text-xs">
      <div className="w-full mx-5 px-2 flex justify-between items-center">
        <div>
          <p>© 2024 Expertec Ticket System. All rights reserved.</p>
        </div>
        <div className='flex items-center justify-between'>
          <img className="h-6" src="https://sigeco.smartplus.com.ec/images/logo-small.png" alt="Expertec" />
          <span className='px-4'>Expertec Tecnologies SAC</span>
        </div>
      </div>
    </div>
  )
}

export default Footer