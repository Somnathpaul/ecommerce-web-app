import React from 'react';
import './menu-item.style.scss';

const Menuitem = ({title , imageUrl, size}) => ( 
    <div className={`${size} menu-item`}>
     <div className="background-image" 
     style={{
        backgroundImage: `url(${imageUrl})`
     }} />
    
              <div className='content'>
                  <h1 className='title'>{title}</h1>
                  <span className='sub-title'>SHOP NOW</span>
              </div>
            </ div>
);

export default Menuitem;