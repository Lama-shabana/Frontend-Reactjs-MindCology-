import React, {useEffect, useState} from 'react';
import classes from './Login.module.css';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import Button from 'react-bootstrap/Button';


import ArabicLoggedOutTopBar from "../../Components/TopBar/ArabicLoggedOutTopBar";


const ArabicLogin=() => {
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
        <div className={classes.Background}>
            {/*{props.isLoggedIn ? <Redirect to="/dashboard"/> : null}*/}
            <ArabicLoggedOutTopBar/>
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
                                style={{width:"100%"}}
                                onChange={(e) => setUserFormState({
                                    ...userFormState,
                                    password: e.currentTarget.value
                                })}/>
                      <label htmlFor="password">كلمة السر</label>
                     </span>
                    </div>
                    <br/>
                    <Button style={{color:"white",backgroundColor: "#42235f", width: '95%', marginLeft: "2%", height: "8.5%"}}
                        // icon="pi pi-key"
                            type="submit">تسجيل الدخول</Button>

                    <hr/>
                    <Button variant="link"
                            className={classes.signUpButton}
                        // style={}
                            onClick={() => {

                                // history.push("/arabicregistration")

                            }}>
                        <b>انت لست مستخدم حتى الان ؟  سجل الان   </b> </Button>
                </div>
            </form>
        </div>
    );
}


export default ArabicLogin;
