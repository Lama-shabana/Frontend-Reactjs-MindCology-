import React, {useState} from 'react';
import classes from './Login.module.css';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import Button from 'react-bootstrap/Button';


import ArabicLoggedOutTopBar from "../../Components/LoggedOutTopBar/ArabicLoggedOutTopBar";

import OnlineCounselling from "../../assets/online-therapy.jpg";
import {useHistory} from "react-router-dom";
import * as registrationActions from "./store/LoginActions";
import {connect} from "react-redux";
import {useToasts} from "react-toast-notifications";


const ArabicLogin = (props) => {
    let [userFormState, setUserFormState] = useState({
        username: '',
        password: '',
    })

    let history = useHistory();
    const {addToast} = useToasts()


    const handleLogin = (e) => {
        props.login(userFormState).then((data)=>{
            localStorage.setItem('auth',JSON.stringify(data.payload))
            if(data.payload.userType==="patient"){
                props.loadPatientData({id:data.payload.id}).then((data)=>{
                    if(data.payload.active){
                        if(!data.payload.filledMedicalHistoryForm){
                            history.push('/arabicMedicalHistoryForm')
                        }else {
                            history.push('/patientDashboard')
                        }
                    }else
                    {
                        addToast('عذرا, هذا الحساب ملغي', {
                            appearance: 'error',
                            autoDismiss: false,
                        })
                    }

                    localStorage.setItem('patientData',JSON.stringify(data.payload))
                })}
            else if(data.payload.userType==="therapist") {
                props.loadPatientData({id:data.payload.id}).then((data)=>{
                    localStorage.setItem('therapist',JSON.stringify(data.payload))
                    history.push('/patientDashboard')
                })
                history.push('/therapistDashboard')

            }

            localStorage.setItem('generalUserData',JSON.stringify(data.payload))

            console.log(data.payload,"payload")
            console.log(JSON.parse(localStorage.getItem("auth")),"returned after json")
        })


    }

    return (
        <div>
            <ArabicLoggedOutTopBar/>

            <div className="p-grid p-align-center">
                <div className="p-col-1"/>

                <div className="p-col-5">
                    <img src={OnlineCounselling}
                         alt="logo"/>
                </div>
                <div className="p-col-5">
                    <form
                        // onSubmit={handleLogin}
                    >
                        <div className={classes.LoginPanel}>
                            {/*<ErrorMsg msg={props.loginFailed}/>*/}
                            <div className={classes.LoginForm}>
                            <span className="p-float-label">
                              <InputText id="username" value={userFormState.username}
                                         onChange={(e) => setUserFormState({
                                             ...userFormState,
                                             username: e.currentTarget.value
                                         })}/>
                              <label htmlFor="username">اسم المستخدم</label>
                             </span>
                                <br/>
                                <span className="p-float-label">
                              <Password id="password" value={userFormState.password} feedback={false}
                                        autoComplete={"off"}
                                        style={{width: "100%"}}
                                        onChange={(e) => setUserFormState({
                                            ...userFormState,
                                            password: e.currentTarget.value
                                        })}/>
                              <label htmlFor="password">كلمة السر</label>
                             </span>
                            </div>
                            <br/>
                            <Button style={{
                                color: "white",
                                backgroundColor: "#42235f",
                                width: '95%',
                                marginLeft: "2%",
                                height: "10%"
                            }}
                                    onClick={handleLogin}>تسجيل الدخول</Button>

                            <hr/>
                            <Button variant="link"
                                    className={classes.signUpButton}
                                // style={}
                                    onClick={() => {
                                        props.history.push("/registration")

                                    }}>
                                لست مستخدم حتى الان ؟ <b>سجل الان</b></Button>
                        </div>
                    </form>
                </div>
                <div className="p-col-1"/>

            </div>

            {/*{props.isLoggedIn ? <Redirect to="/dashboard"/> : null}*/}

        </div>


    );
}

const mapStateToProps = state => {
    return {
        // isLoggedIn: state.login.login,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(registrationActions.login(data)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArabicLogin);
