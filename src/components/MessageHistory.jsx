import React from 'react'

const MessageHistory = ({ msg }) => {
    if (!msg) return null
    return (
        msg.map((row, index) => (
          <div
            key={row.comentarioId}
            className={`mt-3 flex justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <div className='font-bold'>
              <div>{row.usuario}</div>
              <div>{row.fecha}</div>
            </div>
            <div className='p-6 w-4/5 rounded-lg shadow-lg dark:bg-neutral-700 dark:text-white dark:shadow-black/35'>{row.mensaje}</div>
          </div>
        ))
    );
}

export default MessageHistory