import React from 'react'
import "../component/Login.css"

const Login = () => {
    return(
        <div>
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 "  style={{marginTop: "200px"}}>
                   <div className="card p-4">
                        <div className="card-body" >
                            <div className="form-group" style={{marginBottom: "20px"}}>
                                <label>Username</label>
                                <input type="text" placeholder="Username" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label >Password</label>
                                <input type="password" placeholder="Password" className="form-control" />
                            </div>
                            <button style={{marginTop: "20px"}}>Submit</button>
                        </div>
                   </div>
              </div>  
                </div>
            </div>
        </div>
    )
}

export default Login
