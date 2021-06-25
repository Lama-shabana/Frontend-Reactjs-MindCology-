import React from "react"

import firebase from "firebase/app"

import {auth} from "../Firebase"
import classes from "../../Patient/TakeAppointment/TakeAppointment.module.css";
import image from "../../../assets/chattingImg.png"

export default function ChatLogin() {
    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div className="p-grid" style={{marginTop:"10em"}}>
            <div className="p-col-7">
                <img src={image} width={650}/>
            </div>
            <div className="p-col-4" style={{textAlign:"center"}}>
                <br/>
                <br/>
                {lang==="english"?
                    <div>
                        <br/>

                        <h2>Click Below to Start Chatting</h2>
                        <hr/>

                        <div
                            className='login-button google'
                            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                        >
                            Start Chatting
                        </div>
                    </div>

                    :
                    <div>
                        <br/>

                        <h2>انقر  لبدء الدردشة</h2>
                        <hr/>

                        <div
                            className='login-button google'
                            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                        >
                            ابدأ الدردشة

                        </div>
                    </div>

                   }

                {/*<div*/}
                {/*    className='login-button google'*/}
                {/*    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}*/}
                {/*>*/}
                {/*    Start Chatting*/}
                {/*</div>*/}
            </div>
            <div className="p-col-1"/>


            </div>

    )
}
