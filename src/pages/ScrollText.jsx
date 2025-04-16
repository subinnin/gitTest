import React from 'react'
import {useEffect, useState} from 'react';
import './ScrollText.css';

const ScrollText = () => {
    const [index, setIndex] = useState(0);
    const textScroll = () =>{
        const scrollY = window.scrollY;
        const height = window.innerHeight;
        if(scrollY < height * 0.8){
            setIndex(0);
        }else if(scrollY < height*1.8){
            setIndex(1);
        }else{
            setIndex(2);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', textScroll);
        textScroll();
        // 메모리를 위해 사용하는 코드임. 
        return () => window.removeEventListener('scroll', textScroll);
    },[])
  return (
    <div className='scrollTextArea'>
        <section className={`scrollText ${index === 0 ? 'active' : ''}`}>
            <h1>첫번째 페이지입니다.</h1>
        </section>
        <section className={`scrollText ${index === 1 ? 'active' : ''}`}>
            <h1>두번째 페이지로 변했습니다.</h1>
        </section>
        <section className={`scrollImg ${index === 2 ? 'active' : ''}`}>
            <img className='scrollInImg' src={process.env.PUBLIC_URL + '/images/image2.jpg'}
                alt = "images"/>
        </section>
    </div>
  )
}

export default ScrollText;