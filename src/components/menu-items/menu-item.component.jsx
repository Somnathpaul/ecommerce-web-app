import React from 'react';
import './menu-item.style.scss';
import {withRouter} from 'react-router-dom';

const Menuitem = ({title , imageUrl, size, history, linkUrl, match}) => ( 
    <div className={`${size} menu-item`} 
         onClick={()=> history.push(`${match.url}${linkUrl}`)}>
      <div className="background-image" 
          style={{ backgroundImage: `url(${imageUrl})`
        }} />
    
              <div className='content'>
                  <h1 className='title'>{title}</h1>
                  <span className='sub-title'>SHOP NOW</span>
              </div>
            </ div>
);

export default withRouter(Menuitem);