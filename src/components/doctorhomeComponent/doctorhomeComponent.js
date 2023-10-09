import './doctorhomeComponent.css';
import { useEffect, useState } from 'react';
//import {  useParams } from 'react-router-dom';
import axios from 'axios';
import { _apiurldoctor } from '../../api_urldoctor';

function DoctorHome() {
  
  const [docdetails, setDocDetails] = useState([]);
  const [fetchemail, setfetchemail]= useState(localStorage.getItem("email"));
  //const params = useParams();
 
  useEffect(() => {
    //alert(params.email)
    
    axios.get(_apiurldoctor + "fetch?email=" + fetchemail).then((res) => {
      //console.log(res.data[0].email);
      setDocDetails(res.data[0]);
    })
  })
  return (
    <>
      {/* userhome start */}
      <div class="container-xxl py-12">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-12">
              <h3 class="section-title text-start text-primary text-uppercase">Doctor Home</h3>
              <h1 class="mb-4">Welcome  <span class="text-primary text-uppercase">Doctor</span></h1>
               <center>
                <img src={"assets/uploads/profilepic" + (docdetails.profilepic)} class="rounded-circle" style={{ "width": "150px" }} alt="Avatar" />
                <h3>{docdetails.name}</h3>


                 <section class="h-100 ">
                  <div class="container">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                      <div class="col">
                        <div class="card card-registration my-4">
                          <div class="row g-0">

                            <div class="col-xl-12">
                              <div class="card-body p-md-5 text-black">
                                <h3 class="mb-5 text-uppercase">Doctors Details</h3>

                                {/* <div class="form-outline mb-4">
                                  <input type="text" id="form3Example97" class="form-control form-control-lg" value={docdetails.name} style={{ "fontWeight": "bold" }} />
                                  <label class="form-label" for="form3Example97">Name</label>
                                </div> */}

                                <div class="row">
                                  <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                      <input type="text" id="form3Example1m" class="form-control form-control-lg" value={docdetails.email} style={{ "fontWeight": "bold" }} />
                                      <label class="form-label" for="form3Example1m">Email-ID</label>
                                    </div>
                                  </div>
                                  <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                      <input type="text" id="form3Example1n" class="form-control form-control-lg" value={docdetails.personalmobile} style={{ "fontWeight": "bold" }} />
                                      <label class="form-label" for="form3Example1n">Mobile-personal</label>
                                    </div>
                                  </div>
                                </div>

                                <div class="row">
                                  <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                      <input type="text" id="form3Example1m1" class="form-control form-control-lg" value={docdetails.clinicmobile} style={{ "fontWeight": "bold" }} />
                                      <label class="form-label" for="form3Example1m1">Mobile-Clinic</label>
                                    </div>
                                  </div>
                                  <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                      <input type="text" id="form3Example1n1" class="form-control form-control-lg" value={docdetails.experience} style={{ "fontWeight": "bold" }} />
                                      <label class="form-label" for="form3Example1n1">Experience(in year)</label>
                                    </div>
                                  </div>
                                </div>

                                <div class="form-group">
                                  <textarea rows="5" class="form-control" value={docdetails.clinicaddress} style={{ "fontWeight": "bold", "fontSize": "20px" }}></textarea>
                                  <label for="Clinicaddress">clinic_address:</label>
                                </div>
                                <br />
                                <div class="form-group">
                                  <textarea rows="5" class="form-control" value={docdetails.residentialaddress} style={{ "fontWeight": "bold", "fontSize": "20px" }}></textarea>
                                  <label for="Clinicaddress">Residential Address:</label>
                                </div>
                                <br />

                                <div class="form-group">
                                  <textarea rows="5" class="form-control" value={docdetails.contactdescription} style={{ "fontWeight": "bold", "fontSize": "20px" }}></textarea>
                                  <label for="Clinicaddress">Contact description :</label>
                                </div>
                                <br />

                                

                                <div class="form-outline mb-4">
                                  <input type="text" id="form3Example90" class="form-control form-control-lg" value={docdetails.designation} style={{ "fontWeight": "bold" }} />
                                  <label class="form-label" for="form3Example90">Designation</label>
                                </div>

                                <div class="form-outline mb-4">
                                  <input type="text" id="form3Example99" class="form-control form-control-lg" value={docdetails.specialization} style={{ "fontWeight": "bold" }} />
                                  <label class="form-label" for="form3Example99">Specialization</label>
                                </div>

                                

                                <div class="form-outline mb-4">
                                  <input type="text" id="form3Example97" class="form-control form-control-lg" value={docdetails.info} style={{ "fontWeight": "bold" }} />
                                  <label class="form-label" for="form3Example97">REGISTRATION INFO</label>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section> 
              </center> 


              {/* <div class="container-fluid  p-0">
        <div class="row g-0">
            <div class="col-lg-12">
                <br/>
                <h1 class="display-5 mb-4">View <span class="text-primary">Doctor Profile</span></h1>
                {params._id} 
                <ul>
                    <li>{doctordetails.email}</li>
                </ul>

            </div>            
        </div>
    </div>*/}



            </div>
          </div>
        </div>
      </div>
      {/* userhome End */}
    </>
  );
}

export default DoctorHome;
