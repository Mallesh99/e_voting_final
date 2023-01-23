import React from 'react';
import {NavLink} from 'react-router-dom';

const Voter=()=>{


    return(

        <div>
        <div className='container shadow-lg rounded-5 p-3 mt-5 myback2 d-flex justify-content-center' >
<img src="./voter.png" alt="img error" height={350}/>
       

        {/* <div className='row display-1 justify-content-center my-3'> <p className='text-decoration-underline text-center'>Voter</p></div> */}
        <div className='row justify-content-center my-5 text-center m-5'> 

         <NavLink to='/Voter/Login' style={{cursor:"pointer"}}><button type='button' className='btn btn-lg btn-outline-dark border-4 border border-dark fw-bold '  >Voter Login</button>
        </NavLink>
        </div>

        <div className='row justify-content-center my-5 text-center'> 

        <NavLink to='/Voter/Register' style={{cursor:"pointer"}}><button type='button' className='btn btn-lg btn-outline-dark border-4 border border-dark fw-bold'  > Voter Register</button></NavLink>
        
        </div>




        </div>






        </div>




    )




};

export default Voter;