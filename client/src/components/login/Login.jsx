import { useRef, useState, useEffect } from "react";
import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  const sectStyle = { "background-color": "#eee" };
  const divCardStyle = { "border-radius": "25px" };

//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [errMsg, setErrMsg] = useState("");

//     useEffect(() => {
//         useRef.current.focus();
//     },[])

//     useEffect(() => {
//         setErrMsg("");
//     }, [user,pwd]) 

//     const handleSubmit = async (e) => { 
//         e.preventDefault();
//     }

   

  return (
    <div className="base-container">
      <section class="vh-100" style={sectStyle}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={divCardStyle}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign In
                      </p>
                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="username"
                              class="form-control"
                            //   ref={userRef}
                            //   autoComplete="off"
                            //   onChange={(e)=>
                            //     setUser(e.target.value)}
                            //     value={user}
                                required
                            />
                            <label htmlFor="" class="form-label">
                              Email
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              autoComplete="off"
                            //   onChange={(e)=>
                                // setPwd(e.target.value)}
                                // value={pwd}
                                required
                            />
                            <label htmlFor="" class="form-label">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <Link
                            to={"/Register"}
                            button
                            type="button"
                            class="btn btn-primary btn-lg"
                          >
                            Register
                          </Link>
                          <button type="submit" class="btn btn-success btn-lg">
                            Log in
                          </button>
                        </div>
                      </form>

                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
        {/* <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive">
          {errMsg}
        </p> */}
                      <img
                        src="https://wallpaperaccess.com/full/4446627.jpg"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
