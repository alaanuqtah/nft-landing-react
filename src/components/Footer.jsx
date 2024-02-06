import React from 'react'
import logo from "../assests/logo.png"
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const links=[
    {
      title:"About",
      data:["About","Terms","Legal"],
    },
    {
      title:"NFT",
      data:["OpenSea","Maker","Learn"],
    },
    {
      title:"Contact",
      data:["Press","Support"],
    },
    {
      title:"Social",
      data:["Twitter","Instagram"],
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
  ];
  return (
    <div className='footer'>
      <div className="upper">
        <div className="brand-cont">
          <div className="brand"><img src={logo} alt="" /></div>
          <p>Exclusive NFT collection</p>
          <ul>
            {
            socialLink.map((link,index)=>(
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {
            links.map(({title,data},index)=>{
              return(
                <div className='link' key={index}>
                  <h4>{title}</h4>
                  <ul>
                      { data.map((option,index2)=>(
                    <li key={index2}>{option}</li>
                  ))}

                  </ul>
                
                </div>
               
              )

            })
          }
        </div>
      </div>

      <div className="lower">
        <span>&copy; Copyright 2024 NFT</span>
        <span>Launching Aug 2024</span>
      </div>
      
    </div>
  )
}

export default Footer
