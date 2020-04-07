import React from 'react';
import './homepage.style.scss';


const Homepage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
          <div className='menu-item'>
              <div className='content'>
                  <h1 className='title'>Hat</h1>
                  <span className='sub-title'>SHOP NOW</span>
              </div>
          </div>
          <div className='menu-item'>
              <div className='content'>
                  <h1 className='title'>Jacket</h1>
                  <span className='sub-title'>SHOP NOW</span>
              </div>
          </div>
          <div className='menu-item'>
              <div className='content'>
                  <h1 className='title'>Rings</h1>
                  <span className='sub-title'>SHOP NOW</span>
              </div>
          </div>
          <div className='menu-item'>
              <div className='content'>
                  <h1 className='title'>Shoes</h1>
                  <span className='sub-title'>SHOP NOW</span>
              </div>
          </div>
          <div className='menu-item'>
              <div className='content'>
                  <h1 className='title'>Shocks</h1>
                  <span className='sub-title'>SHOP NOW</span>
              </div>
          </div>
        </div>
    </div>
);

export default Homepage