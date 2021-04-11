import React, {useState} from 'react';
import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";
import classes from "./Registration.module.css"
import {Button} from "primereact/button";
import 'react-phone-number-input/style.css'
import {useToasts} from "react-toast-notifications";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {Password} from 'primereact/password';
import * as registrationActions from "./store/RegistrationActions"
import LoggedOutTopBar from "../../Components/LoggedOutTopBar/LoggedOutTopBar";
import {connect} from 'react-redux';
import "./Registration.css";
import imgaccount from'../../assets/PinClipart.com_broadway-clip-art_4511595.png';
import MindCology from "../../assets/MindCology.png";
const Registration = (props) => {

    const [patientInfo, setPatientInfo] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        phoneNumber: "",
        email: "",
        username: "",
        password: "",
    })



    const genders = ["Female","Male"]

    const {addToast} = useToasts()

    let validator = require("email-validator");

    function patientInfoSection() {
        return <div className={classes.regForm}>
            <div className={classes.Signup}>
                Sign up
            </div>
            <div className="p-grid">

                <div className="p-col-1" >
                    <a  href="/registration" className={classes.Signup}>
                        <img   className ={classes.image} src={imgaccount}
                             alt="logo"/>
                    </a>
                     </div>

                <div className="p-col-1"/>
                <div className="p-col-2"/>
                <div className="p-col-3">
                    <span className="p-float-label">
                        <InputText
                            placeholder="First Name"
                            value={patientInfo.firstName}
                            className={classes.Fields}
                            onChange={(e) =>
                                setPatientInfo({
                                    ...patientInfo,
                                    firstName: e.currentTarget.value
                                })}/>

                    </span>
                </div>
                <div className="p-col-3">
                    <span className="p-float-label">
                        <InputText
                            placeholder="Last Name"
                            id="lastName"
                            value={patientInfo.lastName}
                            className={classes.Fields}
                            onChange={(e) =>
                                setPatientInfo({
                                    ...patientInfo,
                                    lastName: e.currentTarget.value
                                })}/>

                   </span>
                </div>
                <div className="p-col-1"/>
                <div className="p-col-2"/>
                <div className="p-col-2"/>

                <div className="p-col-3">
                    <Dropdown
                        className={classes.Fields}
                        value={patientInfo.gender}
                        options={genders}
                        placeholder="Gender "
                        onChange={(e) => {
                            console.log(e,"gender")
                            setPatientInfo({
                                ...patientInfo,
                                gender: e.value,
                            })
                        }}
                    />
                </div>
                <div className="p-col-3">
                    <InputText
                        placeholder="Age"
                        keyfilter="int"
                        className={classes.Fields}
                        value={patientInfo.age}
                        onChange={(e) => {
                            if (e.currentTarget.value.charAt(e.currentTarget.value.length - 1) !== "-") {
                                if(parseInt(e.currentTarget.value)){
                                    setPatientInfo({
                                        ...patientInfo,
                                        age: parseInt(e.currentTarget.value)
                                    })
                                }
                            }
                        }
                        }/>
                </div>
                <div className="p-col-2"/>
                <div className="p-col-2"/>


                <div className="p-col-2">

                </div>
                <div className="p-col-6">
                    <PhoneInput
                        inputStyle={{width: "100%"}}
                        country={'ps'}
                        placeholder='Enter your phone Number'
                        value={patientInfo.phoneNumber}
                        onChange={phone =>
                            setPatientInfo({
                                ...patientInfo,
                                phoneNumber: phone,
                            })}
                    />
                </div>
                <div className="p-col-2"/>

                <div className="p-col-2"/>
                <div className="p-col-2">

                </div>
                <div className="p-col-6">
                    <InputText value={patientInfo.email}
                               className={classes.Fields}
                               placeholder="Email"
                               onChange={(e) => {
                                   setPatientInfo({
                                       ...patientInfo,
                                       email: e.currentTarget.value,
                                   })
                               }}
                    />
                </div>
                <div className="p-col-2"/>
                <div className="p-col-2"/>
                <div className="p-col-2" >

                </div>
                <div className="p-col-3" style={{marginTop: "0.5em"}}>
                    <span className="p-float-label">
                        <InputText
                            placeholder="Enter your username"
                            id="username"
                            value={patientInfo.username}
                            className={classes.Fields}
                            onChange={(e) => {
                                setPatientInfo({
                                    ...patientInfo,
                                    username: e.currentTarget.value,
                                })
                            }}
                        />

                    </span>
                </div>
                <div className="p-col-3" style={{marginTop: "0.5em"}}>
                    <span className="p-float-label" style={{width: "100%"}}>
                        <Password id="password"

                                  value={patientInfo.password}
                                  className={classes.password}
                                  onChange={(e) => setPatientInfo({
                                      ...patientInfo,
                                      password: e.currentTarget.value
                                  })}/>
                        <label htmlFor='password'> Password</label>
                    </span>
                </div>

            </div>
            <div className="p-grid p-justify-end">

                <Button label="Finish"
                        style={{marginTop: "2em", height: "3em"}}
                        className="primaryBtn"
                        icon="pi pi-step-forward"
                        onClick={() => {
                            handleRegistration()
                        }}/>
                <div className="p-col-2"/>
            </div>
        </div>
    }



    function handleRegistration() {

        let allFieldsFilled = true;

        Object.keys(patientInfo).map((field) => {
            if (allFieldsFilled && patientInfo[field] === "") {
                allFieldsFilled = false
            }
        })

        if (allFieldsFilled === false) {
            addToast('Please fill all fields', {
                appearance: 'error',
                autoDismiss: true,
            })
        } else if (!(validator.validate(patientInfo.email))) {
            addToast('Please enter a valid email', {
                appearance: 'error',
                autoDismiss: true,
            })
        }else 
        props.createAccount(
            {
                "firstName": patientInfo.firstName,
                "lastName": patientInfo.lastName,
                "phoneNumber": patientInfo.phoneNumber,
                "email": patientInfo.email,
                "gender":patientInfo.gender,
                "age": patientInfo.age,
                "username": patientInfo.username,
                "password": patientInfo.password,
                "filledMedicalForm": "false",
                "userType": "patient"
            }
        ).then((data) => {
                if (data.payload.id) {
                    addToast('Account Successfully Created', {
                        appearance: 'success',
                        autoDismiss: true,
                    })
                    props.history.push("/login")
                } else
                    addToast('Something went wrong', {
                        appearance: 'error',
                        autoDismiss: true,
                    })
            }
        )

    }


    return (
        <div>
            <LoggedOutTopBar/>
            {/*<h2 className="p-col-fixed">*/}
            {/*    Registration*/}
            {/*</h2>*/}
            {/*<hr/>*/}
            {patientInfoSection()}
        </div>


    );
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        createAccount: (data) => dispatch(registrationActions.createAccount(data)),

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);