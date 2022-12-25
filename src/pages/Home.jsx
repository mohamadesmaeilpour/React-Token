import React,{useState} from 'react'
// import {Link} from "react-router-dom"
// import Menu from './Menu'
import '../style/Home.css'
// import back from "../../src/assets/img/back.jfif"
import InputShortener from '../component/InputShortener'
import BackgroundAnimation from '../component/BackgroundAnimation'
import LinkResult from '../component/LinkResult'


function Home() {
  const [inputValue, setInputValue]=useState("")
  return (
    <div className="container">
     <InputShortener setInputValue={setInputValue}/>
     <BackgroundAnimation/>
     <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default Home
