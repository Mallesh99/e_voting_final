import React from 'react';
import { NavLink,Link } from 'react-router-dom';
const Home = () => {

	return (<div >
		<div className="container-sm m-5">
        <div className="row">
          <div className="col ">
            <div className="card col-sm-8">
              <img src="./voter.png" className="card-img-top" alt="img error" />
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
				<div className="row  p-5 d-flex justify-content-center text-center ">
        <Link to="/Voter" style={{ cursor: "pointer" }}>
          <button
            type="button"
            className="btn btn-lg btn-outline-dark fw-bold border-4 border border-dark"
            style={{ width: "250px", wordWrap: "break-word" }}
          >
            {" "}
            Voter Login/Sign up
          </button>
        </Link>
      </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card col-sm-8">
              <img src="organizer-4098818-3408109.webp" className="card-img-top" alt="img error" />
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
				<div className="row  p-5 d-flex justify-content-center text-center ">
        <Link to="/Organizer/Login" style={{ cursor: "pointer" }}>
          <button
            type="button"
            className="btn btn-lg btn-outline-dark fw-bold border-4 border border-dark"
            style={{ width: "250px", wordWrap: "break-word" }}
          >
            {" "}
            Organizer Login
          </button>
        </Link>
      </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

















			{/* <div className='container mt-5 rounded-5 shadow-lg myback2 ' style={{ width: "50%" }} >


				<div className='row  p-5 d-flex justify-content-center text-center '><NavLink to='/Voter' style={{ cursor: "pointer" }}><button type='button' className='btn btn-lg btn-outline-dark fw-bold border-4 border border-dark' style={{ width: "250px", wordWrap: "break-word" }} > Voter Login/Sign up</button></NavLink></div>
				<div className='row  p-5 d-flex justify-content-center text-center'><NavLink to='/Organizer/Login' style={{ cursor: "pointer" }}><button type='button' className='btn btn-lg btn-outline-dark fw-bold border-4 border border-dark' style={{ width: "250px", wordWrap: "break-word" }}>Organizer Login</button></NavLink> </div>

			</div> */}

		</div>
	)
};

export default Home;

