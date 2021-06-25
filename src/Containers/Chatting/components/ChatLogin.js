import React from "react"
import "../main.css"

import firebase from "firebase/app"

import { auth } from "../Firebase"

export default function ChatLogin() {
    return (
            <div id='login-card'>
                <h2>Click Below to start Chatting Now</h2>

                <div
                    className='login-button google'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    Start Chatting
                </div>

                <br/><br/>

            </div>
    )
}
