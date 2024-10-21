import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserView,MobileView } from "react-device-detect";
import { FaStar } from "react-icons/fa";

export default function home() {
  return (
  <div className=''>
  <div className="containeraa "
  style={{
        backgroundImage: 'url(../assets/bg_blue.webp)', // Update this path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure full page height
      }}>
    <div className="container_content">
      <div className="container_content_inner">
        <div className="title">
        <BrowserView className='projecttilt text-5xl'>
          Abhinav Gumpu 
        </BrowserView>
        <MobileView className='projecttiltmobile'>
          Abhinav Gumpu
        </MobileView>
        </div>
        <div className="par">
          <p className='myhomepara line-clamp-3'>
          A highly motivated tech enthusiast from Hyderabad, 
Telangana, India. With a Bachelors of Computer Science degree from Gokaraju Rangaraju Institute of Engineering
 and Technology, where I maintained an exceptional CGPA of 9.2, I've earned recognition for my academic
  excellence, securing a full scholarship for four years.Throughout my academic journey, I have developed a
   strong foundation in computer science principles, including programming languages, algorithms, and 
   software development methodologies. My passion lies in leveraging technology to solve real-world problems 
   and drive innovation......{" "}
          </p>
        </div>
        <div className="btns">
          <button className="btns_more"><Link to='/about'>About me</Link></button>
        </div>
      </div>
    </div>
    <BrowserView className="container_outer_img">
      <div className="img-inner">
        <img
          src="../assets/aacAG.jpg"
          className="container_img"
          alt="walking_img"
          />
    </div>
    
    </BrowserView>
    <MobileView className="container_outer_img">
      <div className="img-inner">
        <FaStar className="container_img" alt="walking_img"/>
    </div>
    </MobileView>
  </div>
  <div/>

    </div>
  )
}
