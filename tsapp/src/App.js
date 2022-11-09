import React, {useState} from 'react';
import justify from './Icons and Images/Tech Studio Icons/justify icon1.jpg';
import Bold from './Icons and Images/Tech Studio Icons/Bold icon1.jpg';
// import { useState } from "react";
import './App.css';
const App = () => {
  // const [val, setVal] = useState('position')
  const [val, setVal] = useState('')
  let styleElement =  document.querySelector('.inp_des')
  const italics = ()=>{
      console.log("italics clicked");
      let SetTheme = document.body;

     

      // let SetTheme = document.body;

      // SetTheme.classList.toggle("Italic");
  } 
  const bold = ()=>{
    console.log("bold clicked");

    // let styleElement =  document.querySelector('.inp_des')
    // console.log(styleElement.value);
    console.log(val);
    
    
    // let SetTheme = styleElement.value;
    let SetTheme = document.body;


    SetTheme.classList.toggle("Bolden");

  }
  return (
    
    <div className='App container'>
      <h2 className='Job' >Job Requirement</h2>   
      
      <div className='container layout'>
        <div className='grid_div'>
          <div>
          <p><b>Job title</b></p>
          <input className='job_inp3 job' placeholder='Enter job title for this job post' />
          </div>
          <div>
          <p><b>Job Location</b></p>
          <input className='job_inp3 job' placeholder='Enter job title for this job post' />
          </div>
          <div>
            <p><b>What position type are you offering?</b></p>
            
            <div className='job_inp'>
              
              <select className="job_inp3 job2">
                <option value="select">Select Job Type</option>
                <option value="select">Software Developer</option>
                <option value="select">Frontend Developer</option>
                <option value="select">Data Sciences</option>
              </select>      
            </div>
          </div>
          <div>
            <p><b>What level of experience do you want?</b></p>
            {/* <input className='job_inp' placeholder='Choose the minimum experience level required' /> */}
            <div className='job_inp'>
              
              <select className="job_inp3 job2">
                <option value="select">Choose the minimum experience level required</option>
                <option value="select">1 year</option>
                <option value="select">2 years</option>
                <option value="select">3 years</option>
                <option value="select">4 years</option>
              </select>      
            </div>
          </div>
        </div>
        <div>
          <p><b>Job description</b></p>
          <div className='inp_div'>
            <input value={val} onChange= {(e)=>{setVal(e.target.value)}}   className='inp_des' placeholder='Enter the title of position you want to fill' />
            <div className='btn-a .d-sm-none .d-md-block' >
              <button className='btn-1' onClick={()=>{
                console.log("justify clicked");
              }}> <img className='texticon' src={justify} alt=""/></button>
              <button className='btn-1' onClick={bold}><img className='texticon' src={Bold} alt=""/></button>
              {/* <b className='I'>B </b> */}
              <button className='btn-1' onClick={italics}><i className='I'>I</i></button>
            </div>
          </div>
        </div>
        <div className=''>
          <p><b>Minimum Qualification</b></p>
          <div className='inp_div'>
            <input className='inp_des' placeholder='Enter the title of position you want to fill' />
            <div className='btn-a' >
              <button className='btn-1' onClick={()=>{
                console.log("justify clicked");
              }}><img src={justify} alt=""/></button>
              <button className='btn-1' onClick={bold}><img className='texticon' src={Bold} alt=""/></button>
              <button className='btn-1' onClick={italics}><i className='I'>I</i></button>
            </div>
          </div>
        </div>
        <div className='flex_div'>
          <div className='skills' >
            <div>
              <p>What <b>skills or languages</b> are you looking to hire</p>
              <input className='job_inp3' placeholder='Add new skill' />
            </div>
            
            {/* map input here */}
            
          </div>
          <div className='skills' >
            <div>
              <p className='p_skills'>What <b>tools</b> would be used</p>
              <input className='job_inp3' placeholder='Add new tool' />
            
            </div>
            
            {/* map input here */}
            
          </div>
        </div>
        <div className=''>
          <p><b>Responsibilities</b></p>
          <div className='inp_div'>
            <input className='inp_des' placeholder='Enter the title of position you want to fill' />
            <div className='btn-a' >
              <button className='btn-1' onClick={()=>{
                console.log("justify clicked");
              }}><img src={justify} alt=""/></button>
              <button className='btn-1' onClick={bold}><img className='texticon' src={Bold} alt=""/></button>
              <button className='btn-1' onClick={italics}><i className='I'>I</i></button>
            </div>
          </div>
        </div>
        
        <div className='flex_div'>
          <div className='skills edit' >
            
            <p className='p_skills pay'><b>What is the pay range</b></p>
              
          <select className="job_inp4">
              <option value="select">Hiring for a week</option>
              <option value="select">Software Developer</option>
              <option value="select">Frontend Developer</option>
              <option value="select">Data Sciences</option>
          </select>  
            
          </div>
          <div className='skills edit' >
            
            <p className='p_skills2'><b>For how will you be taking applicants</b></p>
              
            
            <select className="job_inp4">
              <option value="select">set application deadline</option>
              <option value="select">Software Developer</option>
              <option value="select">Frontend Developer</option>
              <option value="select">Data Sciences</option>
            </select>              
          </div>
        </div>

        <button  className='btn btn-primary '>SUBMIT</button>
      </div>
    </div>

  )
}

export default App
