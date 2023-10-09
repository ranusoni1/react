import './userhomeComponent.css';
import { useEffect, useState } from 'react';
//import {  useParams } from 'react-router-dom';
import axios from 'axios';
import { _apiurluser } from '../../api_url';

function UserHome() {
  const [userdetails, setUserDetails] = useState([]);
  const [fetchemail, setfetchemail] = useState(localStorage.getItem("email"));
  //const params = useParams();

  useEffect(() => {
    //alert(params.email)

    axios.get(_apiurluser + "fetch?email=" + fetchemail).then((res) => {
      //console.log(res.data[0].email);
      setUserDetails(res.data[0]);
    })
  })

  return (
    <>
      {/* userhome start */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6">
              <h3 class="section-title text-start text-primary text-uppercase">UserHome</h3>
              <h1 class="mb-4">Welcome  <span class="text-primary text-uppercase">User</span></h1>

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
                                  <input type="text" id="form3Example97" class="form-control form-control-lg" value={userdetails.name} style={{ "fontWeight": "bold" }} />
                                  <label class="form-label" for="form3Example97">Name</label>
                                </div> */}

<div class="row">
                                <div class="col-md-6 mb-4">
                                  <div class="form-outline">
                                    <input type="text" id="form3Example1m" class="form-control form-control-lg" value={userdetails.email} style={{ "fontWeight": "bold" }} />
                                    <label class="form-label" for="form3Example1m">Email-ID</label>
                                  </div>
                                  </div>
                                
                                  

                             
                                
                                <br/><br/>

                                

                                <div class="col-md-6 mb-4">
                                  <input type="text" id="form3Example97" class="form-control form-control-lg" value={userdetails.gender} style={{ "fontWeight": "bold" }} />
                                  <label class="form-label" for="form3Example97">Gender</label>
                                </div>
                              </div>



                              <div class="col-md-6 mb-4">
                                  <div class="form-outline">
                                    <input type="text" id="form3Example1n" class="form-control form-control-lg" value={userdetails.mobile} style={{ "fontWeight": "bold" }} />
                                    <label class="form-label" for="form3Example1n">Mobile</label>
                                  </div>


                                </div>
                                <div class="col-md-6 mb-4">
                                <input type="text" id="form3Example9" class="form-control form-control-lg" value={userdetails.city} style={{ "fontWeight": "bold" }} />
                                <label class="form-label" for="form3Example9">City</label>
                              </div>



                              <br />
                              <div class="form-group">
                                <textarea rows="5" class="form-control" value={userdetails.address} style={{ "fontWeight": "bold", "fontSize": "20px" }}></textarea>
                                <label for="address"> Address:</label>
                              </div>
                              <br />




                              <div class="form-outline mb-4">
                                <input type="text" id="form3Example97" class="form-control form-control-lg" value={userdetails.info} style={{ "fontWeight": "bold" }} />
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




            </div>
          </div>
        </div>
      </div>
      {/* userhome End */}
    </>
  );
}

export default UserHome;
