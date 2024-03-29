import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./Creation.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Creation() {
    const navigate = useNavigate();
    const [pdfDownloadLink, setPdfDownloadLink] = useState(null);
    const [status, setStatus] = useState("Submit");


    const [First_Name, setFirst_Name] = useState('')
    const [Surname, setSurname] = useState('');
    const [Profession, setProfession] = useState('')
    const [District, setDistrict] = useState('');
    const [Country, setCountry] = useState('')
    const [Postal_Code, setPostal_Code] = useState('');
    const [Phone, setPhone] = useState('')
    const [Email, setEmail] = useState('');

    var data = {
        fristname:"", surname:"", profession:"", district:"", biocountry:"", postalcode:"", phone:"", email:"",
        job_title:"", employer:"", city:"", country:"", start:"", end:"", sclname:"", scllocation:"", degree:"", 
        gradestartdate:"", filedofstudy:"", graductionendday:"", skill:"", summary:"",type:""
    }

    const changefristname = (event) => {

        setFirst_Name(event.target.value);
        var id = document.getElementById("fristnamehari");
        if (First_Name !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";
        }

    };

    const changeSurname = (event) => {

        setSurname(event.target.value);
        var id = document.getElementById("Surnamehari");
        if (Surname !== "") {

            id.style.display = "block";
        }
        else {
            id.style.display = "none";

        }

    };

    const changeProfession = (event) => {

        setProfession(event.target.value);
        var id = document.getElementById("Professionhari");

        if (Profession !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";
        }

    };

    const changeDistrict = (event) => {

        setDistrict(event.target.value);
        var id = document.getElementById("Districthari");
        if (District !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";
        }

    };

    const changeCountry = (event) => {

        setCountry(event.target.value);
        var id = document.getElementById("Countryhari");

        if (Country !== "") {

            id.style.display = "block";
        }
        else {
            id.style.display = "none";

        }

    };

    const changePostal_Code = (event) => {

        setPostal_Code(event.target.value);
        var id = document.getElementById("Postal_Codehari");

        if (Postal_Code !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";

        }

    };

    const changePhone = (event) => {

        setPhone(event.target.value);
        var id = document.getElementById("Phonehari");

        if (Phone !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";

        }

    };

    const changeEmail = (event) => {

        setEmail(event.target.value);
        var id = document.getElementById("Emailhari");

        if (Email !== "") {

            id.style.display = "block";
        }
        else {

            id.style.display = "none";

        }

    };

    const next_WH = async (e) => {
        e.preventDefault();
        if (First_Name === "") {
            var id = document.getElementById("fristnamehari");
            id.style.display = "none";
            alert("Fill the Frist name!");

        }
        else if (Surname === "") {

            var id = document.getElementById("Surnamehari");
            id.style.display = "none";
            alert("Fill the Surname!");

        }
        else if (Profession === "") {

            var id = document.getElementById("Professionhari");
            id.style.display = "none";
            alert("Fill the Profession!");

        }
        else if (District === "") {

            var id = document.getElementById("Districthari");
            id.style.display = "none";
            alert("Fill the District!");

        }
        else if (Country === "") {

            var id = document.getElementById("Countryhari");
            id.style.display = "none";
            alert("Fill the Country!");

        }
        else if (Postal_Code === "") {

            var id = document.getElementById("Postal_Codehari");
            id.style.display = "none";
            alert("Fill the Postal_Code!");

        }
        else if (Phone === "") {
            var id = document.getElementById("Phonehari");
            id.style.display = "none";
            alert("Fill the Phone!");

        }
        else if (Email === "") {
            var id = document.getElementById("Emailhari");
            id.style.display = "none";
            alert("Fill the Email!");

        }
        else {

            data.fristname= First_Name;
            data.surname = Surname;
            data.profession = Profession;
            data.district = District;
            data.biocountry = Country;
            data.postalcode = Postal_Code;
            data.phone = Phone;
            data.email = Email;

            navigate("/WorkHistoy", {
                state: {
                  data
                }
            });

            // let response = await fetch("http://localhost:3000/api/generate-pdf", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json;charset=utf-8",
            //     },
            //     body: JSON.stringify(data),
            // });
            // setStatus("Submit");
            // let result = await response.json();

            // sessionStorage.setItem("head2", true);
            // sessionStorage.setItem("pdflink", result.downloadLink);
            // navigate("/WorkHistoy", {
            //     state: {
            //       data
            //     }
            //   });

        }



    }


    return (
        <div>
            <div>
                <Heder_nav4 />

                <div className='bg_list'>
                    <div className=' col-12'>
                        <div className='row ms-3 me-3'>
                            <div className='col-12'>
                                <div className='mt-3 row ms-4'>
                                    <h2 className='tx_white'>What’s the best way for employers to contact you?</h2>
                                </div>
                                <div className='mt-1 row ms-4'>
                                    <h6 className='tx_white'>We suggest including an email and phone number.</h6>
                                </div>
                                <div className='mt-3 row'>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">First Name</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                    onChange={changefristname}
                                                    type='name'
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id="fristnamehari" style={{ display: "none" }} src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">Surname</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                    onChange={changeSurname}
                                                    type='name'
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id="Surnamehari" style={{ display: "none" }} src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">Profession</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                    onChange={changeProfession}
                                                    type='name'
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id="Professionhari" style={{ display: "none" }} src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">District</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                    onChange={changeDistrict}
                                                    type='name'
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id="Districthari" style={{ display: "none" }} src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <div className='row ms-4 me-4'>
                                                    <label className='lableTX' htmlFor="">Country</label>
                                                    <InputGroup className="mb-3 ">
                                                        <Form.Control
                                                            className='bg_input_list'
                                                            placeholder=""
                                                            aria-label="Recipient's username"
                                                            aria-describedby="basic-addon2"
                                                            onChange={changeCountry}
                                                            type='country'
                                                        />
                                                        <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                            <img id="Countryhari" style={{ display: "none" }} src="./images/hari.png" alt="" />
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='row ms-4 me-4'>
                                                    <label className='lableTX' htmlFor="">Postal Code</label>
                                                    <InputGroup className="mb-3 ">
                                                        <Form.Control
                                                            className='bg_input_list'
                                                            placeholder=""
                                                            aria-label="Recipient's username"
                                                            aria-describedby="basic-addon2"
                                                            onChange={changePostal_Code}
                                                            type='number'
                                                        />
                                                        <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                            <img id="Postal_Codehari" style={{ display: "none" }} src="./images/hari.png" alt="" />
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">Phone</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                    onChange={changePhone}
                                                    type='tel'
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id="Phonehari" style={{ display: "none" }} src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row ms-4 me-4'>
                                            <label className='lableTX' htmlFor="">Email</label>
                                            <InputGroup className="mb-3 ">
                                                <Form.Control
                                                    className='bg_input_list'
                                                    placeholder=""
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                    onChange={changeEmail}
                                                    type='email'
                                                    required
                                                />
                                                <InputGroup.Text className='bg_input_list_mini' id="basic-addon2">
                                                    <img id="Emailhari" style={{ display: "none" }} src="./images/hari.png" alt="" />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-3 mb-5 row ms-4 me-4'>
                                    <div className='justify-start col-6 d-flex'>
                                        <Link to="/ChooseLeter"><div className='backbtn'>
                                            <h4 className='mt-2'>BACK</h4>
                                        </div></Link>
                                    </div>
                                    <div onClick={next_WH} className='justify-end col-6 d-flex'>
                                        <div className='nextbtn_his'>
                                            <h4 className='mt-2'>Next: Working History</h4>
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
