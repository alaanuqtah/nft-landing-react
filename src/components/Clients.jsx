import React from 'react'
import client1 from "../assests/clients1.png";
import client2 from "../assests/clients2.png";
import client3 from "../assests/clients3.png";
import client4 from "../assests/clients4.png";
import client5 from "../assests/clients5.png";


const Clients = () => {
  const data =[client1,client2,client3,client4,client5];
  return (
    <div className='clients'>
      <div className="container">
        <div className="clients-cont">
          {
        data.map((client,index)=>(
          <div className='client' key={index}>
            <img src={client} alt="client" />
          </div>
        ))
      }

        </div>
      </div>
      
      
    </div>
  )
}

export default Clients
