import React from 'react'
import './App.css'


function ProfileCard(props) {
  return (
    <>
      <div className='container'>
        <span className={props.online ? "onOff online" : "onOff offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
        <img src={props.profile} className='image'/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className='buttons'>
          <button className='button'>Message</button>
          <button className='button outline'>Following</button>
        </div>
        <div className='skills'>
          <h6>Skills</h6>
          <ul>
          {props.skills.map((skill,index)=>
          (<li key={index}>{skill}</li>))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProfileCard;
