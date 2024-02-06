import React from "react";
import icon from "../assests/icon.png";
import super1 from "../assests/super1.png";
import release2 from "../assests/release2.png";
import Card from "./Card";

const Free = () => {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
          </div>
          <div className="content">
            <div className="image">
              <img src={icon} alt="" />
            </div>
            <h2 className="title">Free NFT for early birds</h2>
            <p className="description">
              Sign Up today and you'll get a free NFT when we launch
            </p>
          </div>
        </div>

        <div className="cards">
          <div className="card1">
            <Card image={super1} series="Floop Series" title="Purple Man" price={2.99} tag={12983} time={1}/>
          </div>
          <div className="card2">
            <Card
              image={release2}
              series="Gloop Series"
              title="Purple Man"
              price={3.99}
              tag={12983}
              time={2}
            />
          </div>
        </div>
      </div>
      
  )
}

export default Free
