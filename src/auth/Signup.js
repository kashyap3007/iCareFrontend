import * as React from 'react';
import {useState} from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Message from "./message"
import {signup} from "./helper"
import "./signup.css"
// import Button from 'react-bootstrap/Button';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: '#096a87',
  borderRadius : "20px",
  boxShadow: 24,
  p: 4,
  color:'white'
};
//
const Signup = ({open , handleClose}) => {
  const [values , setValues] = React.useState({name : "" , email : "" , password : ""});
  const [error   ,setError] = useState("");
  const {name , email , password} = values;
  const [loading , setLoading] = useState(false);
  const handleChange = (event) => {
  	setValues({...values  , [event.target.name] : event.target.value });
  }
  const handleSignup = async () => {
  	setLoading(false);
  	if(!name) {
  		setError("Name is required");
  		return;
  	}
  	if(!email) {
  		setError("Email is required");
  		return;
  	}
  	if(!password || password.length < 6) {
  		setError("Password should be six characters long");
  		return;
  	}
  	setError("");
  	setLoading(true);
  	const data = await signup({name , email , password});
  	console.log("HEE");
  	setLoading(false);
  	if(data.error) {
  		setError(data.error);
  		return;
  	}
	setValues({name : "" , password : "" , email : ""});
	window.location.href = "/";
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={()=> {
        	handleClose()
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="Hello">
          <section className="vh-50" >
            <div className="container h-80">
              <div className="row d-flex justify-content-center align-items-center h-100">
              	<Message open = {error} message = {error} severity = {"error"}/>
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{borderRadius: "25px"}}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                          <p className="text-center h1 fw-bolder mb-5 mx-1 mx-md-4 mt-4 laura">Register Now</p>

                          <form className="mx-1 mx-md-4">

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input type="text" id="form3Example1c" className="form-control" value = {name} name = "name" onChange = {handleChange}/>
                                <label className="form-label laura"> Name</label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input type="email" id="form3Example3c" className="form-control" value = {email} name = "email" onChange = {handleChange}/>
                                <label className="form-label laura"> Email</label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input type="password" id="form3Example4c" className="form-control" value = {password} name = "password" onChange = {handleChange}/>
                                <label className="form-label lahsun" > Password</label>
                              </div>
                            </div>

                            <div className="form-check d-flex justify-content-center mb-5">
                              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                              <label className="form-check-label lahsun" >
                                I agree all statements in <a href="#!">Terms of service</a>
                              </label>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button type="button" className="but " onClick = {handleSignup}>Register</button>
                            </div>
{/*btn btn-primary btn-lg  //*/}
                          </form>

                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image"/> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
export default Signup;





