import './FormUI.css';
import React, { useState, useEffect } from 'react';


const FormUI = () => {
    return (
        <div>
            <div className="FormLayout">
                {/* <button></button> */}
                <h3 className="CentreAllignment">
                    Sign-up
                </h3>
                <h6 className="CentralTag">
                    Its free and will only take a few minutes
                </h6>
                <br/>

                <form>
                    <label>FirstName</label>
                    <br/>
                    <input>

                    </input>
                </form>
                <br/>

                <form>
                    <label>LastName</label>
                    <br/>
                    <input>

                    </input>
                </form>
                <br/>

                <form>
                    <label>Email</label>
                    <br/>
                    <input>

                    </input>
                </form>
                <br/>

                <form>
                    <label>Password</label>
                    <br/>
                    <input>

                    </input>
                </form>
                <br/>

                <form>
                    <label>Confirm Password</label>
                    <br/>
                    <input>

                    </input>
                </form>
                <br/>

                <br/>
                <button>
                    Signup
                </button>

                <h6 className="TermsStyle">
                    By clicking n signup, you are agreeing to our <span>Terms and Conditions</span>
                </h6>
            </div>
            <div>
                <h6 className="TermsStyle">
                    Already have an account?
                    <span>Login</span>
                </h6>
            </div>
        </div>
    );

};

export default FormUI;