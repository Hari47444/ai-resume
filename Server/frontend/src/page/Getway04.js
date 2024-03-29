import {React, useState} from 'react'
import "./Getway04.css";
import Footer from "../components/Footer";
import Heder_nav2 from "../components/Heder_nav2";
import PaymentModal from "../components/stripe/PaymentModal";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useNavigate, useLocation } from "react-router-dom";


export default function Getway04() {
  const location = useLocation();
  const navigate = useNavigate();
  const packageDetails = location.state?.packageDetails ?? " ";
  const [openModal, setOpenModal] = useState(false);
  const totalPrice = packageDetails.packageValue

  return (
    <div>

      <Heder_nav2 />

      <div className='row bg_blue'>
        <div className='mt-2 col-12 bg_white'>

          <div className='mt-5 mb-4 row ms-5 me-5 box_fream'>
            <div className='col-1'></div>
            <div className='col-10'>
              <div className='mt-5 row'>
                <h1 className='color_blue'>Stripe</h1>
                <hr className='mt-4 mb-4' />
              </div>

              <div className='row'>
                <div className='col-6'>
                  <h5>Haastrup</h5>
                </div>
                <div className='justify-end col-6 d-flex'>
                  <img className='cart_wallet_png' src="./images/Card_Wallet.png" alt="" />
                </div>
              </div>

              <div className='mt-5 row'>
                <div className='col-2'>
                <img className='' src="./images/vect.png" alt="" />
                </div>
                <div className='col-10'>
                  <div className='mt-5 row'>
                    <h3>Technology</h3>
                  </div>
                  
                  <div className='row'>
                    <div className='col-6'>
                      <div className='row'>
                        <div className='col-1'>
                          <h5>Qty: </h5>
                        </div>
                        <div className='col-6'>
                          <h5>1</h5>
                        </div>
                      </div>
                    </div>
                    <div className='justify-end col-6 d-flex'>
                      <h6>$ {totalPrice}</h6>
                    </div>
                  </div>
                  
                  <div className='mt-5 row'>
                    <div className='col-1'></div>
                    <div className='col-10'>
                      <div className='row'>
                        <div className='col-6'>
                          <h5 className='tx_bold'>Subtotal</h5>
                        </div>
                        <div className='justify-end col-6 d-flex'>
                          <h5>$ {totalPrice}</h5>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-6'>
                          <h6 className=''>Sales tax ( 4.5%)</h6>
                        </div>
                        <div className='justify-end col-6 d-flex'>
                          <h6>$ {totalPrice}</h6>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-6'>
                          <h6 className='tx_bold'>Total due</h6>
                        </div>
                        <div className='justify-end col-6 d-flex'>
                          <h6>$ {totalPrice}</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-1'></div>
                  </div>
                  
                </div>
              </div>


              <div className='mt-4 row'>
                <button  onClick={(e)=>{setOpenModal(true)}} className='pay_btn'>
                  <h5 className='color_white'>Pay ${totalPrice}</h5>
                </button>
              </div>

              {/* <div className='mt-4 row'>
                <div className='pay_btn'>
                  <h5 className='color_white'>Pay</h5>
                </div>
              </div> */}

              <div className='mt-4 mb-4 row'>
                <button className='justify-center col-12 d-flex'>
                  <h5>Having trouble to logging in?</h5>
                </button>
              </div>

              <PaymentModal call={openModal} setCall={setOpenModal} Total={totalPrice} packageDetails={packageDetails}/>

            </div>
            <div className='col-1'></div>
          </div>

          <div className='mt-3 mb-3 row ms-5 me-5'>
            <div className='col-12'>
              <h5 className='color_blue'>Cancel and return to My IT</h5>
            </div>
          </div>

        </div>
      </div>


      <Footer />

    </div>
  )
}
