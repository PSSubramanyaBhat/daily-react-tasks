import './RegistrationSamplePage.css';

import CircularAvtar from './CircularAvtar'

import React, { useState } from 'react';

import classNames from 'classnames';


const RegistrationSamplePage = () => {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    // let classes = classNames('Buttons','BtnBorder', 'BtnBorderRound');
    
    

    return (
        <div className="Page">

            {/* <CircularAvtar image={"assets/images/Sasuke Demigod.jpg"} alt={"Tech User Image"}> </CircularAvtar> */}

            <CircularAvtar
                image={"https://cdn3.iconfinder.com/data/icons/unigrid-phantom-human-vol-1/60/011_050_spy_glasses_hat_human_avatar-512.png"}
                alt={"Coder User"}
            >
            </CircularAvtar>


            <h3 class="Heading">
                Sample Registartion form
            </h3>

            <form>
                <input placeholder="Username" size="40" type="text" id="uname" name="uname"
                    // defaultValue={username}
                    // onChange={(event) => {
                    //     setUsername(event.target.value);
                    // }}
                >

                </input>
            </form>

            <form>
                <input placeholder="Password" size="40" type="password" id="pword" name="pword"
                    // onChange={(event) => {
                    //     setPassword(event.target.value);
                    // }}
                >

                </input>
            </form>

            <button
                onClick={(event) => {
                    // alert(
                    //     'Registered Successfully     (save info ? )\n' +
                    //     'Username: ' + `${username}` + '\n' +
                    //     'Password: ' + `${password}` + '\n'
                    // )
                    
                    setUsername(document.getElementById("uname").value);
                    setPassword(document.getElementById("pword").value);
                }}
            >
                <p>Sign-in</p>
            </button>

            
            <h4>
                User details display
            </h4>

            <h5>
                Your Username: {username}
            </h5>

            <h5>
                Your Password: {password}
            </h5>
        </div>
    )
};

export default RegistrationSamplePage;