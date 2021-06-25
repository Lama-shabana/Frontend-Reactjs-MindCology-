import React from "react"
import "../main.css"

import firebase from "firebase/app"

import { auth } from "../Firebase"

export default function ChatLogin() {
    return (
        <div id='login-page'>
            <div id='login-card'>
                <h2>Welcome to Unichat!</h2>

                <div
                    className='login-button google'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    Sign In with Google
                </div>

                <br/><br/>

            </div>
        </div>
    )
}
