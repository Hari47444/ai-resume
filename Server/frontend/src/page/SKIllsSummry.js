import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./SKIllsSummry.css";
import {Link, useNavigate,useLocation} from 'react-router-dom';




export default function SKIllsSummry() {
    const location = useLocation();
    const navigate = useNavigate();
    const resumeDetails = location?.state?.data??{};
    console.log("resumeDetails::: ",resumeDetails)
    
    const onChange = () =>{

        sessionStorage.setItem("head5", true);
        navigate("/SMMERYfinish", {state: {
            data : resumeDetails
        }});
        
    }

    return (
        <div>
            <div>
                <Heder_nav4 />

                <div className='bg_list'>
                    <div className=' col-12'>
                        <div className='row ms-3 me-3'>
                            <div className='mb-5 mb_cla col-12'>
                                

                                <div className='mt-5 row ms-5 me-5'>
                                    <div className='mt-5 col-12 col-md-6'>
                                        <div className='mt-5 row'>
                                            <h3 className='tx_white'>Finally, let’s work on your summary</h3>
                                        </div>
                                        <div className='mt-3 row'>
                                            <h6 className='tx_white'>Here’s what you need to know:</h6>
                                        </div>
                                        <div className='mt-1 row'>
                                            <h6 className='tx_white px400'>Your summary shows employers you’re right for their job.</h6>
                                        </div>
                                        <div className='row'>
                                            <h6 className='tx_white px400'>We’ll help you write a great one with expert content you can customize</h6>
                                        </div>
                                    </div>
                                    <div className='justify-end align-bottom col-12 col-md-6 d-flex'>
                                        <img src="./images/sksum.png" alt="" />
                                        <img className='perevev3' src="./images/preview.png" alt="" />
                                    </div>
                                </div>


                                <div className='mt-5 mb-5 row ms-5 me-5'>
                                    <div className='justify-start mt-5 col-6 d-flex'>
                                    <Link to="/SKIllPic"><div className='backbtn'>
                                       <h4 className='mt-2'>BACK</h4>
                                        </div></Link>
                                    </div>
                                    <div className='justify-end mt-5 col-6 d-flex'>
                                        <div className='align-middle d-flex wi'>
                                            <h6 className='mt-2 ms-3 me-3 tx54'></h6>
                                        </div>
                                        <button onClick={onChange}><div className='nextbtn2'>
                                  <h4 className='mt-2'>Next</h4>
                                        </div></button>
                                    </div>
                                </div>
                            </div>

                            <div className='justify-center col-12 d-flex hiiden_popBOX'>
                                <div className='mt-5 mb-5 row ms-5 me-5 boxresum'>
                                    <div className='col-12'>
                                        <div className='row upborder'>
                                            <div className='justify-start col-10 d-flex' >
                                                <h3 className='mt-3 ms-2 me-2 tx_white'>Resume Preview</h3>
                                                <h5 className='mt-3 ms-2 me-2 tx_white'>Change Template</h5>
                                            </div>
                                            <div className='justify-end align-middle col-2 d-flex'>
                                                <img className='mt-3 cut me-3' src="./images/cut.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='justify-center col-12 d-flex'>
                                                <img className='mt-5 mb-5' src="./images/peview.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer3 />
            </div>
        </div>
    )
}
