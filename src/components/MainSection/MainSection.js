import React, { useEffect, useState } from 'react';
import Details from './Details';
import './MainSection.css'

const MainSection = () => {
 
    //declare the state 

    const[helps, setHelps] = useState([]);

    const[donate, setDonate] = useState([]);


    //load fake data from json file  
    useEffect(()=>{
        fetch('donate.json')
        .then(res=>res.json())
        .then(data=>setHelps(data))

    },[]);
    console.log(helps)

   //event Handler 

   const handleDonate =(help)=>{
      const Number_Of_Donar = [...donate,help];
      setDonate(Number_Of_Donar)
   }

  let total =0;
  let names='';

  //show the onclick event
  for(const all_amount of donate){
    total = total+parseInt(all_amount.budget);
    names = names+all_amount.name + '---';
  }

    return (
// <!-- Main Section-->

<div className="container-fluid my-5 py-5">
    <div className="row">
        <div className="col-md-12">
            <h1 className="d-org my-5">My Donar Organization</h1>
           
        </div>
    </div>
    <div className="row">
        <div className="col-md-8 col-12">
            <div className="row">
                
                { helps.map(help=><Details help={help} key={help.id} handleDonate={handleDonate}></Details>) }         

            </div>
            
        </div>
       
        <div className="col-md-4 col-12">

          <div className="total-budget">
            <h3>Number OF Charity: {donate.length}</h3><hr/>
            <h4>Total Donate: $ {total}</h4><hr/>
            <h4>Organization Group:<br/></h4>
            <p>{names}</p>
            <hr/>
            <button className="total">See More details</button>
          </div>

       </div>
    </div>
</div>
    );
};

export default MainSection;