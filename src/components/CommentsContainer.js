import React from 'react'


const commentsData = [
    {
        name : "akash kumar",
        text : " lorem ipsum dollar sit amet  ",
        replies: [

        ]
    },
    {
        name : "akash kumar",
        text : " lorem ipsum dollar sit amet  ",
        replies: [

        ]
    },
    {
        name : "akash kumar",
        text : " lorem ipsum dollar sit amet  ",
        replies: [
            {
                name : "akash kumar",
                text : " lorem ipsum dollar sit amet  ",
                replies: [
        
                ]
            }

        ]
    },
    {
        name : "akash kumar",
        text : " lorem ipsum dollar sit amet  ",
        replies: [
            {
                name : "akash kumar",
                text : " lorem ipsum dollar sit amet  ",
                replies: [
        
                ]
            }
        ]
    },
    {
        name : "akash kumar",
        text : " lorem ipsum dollar sit amet  ",
        replies: [
            {
                name : "akash kumar",
                text : " lorem ipsum dollar sit amet  ",
                replies: [
        
                ]
            }
        ]
    }, 
    {
        name : "akash kumar",
        text : " lorem ipsum dollar sit amet  ",
        replies: [
            {
                name : "akash kumar",
                text : " lorem ipsum dollar sit amet  ",
                replies: [
        
                ]
            }
        ]
    },
     {
        name : "akash kumar",
        text : " lorem ipsum dollar sit amet  ",
        replies: [
            {
                name : "akash kumar",
                text : " lorem ipsum dollar sit amet  ",
                replies: [
                    {
                        name : "akash kumar",
                        text : " lorem ipsum dollar sit amet  ",
                        replies: [
                            {
                                name : "akash kumar",
                                text : " lorem ipsum dollar sit amet  ",
                                replies: [
                        
                                ]
                            },
                
                        ],
                    },
        
                ],
            },
        ],
    },

];


const CommentsList = ({comments})=>{
//  disclaimer = don't use index as keys
    return comments.map((comment, index)=>(

    <div key={index}>
    <Comment  data = {comment} />

    <div className='pl-5 border border-l-black ml-5'>
    <CommentsList comments ={comment.replies}/>

    </div>
    </div>
    ));

};

const Comment = ({data})=>{
    const {name , text , replies } = data;
   return(
     <div className='flex shadow-sm bg-gray-300 p-2 round-lg my-2'>
   <img
   className='w-8 h-8'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFMNvSzVnuL1bPyb86cy1C5jOMvFF84ENDGbwhP0xGhSOMNNDK6L-frykc6pP3QtsrwY&usqp=CAU" alt="user" />


   <div className='px-3'>
   <p className='font-bold'>{name}</p>
   <p>{text}</p>
   </div>



   </div>
   );
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
    <h1 className='text-2xl font-bold'>comments : </h1>
    <CommentsList comments = {commentsData} />
    </div>
  )
}

export default CommentsContainer;
