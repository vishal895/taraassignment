import React from 'react'

const Card_Design = ({image,name,like,description}) => {
  return (
    <div className="card_small " >
                <div className="image_card">
                <img src={image} className="card-img-top card_img" alt=""/>
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-0 font-t">{name}</h5>
                  <p className='card-text font-p'>{description}</p>
                  <p className="card-text font-p">Likes{like}</p>
                </div>
              </div>
  )
}

export default Card_Design