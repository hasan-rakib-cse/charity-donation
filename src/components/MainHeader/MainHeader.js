import React from 'react';
import './MainHeader.css';

const MainHeader = () => {

    return (
        //<!-- Main-header_section  -->

<div className="container-fluid mt-5">

    
    
       <div className="background-charity">
           
           <div className="container-bg">

             <div className="header-inner-text">
               
                <h1 className='main-heading'>Rise Your Hand <br/> For Poor Families</h1>
                <button>Learn More</button>
             </div>
            
          </div>

      </div>

        
        {/* Website-Title-and-subtext */}

      <div className="header-title" style={{backgroundColor:'#000',padding:'10px',color:'#fff',marginTop:'1px'}}>
          <h2>Welcome To Rakib's Charity</h2>
          <p>Trusted, Belived, Lovely</p>
      </div>
</div>

    );
};

export default MainHeader;