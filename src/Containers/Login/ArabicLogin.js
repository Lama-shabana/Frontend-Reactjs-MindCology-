import React, {useEffect, useState} from 'react';
import classes from './Login.module.css';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import Button from 'react-bootstrap/Button';


import ArabicLoggedOutTopBar from "../../Components/TopBar/ArabicLoggedOutTopBar";
import LoggedOutTopBar from "../../Components/TopBar/LoggedOutTopBar";
import OnlineCounselling from "../../assets/online-therapy.jpg";


const ArabicLogin=(props) => {
    let [userFormState, setUserFormState] = useState({
        username: '',
        password: '',
    })

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     props.onLogin({
    //         ...userFormState
    //     });
    //
    // }
    // if (props.isLoggedIn) {
    //     props.loadCurrencies()
    // }
    //

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
                              <Password id="password" value={userFormState.password} feedback={false} autoComplete={"off"}
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
                                    لست مستخدم حتى الان ؟      <b>سجل الان</b></Button>
                            </div>
                        </form>
                    </div>
                    <div className="p-col-1"/>

                </div>

                {/*{props.isLoggedIn ? <Redirect to="/dashboard"/> : null}*/}

            </div>




    );
}


export default ArabicLogin;
