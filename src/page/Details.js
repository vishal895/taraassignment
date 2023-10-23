import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = () => {
    axios
      .get(`https://api.unsplash.com/photos/?client_id=JvXLxrvh9kjusO-wH0xrqd_F0epMORYN9tePK9aN48M${id}`)
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  };

  return (
    <>
      <div className="card_detail">
        <div className="detail_image">
          <img
            src={product.urls?.full}
            alt=""
          />
        </div>
        <div className="content_detail">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <div className="small_image">
                <img src={product.profile_image.large} class="card-img" alt="..."  /> 
              </div>
              <div className="data">
                <h1>{product.links.name}</h1>
                <p>{product.links.location}</p>
              </div>
              <div className="d-flex">
                <h3>{product.social.instagram_username}</h3>
                <h3>{product.social.twitter_username}</h3>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <h4>Download</h4>
              <h4>Likes{product.likes}</h4>
            </div>
          </div>
          <div className="tag">
            <h2>Related tags</h2>
            <button className="btn btn-primary"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;