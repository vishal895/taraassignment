import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);

  const getData = () => {
    axios
      .get(`https://api.unsplash.com/search/photos?page=1&query=${search}$client_id=JvXLxrvh9kjusO-wH0xrqd_F0epMORYN9tePK9aN48M`)
      .then((res) => {
        if (res.status === 200) {
          console.log("api avaiable", res.data.result);
          setProduct(res.data.result);
        }
      })
      .catch((err) => {
        console.log("not availabe", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Image Gallery</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Explore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Collection</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Community</a>
              </li>
            </ul>
            <form className="d-flex" role="text">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleSearch} />
              <button className="btn btn-outline-success" type="submit" onClick={getData}>Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar