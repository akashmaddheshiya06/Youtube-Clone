import React from 'react';

// const list = ["all" , " live " , "gaming";]

const Button = ({name}) => {
  return (
    <div>
      <button className='p-5 m-2 bg-gray-200 rounded-lg '>{name}</button>
    </div>
  )
}

export default Button
