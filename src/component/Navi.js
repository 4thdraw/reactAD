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
    const [ activenum , naviUpdate ] = useState(-1);

    // const boxs = document.querySelectorAll(".navilist a"); //li들

    // boxs.forEach(el => {
    //   el.onclick = (e) => {
    //     const nodes = [...e.target.parentElement.children];
    
    //     console.log(e.target.parentElement, nodes);
    
    //     const index = nodes.indexOf(e.target);
    
    //     console.log(index)
    //   }
    // });


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
            <li key='navi0' data-num={0} className={ 'navilist' }  >
                <Link to="/" onClick={ 
                    (e) => {

                  
                  const navinodes = [...e.target.parentElement.parentElement.children];
                  //index 번호 색출하기위함
                  console.log(navinodes.length);

                  const index = navinodes.indexOf(e.target.parentElement);
                  console.log(index)
                  
                         


                          } }
                >뇌새김소개</Link>
            </li>
            <li key='navi1' data-num={1} className={ 'navilist' }>
                <a href='#faq' onClick={ 
                    (e) => {
                            console.log(e.target.parentNode.parentNode); //스펠링주의할것
                             
                          } }>뇌새김의 학습원리</a>
            </li>
            <li key='navi2' data-num={2} className={ 'navilist' }>
                <a href='#review'>뇌새김의 후기</a>
            </li>
            <li key='navi3' data-num={3} className={ 'navilist' }>
                <a href='#qna'>문의하기</a>
            </li>         
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
