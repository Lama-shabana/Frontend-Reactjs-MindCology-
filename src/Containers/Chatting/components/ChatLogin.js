import React from "react"

import firebase from "firebase/app"

import {auth} from "../Firebase"
import classes from "../../Patient/TakeAppointment/TakeAppointment.module.css";
import image from "../../../assets/chattingImg.png"

export default function ChatLogin() {
    return (
        <div className="p-grid" style={{marginTop:"10em"}}>
            <div className="p-col-7">
                <img src={image} width={650}/>
            </div>
            <div className="p-col-4" style={{textAlign:"center"}}>
                <br/>
                <br/>

                <h2>Click Below to Start Chatting</h2>
                <hr/>
                <br/>
                <div
                    className='login-button google'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    Start Chatting
                </div>
            </div>
            <div className="p-col-1"/>


            </div>

    )
}
