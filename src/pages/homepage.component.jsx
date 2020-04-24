import React from 'react';
import './homepage.style.scss';
import Directory from '../components/directory/directory.component';


const Homepage = ({history}) => (
    <div className="homepage">
     <Directory history={history}/>
    </div>
);

export default Homepage;