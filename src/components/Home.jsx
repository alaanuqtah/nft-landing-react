import React from 'react'
import home from "../assests/home.png"
const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <div className="content">
          <p className='sub-title'>Launching Soon</p>
          <h1 className='title'>An NFT like no other</h1>
          <p className="description">
            dont miss out on the release of the NFTs. 
            Sign Up below to get updated when we go live.
          </p>
          <button>Sign Up</button>
        </div>
      

      <div className="image-cont">
        <div className="image">
          <img src={home} alt="home" />
        </div>
        <div className="ellipse-cont">
          <div className="ellipse pink"></div>
          <div className="ellipse orange"></div>

        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Home
