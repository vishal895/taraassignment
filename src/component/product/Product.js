import axios from "axios";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card_Design from "../card/Card_Design";

const Product = () => {
  const [product, setProduct] = useState([]);

  const getData = () => {
    axios
      .get("https://api.unsplash.com/photos/?client_id=JvXLxrvh9kjusO-wH0xrqd_F0epMORYN9tePK9aN48M")
      .then((res) => {
        if (res.status === 200) {
          console.log("api avaiable", res.data);
          setProduct(res.data);
          
        }
      })
      .catch((err) => {
        console.log("not availabe", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="card_portion gap-2 mt-5 ">
        {product.map((key) => {
          return (
            <>
              <NavLink to={`/product/${key.id}`}>
                <Card_Design
                  image={key.urls.full}
                  like={key.likes}
                  name={key.user.first_name}
                  description={key.description}
                />
              </NavLink>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Product;
