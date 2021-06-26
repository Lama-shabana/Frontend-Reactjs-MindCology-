import React, {useState} from 'react';
import {connect} from "react-redux";
import {useToasts} from "react-toast-notifications";
import classes from "./addAccount.module.css";
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";
import PhoneInput from "react-phone-input-2";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import * as AdminActions from "../store/AdminActions";
import { InputTextarea } from 'primereact/inputtextarea';
import addtherapist from "../../../../assets/therapist.png";

//
// const onImageChange = event => {
//     if (event.target.files && event.target.files[0]) {
//         let img = event.target.files[0];
//         this.setState({
//             image: URL.createObjectURL(img)
//         });
//     }
// };
const AddTherapist = (props) => {

    const [therapistInfo, setTherapistInfo] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        phoneNumber: "",
        email: "",
        username: "",
        password: "",
        educationLevel: "",
        specialization: "",
        description: "",
        ImagePath:""

    })

    const genders = ["Female","Male"]

    const {addToast} = useToasts()

    let validator = require("email-validator");

    function handleCreateAccountForTherapist() {

        let allFieldsFilled = true;

        Object.keys(therapistInfo).map((field) => {
            if (allFieldsFilled && therapistInfo[field] === "") {
                allFieldsFilled = false
            }
        })

        if (allFieldsFilled === false) {
            addToast('Please fill all fields', {
                appearance: 'error',
                autoDismiss: true,
            })
        } else if (!(validator.validate(therapistInfo.email))) {
            addToast('Please enter a valid email', {
                appearance: 'error',
                autoDismiss: true,
            })
        } else
            console.log( {
                "firstName": therapistInfo.firstName,
                "lastName": therapistInfo.lastName,
                "phoneNumber": therapistInfo.phoneNumber,
                "email": therapistInfo.email,
                "gender": therapistInfo.gender,
                "age": therapistInfo.age,
                "username": therapistInfo.username,
                "password": therapistInfo.password,
                "userType": "therapist",
                "educationLevel": therapistInfo.educationLevel,
                "specialization": therapistInfo.specialization,
                "description": therapistInfo.description,
                "ImagePath":therapistInfo.ImagePath,
                "active": true

            },"sent")
            props.createAccountForTherapist(
                {
                    "firstName": therapistInfo.firstName,
                    "lastName": therapistInfo.lastName,
                    "phoneNumber": therapistInfo.phoneNumber,
                    "email": therapistInfo.email,
                    "gender": therapistInfo.gender,
                    "age": therapistInfo.age,
                    "username": therapistInfo.username,
                    "password": therapistInfo.password,
                    "userType": "therapist",
                    "educationLevel": therapistInfo.educationLevel,
                    "specialization": therapistInfo.specialization,
                    "description": therapistInfo.description,
                    "ImagePath":therapistInfo.ImagePath,
                    "active": true

                }
            ).then((data) => {
                    if (data.payload.id) {
                        console.log(data.payload,"receieved")
                        addToast('Account Successfully Created', {
                            appearance: 'success',
                            autoDismiss: true,
                        })

                    } else
                        addToast('Something went wrong', {
                            appearance: 'error',
                            autoDismiss: true,
                        })
                }
            )
    }


        function therapistInfoSection() {

        return <div className={classes.Form}>
            <div >
               {/* <img style={{borderRadius: "50%"}} src={addtherapist}/>*/}
               {/*<h1 */}
               {/*    */}
               {/*    className={classes.Hh1}> Create account for therapist</h1>*/}

                <label className={classes.headerLabel}>
                    <img style={{borderRadius: "10%",width:"12%",paddingTop:"1.2em",paddingBottom:"1.2em"}} src={addtherapist}/>
                    <span className={classes.Hh1}> Create account for therapist</span>

                </label>
            </div>
            <div className="p-grid">
               <div className="p-col-2"/>

                <div className="p-col-3">
                    <span className="p-float-label">
                        <InputText
                            placeholder="First Name"
                            value={therapistInfo.firstName}
                            className={classes.Fields}
                            onChange={(e) =>
                                setTherapistInfo({
                                    ...therapistInfo,
                                    firstName: e.currentTarget.value
                                })}/>

                    </span>
                </div>
                <div className="p-col-3">
                    <span className="p-float-label">
                        <InputText
                            placeholder="Last Name"
                            id="lastName"
                            value={therapistInfo.lastName}
                            className={classes.Fields}
                            onChange={(e) =>
                                setTherapistInfo({
                                    ...therapistInfo,
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
                        value={therapistInfo.gender}
                        options={genders}
                        placeholder="Gender "
                        onChange={(e) => {
                            console.log(e,"gender")
                            setTherapistInfo({
                                ...therapistInfo,
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
                        value={therapistInfo.age}
                        onChange={(e) => {
                            if (e.currentTarget.value.charAt(e.currentTarget.value.length - 1) !== "-") {
                                if(parseInt(e.currentTarget.value)){
                                    setTherapistInfo({
                                        ...therapistInfo,
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
                        value={therapistInfo.phoneNumber}
                        onChange={phone =>
                            setTherapistInfo({
                                ...therapistInfo,
                                phoneNumber: phone,
                            })}
                    />
                </div>
                <div className="p-col-2"/>

                <div className="p-col-2"/>
                <div className="p-col-2">

                </div>
                <div className="p-col-6">
                    <InputText value={therapistInfo.email}
                               className={classes.Fields}
                               placeholder="Email"
                               onChange={(e) => {
                                   setTherapistInfo({
                                       ...therapistInfo,
                                       email: e.currentTarget.value,
                                   })
                               }}
                    />
                </div>
                <div className="p-col-2"/>
                <div className="p-col-2"/>
                <div className="p-col-2" >

                </div>
                <div className="p-col-3" style={{marginTop: "1em",paddingBottomBottom:"1em"}}>
                    <span className="p-float-label" style={{width: "100%"}}>
                        <InputText
                            placeholder="username"
                            id="username"
                            value={therapistInfo.username}
                            className={classes.Fields}
                            onChange={(e) => {
                                setTherapistInfo({
                                    ...therapistInfo,
                                    username: e.currentTarget.value,
                                })
                            }}
                        />

                    </span>
                </div>
                <div className="p-col-3" style={{marginTop: "0.5em"}}>
                    <span className="p-float-label" style={{width: "100%"}}>
                        <Password id="password"

                                  value={therapistInfo.password}
                                  className={classes.password}
                                  onChange={(e) => setTherapistInfo({
                                      ...therapistInfo,
                                      password: e.currentTarget.value
                                  })}/>
                        <label htmlFor='password'> Password</label>
                    </span>
                </div>
                <div className="p-col-2"/>
                <div className="p-col-2"/>
                <div className="p-col-2"/>
                <div className="p-col-3" style={{marginTop: "1em"}}>
                    <span className="p-float-label" style={{width: "100%"}}>
                        <InputTextarea
                            placeholder="specialization"
                            id="specialization"
                            value={therapistInfo.specialization}
                            className={classes.area}
                            onChange={(e) => {
                                setTherapistInfo({
                                    ...therapistInfo,
                                    specialization: e.currentTarget.value,
                                })
                            }}
                        />

                    </span>
                </div>

                <div className="p-col-3" style={{marginTop: "1em"}}>
                    <span className="p-float-label" style={{width: "100%"}}>
                        <InputTextarea
                            placeholder="educationLevel"
                            id="educationLevel"
                            value={therapistInfo.educationLevel}
                            className={classes.area}
                            onChange={(e) => {
                                setTherapistInfo({
                                    ...therapistInfo,
                                    educationLevel: e.currentTarget.value,
                                })
                            }}
                        />

                    </span>
                </div>
                <div className="p-col-2" style={{marginTop: "1em"}}>
                    <span className="p-float-label" style={{width: "100%"}}>
                        <InputTextarea
                            placeholder="description"
                            id="description"
                            value={therapistInfo.description}
                            className={classes.area}
                            onChange={(e) => {
                                setTherapistInfo({
                                    ...therapistInfo,
                                    description: e.currentTarget.value,
                                })
                            }}
                        />

                    </span>
                </div>
                <div className="p-col-2"/>
                <div className="p-col-2"/>
                <div className="p-col-2">
                    <div>
                        <div>
                            <div>
                                {/*<img src={this.state.image} />*/}
                                <Button label="select image"
                                        style={{marginTop: "2em", height: "3em",width: "12em",backgroundColor:" #a474b7"}}
                                        className="primaryBtn"
                                        icon='pi pi-fw pi-images'
                                />
                                <input style={{marginTop: "1em",color:" #a474b7",border:"4em"}}
                                       type="file" name="myImage" placeholder="select image"
                                       onChange={(e) => {
                                           setTherapistInfo({
                                               ...therapistInfo,
                                               ImagePath: e.currentTarget.value,
                                           })
                                       }}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-grid p-justify-end">
                <Button label="Finish"
                        style={{marginTop: "0.1em", height: "3em",width: "6em",backgroundColor:"#a474b7"}}
                        className="primaryBtn"
                        icon="pi pi-step-forward"
                        onClick={() => {
                            handleCreateAccountForTherapist()
                        }}/>
                <div className="p-col-2"/>
            </div>
        </div>
    }
    return (
        <div style={{paddingTop:"4em"}}>

        {therapistInfoSection()}
    </div>

    );
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        createAccountForTherapist: (data) => dispatch(AdminActions.createAccountForTherapist(data)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTherapist);
