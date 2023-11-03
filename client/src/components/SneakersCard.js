import React from 'react'
import './SneakersCard.css'
import { Link } from 'react-router-dom'


const SneakersCard = (props) =>  {

  return (
      <div className="SneakersCard" style={{ backgroundImage:`url(${props.img_url})`}} >
        <div className="SneakersCard-info">
          <h3 className="brand_name">{props.brand_name}</h3>
          <p className="description">{props.description}</p>
          {/* <p className="sizes">{props.sizes}</p>
          <p className="price">{props.prices + " days"}</p> */}
          <Link to={'sneaker/get/'+ props.id}><button className="seeMoreBtn">See More</button></Link>
        </div>
      </div>
  );
};

export default SneakersCard;