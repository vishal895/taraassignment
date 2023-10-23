import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Product from '../component/product/Product'

const Home = () => {
  return (
    <>
    <Navbar />
    <div class="card text-bg-dark">
          <img src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" class="card-img" alt="..." height={500} />
          <div class="card-img-overlay text-center mx-auto">
              <h5 class="card-title mt-50 tittle">Download High Quality Image by Creators</h5>
              <p class="card-text para">Over 2.4 million + stock Image by our talented Community</p>
              
          </div>
      </div>
      <Product/>
      </>
  )
}

export default Home