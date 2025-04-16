import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './GuestBook.css';
const GuestBook = () => {
const [apiMessage, setApiMessage] = useState([]);
const [postData, setPostData] = useState({name: "", message: ""});
const showMessage = async () =>{
    try{
        const response = await axios.get('https://guest-100705353420.us-central1.run.app/guest');
        console.log(response);
        setApiMessage(response.data);
    }catch(err){
        console.error('get Data 불러오기 실패 !', err)
    }
}
useEffect(()=>{
    showMessage();
},[])
const submitPost = async (e) =>{
    e.preventDefault(); //form 쓸때 자동방지 
    try{
        await axios.post('https://guest-100705353420.us-central1.run.app/guest', postData);
        setPostData({name:"", message:""})//postdata갖고온 다음 끝났는데 clear를 시켜줌.
        showMessage();
    }catch(err){
        console.error('post data 실패! ', err);
    }
}
  return (
    <div className='guestOutBox'>
        <h1>Guest Book</h1>
        <form onSubmit={submitPost}>
            <input type="text" value={postData.name} placeholder='name' 
                onChange={(e)=>setPostData({...postData, name: e.target.value})} required />
            <textarea value={postData.message} placeholder='message' 
                onChange={(e)=>setPostData({...postData, message:e.target.value})} required/>
            <button type="submit">SUBMIT</button>
        </form>
        
        <div className='message'>
            {
                apiMessage.map((message)=>(
                    <div key={message.id} className='messageCard'>
                        <p><strong>{message.name}</strong></p>
                        <p>{message.message}</p>
                        <p>{new Date(message.created_at).toLocaleString()}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default GuestBook;