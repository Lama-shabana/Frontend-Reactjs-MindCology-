import React, {useState} from 'react';
import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";
import classes from "./Registration.module.css"
import {Button} from "primereact/button";
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import {Steps} from "primereact/steps";
// import {connect} from "react-redux";
// import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import {useToasts} from "react-toast-notifications";
// import * as EmailValidator from 'node-email-validation';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Password } from 'primereact/password';


const ArabicRegistration = () => {

    const [patientInfo, setPatientInfo] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        country: "",
        city: "",
        mobileNumber: "",
        email: "",
        username:"",
        password:"",
    })
    const genders = [
        {id: 1, name: "Female"},
        {id: 2, name: 'Male'},
    ]

    const {addToast} = useToasts()


    function patientInfoSection() {
        return <div className={classes.regForm}>
            <div className="p-grid">
                <div className="p-col-2"/>
                <div className="p-col-2">
                    <label className={classes.Label}>Full Name</label>
                </div>
                <div className="p-col-3">
                    <span className="p-float-label">
                        <InputText
                            value={patientInfo.firstName}
                            className={classes.Fields}
                            onChange={(e) =>
                                setPatientInfo({
                                    ...patientInfo,
                                    firstName: e.currentTarget.value
                                })}/>
                         <label htmlFor='firstName'> First Name</label>
                    </span>
                </div>
                <div className="p-col-3">
                    <span className="p-float-label">
                        <InputText
                            id="lastName"
                            value={patientInfo.lastName}
                            className={classes.Fields}
                            onChange={(e) =>
                                setPatientInfo({
                                    ...patientInfo,
                                    lastName: e.currentTarget.value
                                })}/>
                         <label htmlFor='lastName'>Last Name</label>
                   </span>
                </div>
                <div className="p-col-2"/>


                <div className="p-col-2"/>
                <div className="p-col-2">
                    <label className={classes.Label}>Gender and Age</label>
                </div>
                <div className="p-col-3">
                    <Dropdown
                        className={classes.Fields}
                        value={patientInfo.gender}
                        options={genders}
                        optionLabel="name"
                        optionValue="id"
                        placeholder="Gender "
                        onChange={(e) => {
                            setPatientInfo({
                                ...patientInfo,
                                email: e.value,
                            })
                        }}
                    />
                </div>
                <div className="p-col-3">
                    <InputText
                        keyfilter="int"
                        className={classes.Fields}
                        value={patientInfo.age}
                        onChange={(e) => {
                            if (e.currentTarget.value.charAt(e.currentTarget.value.length - 1) !== "-") {
                                setPatientInfo({
                                    ...patientInfo,
                                    age: e.currentTarget.value
                                })
                            }
                        }
                        }/>
                </div>
                <div className="p-col-2"/>
                <div className="p-col-2"/>
                <div className="p-col-2">
                    <label className={classes.Label}>Country and City</label>
                </div>
                <div className="p-col-3">
                    <CountryDropdown
                        defaultOptionLabel="Country"
                        classes={classes.countriesAndCities}
                        value={patientInfo.country}
                        onChange={(e) => {
                            setPatientInfo({
                                ...patientInfo,
                                country: e,
                            })
                        }}/>
                </div>
                <div className="p-col-3">
                    <RegionDropdown
                        defaultOptionLabel="City"
                        classes={classes.countriesAndCities}
                        country={patientInfo.country}
                        value={patientInfo.city}
                        onChange={(e) => {
                            setPatientInfo({
                                ...patientInfo,
                                city: e,
                            })
                        }}/>
                </div>
                <div className="p-col-2"/>

                <div className="p-col-2"/>
                <div className="p-col-2">
                    <label className={classes.Label}>Mobile Number</label>
                </div>
                <div className="p-col-6">
                    <PhoneInput
                        inputStyle={{width: "100%"}}
                        country={'ps'}
                        placeholder='Enter your phone Number'
                        value={patientInfo.mobileNumber}
                        onChange={phone =>
                            setPatientInfo({
                                ...patientInfo,
                                mobileNumber: phone,
                            })}
                    />
                </div>
                <div className="p-col-2"/>

                <div className="p-col-2"/>
                <div className="p-col-2">
                    <label className={classes.Label}>Email</label>
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
                <div className="p-col-2">
                    <label className={classes.Label}>Username</label>
                </div>
                <div className="p-col-6">
                    <InputText
                        value={patientInfo.username}
                        className={classes.Fields}
                        onChange={(e) => {
                            setPatientInfo({
                                ...patientInfo,
                                username: e.currentTarget.value,
                            })
                        }}
                    />
                </div>
                <div className="p-col-2"/>

                <div className="p-col-2"/>
                <div className="p-col-2">
                    <label className={classes.Label}>Password</label>
                </div>
                <div className="p-col-6">
                    <Password  value={patientInfo.password} toggleMask

                               onChange={(e) => setPatientInfo({
                                   ...patientInfo,
                                   password: e.currentTarget.value
                               })}/>
                </div>
                <div className="p-col-2"/>




            </div>
            <div className="p-grid p-justify-end">

                <Button label="Finish"
                        style={{marginTop: "2em", height: "3em"}}
                        className="primaryBtn"
                        icon="pi pi-step-forward"
                        onClick={() => {
                            // if (!validator.validate(patientInfo.email)) {
                            //     addToast('Please enter a valid email', {
                            //         appearance: 'error',
                            //         autoDismiss: true,
                            //     })
                            // } else
                            if (patientInfo.email !== "") {
                                // props.checkIfEmailExists({email: patientInfo.email}).then((data) => {
                                //     if (data.payload.data) {
                                //         addToast('This email already exists. Please try again.', {
                                //             appearance: 'error',
                                //             autoDismiss: true,
                                //         })
                                //     } else
                                //         setActiveIndex(activeIndex + 1)
                                // })

                            }

                        }}
                />
                <div className="p-col-2"/>

            </div>
        </div>
    }

    function displayForm() {
        return patientInfoSection()
        // else if (activeIndex === 1) {
        //     return businessProfileSection(MSME)
        // } else if (activeIndex === 2) {
        //     return businessProfileSectionPartTwo(MSME)
        // }
    }

    function handleRegistration() {
        // let allFieldsFilled = true;
        // if (selectedAccountType === 1 || selectedAccountType === 2) {
        //     Object.keys(patientInfo).map((field) => {
        //         if (allFieldsFilled && patientInfo[field] === "") {
        //             allFieldsFilled = false
        //         }
        //     })
        //
        //     Object.keys(businessProfile).map((field) => {
        //         if (allFieldsFilled && businessProfile[field] === "") {
        //             allFieldsFilled = false
        //         }
        //     })
        //
        //     if (!allFieldsFilled) {
        //         addToast('Please fill all the required fields', {
        //             appearance: 'error',
        //             autoDismiss: true,
        //         })
        //     } else if (!validator.validate(patientInfo.email) || !validator.validate(businessProfile.email) || !validator.validate(businessProfile.contactPersonEmail)) {
        //         addToast('Please enter a valid email', {
        //             appearance: 'error',
        //             autoDismiss: true,
        //         })
        //     } else {
        //         props.createAccount({
        //             MSMEOwner: {
        //                 patientInfo: patientInfo,
        //                 businessProfile: {
        //                     BP_legalName: businessProfile.legalName,
        //                     BP_registrationNumber: businessProfile.registrationNumber,
        //                     BP_yearsOfEstablishment: businessProfile.yearsOfEstablishment.toString(),
        //                     BP_brandName: businessProfile.brandName,
        //                     BP_website: businessProfile.website,
        //                     BP_email: businessProfile.email,
        //                     BP_country: businessProfile.country,
        //                     BP_city: businessProfile.city
        //                 },
        //                 businessDetails: {
        //                     BD_companyVision: businessProfile.companyVision,
        //                     BD_businessDescription: businessProfile.businessDescription,
        //                     BD_productsAndServices: businessProfile.productsAndServices,
        //                     BD_targetedCustomers: businessProfile.targetedCustomers,
        //                     BD_competition: businessProfile.competition,
        //                     BD_competitiveAdvantage: businessProfile.competitiveAdvantage,
        //                     BD_hasDataForFinancialStatement: businessProfile.hasDataForFinancialStatement
        //                 },
        //                 contactPerson: {
        //                     CP_name: businessProfile.contactPersonName,
        //                     CP_jobTitle: businessProfile.contactPersonJobTitle,
        //                     CP_phone: businessProfile.contactPersonPhone,
        //                     CP_email: businessProfile.contactPersonEmail
        //                 }
        //             }
        //
        //         }).then(data => {
        //             if (data.payload.valid) {
        //                 addToast('Successfully Registered', {
        //                     appearance: 'success',
        //                     autoDismiss: true,
        //                 })
        //             } else addToast('Something went wrong', {
        //                 appearance: 'error',
        //                 autoDismiss: true,
        //             })
        //         })
        //         if (businessProfile.hasDataForFinancialStatement) {
        //             // return <div>hi</div>
        //             props.history.push('/entity/GeneralInfo')
        //         }
        //
        //     }
        //     if (businessProfile.hasDataForFinancialStatement) {
        //         return <div>hi</div>
        //         // props.history.push('/entity/GeneralInfo')
        //
        //     }

    }


    return (
        <div>

            {console.log(patientInfo)}
            {/*<header className={classes.Topbar}/>*/}
            <h2 className="p-col-fixed">
                Registration
            </h2>
            <hr/>
            {displayForm()}
        </div>


    );
}

// const mapStateToProps = state => {
//         return {};
//     }
// ;
//
// const mapDispatchToProps = dispatch => {
//         return {};
//     }
// ;

export default ArabicRegistration;
