import React from 'react'

const ChatMessage = ({name ,  message}) => {
  return (
    <div className="flex items-center shadow-sm">
    <img 
     className="h-16"         
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFMNvSzVnuL1bPyb86cy1C5jOMvFF84ENDGbwhP0xGhSOMNNDK6L-frykc6pP3QtsrwY&usqp=CAU" alt="usericon" />

    <span className='font-bold px-2'>{name}</span>
    <span>{message}</span>
 </div>
  )
}
export default ChatMessage;

