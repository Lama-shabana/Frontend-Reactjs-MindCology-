import React, {useState} from 'react';
import classes from './Login.module.css';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import Button from 'react-bootstrap/Button';
import OnlineCounselling from "../../assets/online-therapy.jpg"
import LoggedOutTopBar from "../../Components/LoggedOutTopBar/LoggedOutTopBar";
import * as registrationActions from "./store/LoginActions";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import * as patientActions from "../Patient/store/PatientActions"
const Login = (props) => {
    let history = useHistory();

    let [userFormState, setUserFormState] = useState({
        username: '',
        password: '',
    })

    const handleLogin = (e) => {
        props.login(userFormState).then((data)=>{
            localStorage.setItem('auth',JSON.stringify(data.payload))
            if(data.payload.userType==="patient"){
                props.getPatientData({id:data.payload.id}).then((data)=>{
                    if(!data.payload.filledMedicalHistoryForm){
                        history.push('/medicalHistoryForm')
                    }else {
                        history.push('/patientDashboard')
                    }
                })

            }
            else if(data.payload.userType==="therapist") {
                history.push('/therapistDashboard')
            }

            localStorage.setItem('userData',JSON.stringify(data.payload))

            console.log(data.payload,"payload")
            console.log(JSON.parse(localStorage.getItem("auth")),"returned after json")
        })


    }


    return (
        <div>
            <LoggedOutTopBar/>

              <div className="p-grid p-align-center">
                        <div className="p-col-1"/>

                        <div className="p-col-5">
                            <img src={OnlineCounselling}
                                 alt="logo"/>
                        </div>
                        <div className="p-col-5">
                            {/*<form*/}
                            {/*    onSubmit={handleLogin}*/}
                            {/*>*/}
                                <div className={classes.LoginPanel}>
                                    {/*<ErrorMsg msg={props.loginFailed}/>*/}
                                    <div className={classes.LoginForm}>
                            <span className="p-float-label">
                              <InputText id="username" value={userFormState.username}
                                         onChange={(e) => setUserFormState({
                                             ...userFormState,
                                             username: e.currentTarget.value
                                         })}/>
                              <label htmlFor="username">Username</label>
                             </span>
                                        <br/>
                                        <span className="p-float-label">
                              <Password id="password" value={userFormState.password} feedback={false} autoComplete={"off"}
                                        style={{width: "100%"}}
                                        onChange={(e) => setUserFormState({
                                            ...userFormState,
                                            password: e.currentTarget.value
                                        })}/>
                              <label htmlFor="password">Password</label>
                             </span>
                                    </div>
                                    <br/>
                                    <Button
                                        onClick={handleLogin}
                                        style={{
                                        color: "white",
                                        backgroundColor: "#42235f",
                                        width: '95%',
                                        marginLeft: "2%",
                                        height: "10%"
                                    }}>Sign in</Button>

                                    <hr/>
                                    <Button variant="link"
                                            className={classes.signUpButton}
                                        // style={}
                                            onClick={() => {
                                                props.history.push("/registration")

                                            }}>
                                        Not a member yet? <b>Sign up now</b></Button>

                                    <Button variant="logout"
                                            className={classes.signUpButton}
                                        // style={}
                                            onClick={() => {
                                                localStorage.clear()
                                            }}>logout</Button>
                                </div>
                            {/*</form>*/}
                        </div>
                        <div className="p-col-1"/>

                    </div>

            {/*{props.isLoggedIn ? <Redirect to="/dashboard"/> : null}*/}
            {/*{console.log(props.isLoggedIn,"test")}*/}
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
        logout:()=>dispatch(registrationActions.logout(null)),
        getPatientData:(data)=>dispatch(patientActions.getProfileData(data))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
