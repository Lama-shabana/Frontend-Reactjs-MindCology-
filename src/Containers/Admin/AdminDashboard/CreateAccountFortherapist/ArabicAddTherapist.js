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
const ArabicAddTherapist = (props) => {

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

    const genders = ["انثى","ذكر"]

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
            addToast('لو سمحت أملأ كل البيانات', {
                appearance: 'error',
                autoDismiss: true,
            })
        } else if (!(validator.validate(therapistInfo.email))) {
            addToast('يرجى إدخال البريد الإلكتروني الصحيح', {
                appearance: 'error',
                autoDismiss: true,
            })
        } else
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
                        addToast('تم إنشاء الحساب بنجاح', {
                            appearance: 'success',
                            autoDismiss: true,
                        })

                    } else
                        addToast('هناك خطأ ما', {
                            appearance: 'error',
                            autoDismiss: true,
                        })
                }
            )
    }


    function therapistInfoSection() {

        return <div className={classes.Form}>
            <div >
                <label className={classes.headerLabel}>
                    <span className={classes.Hh1}> انشاء حساب جديد لمعالج </span>
                    <img style={{borderRadius: "10%",width:"12%",paddingTop:"1.2em",paddingBottom:"1.2em"}} src={addtherapist}/>

                </label>
            </div>
            <div className="p-grid">
                <div className="p-col-2"/>

                <div className="p-col-3">
                    <span className="p-float-label">
                        <InputText
                            placeholder="الاسم الاول"
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
                            placeholder="الاسم الاخير"
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
                        placeholder="الجنس "
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
                        placeholder="العمر"
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
                        placeholder='ادخل رفم الهاتف'
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
                               placeholder="البريد الالكتروني"
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
                <div className="p-col-5" style={{marginTop: "1em",paddingBottomBottom:"1em",width:"29em"}}>
                    <span className="p-float-label" style={{width: "100%"}}>
                        <InputText
                            placeholder="اسم المستخدم "
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
                <div className="p-col-3" style={{marginTop: "1em"}}>
                    <span className="p-float-label" style={{}}>
                        <Password id="password"

                                  value={therapistInfo.password}
                                  className={classes.password}
                                  onChange={(e) => setTherapistInfo({
                                      ...therapistInfo,
                                      password: e.currentTarget.value
                                  })}/>
                        <label htmlFor='password'> كلمة المرور</label>
                    </span>
                </div>
                <div className="p-col-2"/>
                <div className="p-col-2"/>

                <div className="p-col-3" style={{marginTop: "1em"}}>
                    <span className="p-float-label" >
                        <InputTextarea
                            placeholder="التخصص"
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
                            placeholder="مستوى الدراسات العليا "
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
                <div className="p-col-4"/>
                <div className="p-col-2"/>

                <div className="p-col-3" style={{marginTop: "1em"}}>
                    <span className="p-float-label" style={{width: "100%"}}>
                        <InputTextarea
                            placeholder="الوصف"
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
                <div className="p-col-3" style={{marginTop: "1em"}}>
                    <span className="p-float-label" style={{width: "100%"}}>
                        <InputTextarea
                            placeholder="رابط الصورة الشخصية"
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
                <div className="p-col-2"/>
                <div className="p-col-2"/>

                <div className="p-col-3" style={{marginLeft:"3em"}}>
                    <Button label="انشاء"
                            style={{marginTop: "0.1em", height: "3em",width: "6em",backgroundColor:"#a474b7"}}
                            className="primaryBtn"
                            icon="pi pi-step-forward"
                            onClick={() => {
                                handleCreateAccountForTherapist()
                            }}/>
                    <div className="p-col-2"/>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ArabicAddTherapist);
