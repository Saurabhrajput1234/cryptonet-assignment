import React, { useContext} from 'react'
import "./Dashboard.css"

import {Context} from './ContextProvider';



const Dashboard = () => {
  const {userData,fetching} = useContext(Context);
 


  return (
    <div className='Dashboard'>{!fetching ? (
    <section className="main">
        <div className="profile">
        <div className="image">
          <img id='userImage' src={userData.picture.large} alt="profile" />
          </div>
          <div className="profile-Details">
          <div style={{"display":'flex'}}>  <h2 style={{paddingRight:"20px"}}>{userData.name.first}</h2> <h2> {userData.name.last}</h2></div>
         

          <h3>{userData.gender}</h3>
          <h3>{userData.cell}</h3>
            
            
            
            <div><p>{userData.email}</p></div>
          </div>
        </div>
      
    </section>)
    
    : (
        <p>Loading...</p>
      )}

  
  </div>

   );
    };
export default Dashboard
