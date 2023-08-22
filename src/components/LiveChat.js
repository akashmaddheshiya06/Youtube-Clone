
import React, {useState ,  useEffect } from 'react'
import ChatMessage from './ChatMessage'
import addMessage from '../utils/chatSlice'
import {  useDispatch } from 'react-redux';

const LiveChat = () => {

  // const[liveMessage , setLiveMessage] = useState("")

  const dispatch = useDispatch();

useEffect(()=>{

   const i = setInterval(()=>{
    // API polling
    console.log("api polling");
    },2000);
      
 return () => clearInterval(i);

},[]);


  return (

    // <>
    <div className=' w-full h-[600px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse'>

    
      <ChatMessage 
      name="akash  kumar"
      message="this is namste live course"
      /> 
    </div>

  //   <form className="w-full p-2 ml-2 border border-black" 
  //   onSubmit={(e) => {
  //     e.preventDefault();

  //     dispatch(
  //       addMessage({
  //         name: "Akshay Saini",
  //         message: "this  is react",
  //       })
  //     );
  //     setLiveMessage("");
  //   }}
  // >

  
  //        <input className='w-[42rem] px-2 ml-5 border border-black' type="text" 
  //        value={liveMessage} 
  //        onChange ={(e)=>{
  //         setLiveMessage(e.target.value);
  //        }} />
  //        <button className='px-2 mx-2 bg-green-400'>send</button>
  //   </form>

    // </>
  )
}

export default LiveChat;





