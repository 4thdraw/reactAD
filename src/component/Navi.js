import React, { useState } from 'react';
import logo from '../logo.svg';
import navicss from '../css/navi.module.css';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';

// npm i react-router-dom
// npm install react-bootstrap bootstra
// npm i react-scrollspy

 function Navi() {
    const [ colorMode, updataColor ] = useState(true);
    const menulist = [['메뉴1','#faq'],['후기','#review'],['묻고답하기','#qna']];

  
  



  return (
    <div className={  colorMode ? 'lightmode fixed-top' : 'darkmode fixed-top' }>
        <div className={`${navicss.hd} 
                          border-bottom 
                        py-3 px-4 
        d-flex justify-content-between align-items-center
        `}>
        <h1>
            <Link to="/">
                <img src={logo}  />
            </Link>
        </h1>
        <Scrollspy className='d-flex'>
            {
                menulist.map((val, idx) => {
                    return(
                        <li key={`navi${idx}`} className='navilist' onClick={
                            (e) => {
                                menulist.forEach((v, i)=>{
                                    if( i === idx ) {
                                       document.getElementsByClassName('navilist').item(i).classList = 'navilist on';
                                    }else{
                                       document.getElementsByClassName('navilist').item(i).classList = 'navilist';
                                    }
                                })
                                
                            }
                         }>
                            <a href={val[1]}>{val[0]}</a>
                        </li>

                    )
                })
                
            }

          
         
        </Scrollspy>
            <ul id="sns" className='d-flex'>
                <li>
                    <a href="http://www.youtube.com" target="_blank">유튜브</a>
                </li>
                <li>
                    <a href="http://www.youtube.com" target="_blank">자료실</a>
                </li>
                <li>
                    <button onClick={ () =>{
                        updataColor(!colorMode)
                    }}> { colorMode ? '다크' : '라이트' }</button>
                </li>
            </ul>  

        </div>
    </div>
  )
}

export default Navi;
