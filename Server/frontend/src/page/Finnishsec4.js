import React,{ useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Footer3 from "../components/Footer3";
import Heder_nav7 from "../components/Heder_nav7";
import Dropdown from 'react-bootstrap/Dropdown';
import "./Finnishsec4.css";
import axios from 'axios';
import { Link, useNavigate, useLocation } from "react-router-dom";
import resumerServices from "../services/resumeServices"
import ToasterMessage from "../helpers/ToasterMessage";


export default function Finnishsec4() {
  const location = useLocation();
  const navigate = useNavigate();
  const resumeDetails = location?.state?.data??{};
  console.log("resumeDetails::: ",resumeDetails)


  const [pdfDownloadLink, setPdfDownloadLink] = useState(null);

  const onChange = async () =>{
    localStorage.setItem("resumeDetails",JSON.stringify(resumeDetails));

    try {
      const resumeGeneration = await resumerServices.resumeGenerate({resumeDetails:resumeDetails});
      if (resumeGeneration.success) {
        navigate("/generatePdf", {state: {
          data : resumeDetails
        }});
      }else{
        ToasterMessage.errorMessage({
          custom_message: 'Could not generate the resume!, try again!',
      });
      }
    } catch (error) {
    }


}

  // useEffect(() => {
  //   // Make an API request to the backend to get the PDF download URL
  //   // You can use axios or the fetch API to make the request
  //   // Set the received PDF download URL in the state
  //   // Example:
  //   axios.get('/generate-pdf')
  //   .then(response => setPdfDownloadLink(response.data.downloadLink))
  //   .catch(error => console.error(error));
  //   }, []);

  return (
    <div>
      <div className="bodyfc1">
        <Heder_nav7 />

        <div class="v530_3681">

          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="v530_3688"></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>

          
          <div class="v530_3889new2">
            <span class="v530_3890new ">Back to dashord</span>
          </div>
   

          <button class="v530_3889newset" onClick={onChange}>
            <span class="v530_3890 ms-4 mt-3">Download</span>
            <span class="v530_3891 ms-4 mt-3">PDF,JPG,PNG</span>
            <div class="v530_3892 ms-4 mt-3"></div>
          </button>
        </div>

       

        <Footer3 />
      </div>
    </div>
  );
}
