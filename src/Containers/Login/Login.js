import React, {useState} from 'react';
import classes from './Login.module.css';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import Button from 'react-bootstrap/Button';
import OnlineCounselling from "../../assets/online-therapy.jpg"
import LoggedOutTopBar from "../../Components/TopBar/LoggedOutTopBar";
import * as registrationActions from "./store/LoginActions";
import {connect} from "react-redux";

const Login = (props) => {
    let [userFormState, setUserFormState] = useState({
        username: '',
        password: '',
    })

    const handleLogin = (e) => {
        props.login({userFormState}).then((data)=>{console.log(data,"payload")})
        // e.preventDefault();
        // props.onLogin({
        //     ...userFormState
        // });

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
                            <form
                                onSubmit={handleLogin}
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
                                    <Button style={{
                                        color: "white",
                                        backgroundColor: "#42235f",
                                        width: '95%',
                                        marginLeft: "2%",
                                        height: "8.5%"
                                    }}
                                        // icon="pi pi-key"
                                            type="submit">Sign in</Button>

                                    <hr/>
                                    <Button variant="link"
                                            className={classes.signUpButton}
                                        // style={}
                                            onClick={() => {
                                                props.history.push("/registration")

                                            }}>
                                        Not a member yet? <b>Sign up now</b></Button>
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
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(registrationActions.login(data)),

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
