import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./LogIn.css";
import { React, useState } from 'react';
import {Link,useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firestoredb } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AuthServices from "../services/AuthServices";
import ForgetPasswordModal from "../components/forgetPassword/ForgetPasswordModal"


export default function LogIn() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const forgetPassword = ()=> {
        handleOpen();
    }
  
    const onLogin = async (e) => {
        try {
            const userData = await AuthServices.login({email:email, password:password});
            if (userData) {
                console.log('userData: ',userData);
                // await onLoginFirebase(e);
                if(email==="admin2@gmail.com" && password==="admin123"){
                    navigate("/Admin")
                }else{
                    navigate("/DashBoard01")
                }
            }
          } catch (error) {
          }
    }

    const onLoginFirebase = (e) => {
        
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
  
          const user = userCredential.user;
  
          if(email==="admin2@gmail.com" && password==="admin123"){
            navigate("/Admin")
            console.log(user);
          }
          else{
            navigate("/DashBoard01")
            console.log(user);
          }
          
  
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
          alert(errorMessage);
        });
  
    }


    return (
        <div className='bg_login'>
            <div className='justify-center col-12 d-flex'>
                <div className='mt-4 mb-4 row ms-5 me-5 bg_Log_box'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='justify-center mt-5 col-12 d-flex'>
                                <div className='logoBoxLOg'>
                                    <img class="logo_log" src="./images/logo2.png" alt="" />
                                </div>
                            </div>
                            <div className='justify-center mt-3 col-12 d-flex'>
                                <h3 className='logTX'>Sign in to your account.</h3>
                            </div>
                            <div className='justify-center mt-5 col-12 d-flex'>
                                <div className='row widthInput'>
                                    <InputGroup size="lg">
                                        <InputGroup.Text className='bg_input' id="inputGroup-sizing-lg" >
                                            <div className='justify-center col-12 d-flex'>
                                                <img className='logpngicon me-2' src="./images/email.png" alt="" />
                                                <h5 className='inputx'>Email:</h5>
                                            </div>
                                        </InputGroup.Text>
                                        <Form.Control
                                            className='bg_input2'
                                            aria-label="Large"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                            <div className='justify-center mt-2 col-12 d-flex'>
                                <div className='row widthInput'>
                                    <InputGroup size="lg">
                                        <InputGroup.Text className='bg_input' id="inputGroup-sizing-lg" >
                                            <div className='justify-center col-12 d-flex'>
                                                <img className='logpngicon2 me-2' src="./images/pw.png" alt="" />
                                                <h5 className='inputx'>Password:</h5>
                                            </div>
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="password"
                                            className='bg_input2'
                                            aria-label="Large"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                            <div className='justify-center mt-5 col-12 d-flex'>
                                <div className='signinbtn' onClick={onLogin}>
                                    <h3>SIGN IN</h3>
                                </div>
                            </div>
                            <div className='justify-center mt-3 mb-3 col-12 d-flex'>
                                <h3 className=''>OR sign in with</h3>
                            </div>
                            <div className='justify-center mb-3 col-12 d-flex'>
                                <img className='mt-2 mb-2 ms-2 me-2' src="./images/linkin.png" alt="" />
                                <img className='mt-2 mb-2 ms-2 me-2' src="./images/Google.png" alt="" />
                                <img className='mt-2 mb-2 ms-2 me-2' src="./images/logoweb.png" alt="" />
                            </div>
                            <div className='justify-center mb-3 col-12 d-flex bottomBorder'>
                                <div className='row'>
                                    
                                    <button onClick={forgetPassword} className='justify-center mt-4 col-12 d-flex'>
                                        <h5 className=''>Forgot your password?</h5>
                                    </button>

                                    <ForgetPasswordModal setCall={setOpen} call={open} />

                                    <div className='justify-center col-12 d-flex'>
                                        <h4 className=''>Don't have an account? <span className='tx_endlog'>Sign Up</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
