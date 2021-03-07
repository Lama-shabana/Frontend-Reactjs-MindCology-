import React, {useState} from 'react';
import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";
import classes from "./Registration.module.css"
import {Button} from "primereact/button";
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import {Steps} from "primereact/steps";
import {connect} from "react-redux";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import {useToasts} from "react-toast-notifications";

const Registration = (props) => {


    const [ownerProfile, setOwnerProfile] = useState({
        accountType: "",
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        country: "",
        city: "",
        address: "",
        mobileNumber: "",
        email: "",
    })
    const genders = [
        {id: 1, name: "Female"},
        {id: 2, name: 'Male'},
    ]

    const registrationSteps = [
        {
            label: "General Info"
        },
        {
            label: 'Medical History Pt1',
        },
        {
            label: 'Medical History Pt2',
        },

    ];

    const [activeIndex, setActiveIndex] = useState(0)
    const {addToast} = useToasts()
    let validator = require("email-validator");

    //
    // function emailValidationOnSteps(newIndex) {
    //     if (newIndex > activeIndex) {
    //         if (selectedAccountType === 1 || selectedAccountType === 2) {
    //             if (activeIndex === 1 && !validator.validate(ownerProfile.email)) {
    //                 addToast('Please enter a valid email', {
    //                     appearance: 'error',
    //                     autoDismiss: true,
    //                 })
    //             } else if (activeIndex === 2 && !validator.validate(businessProfile.email)) {
    //                 addToast('Please enter a valid email', {
    //                     appearance: 'error',
    //                     autoDismiss: true,
    //                 })
    //             } else if (activeIndex === 3 && !validator.validate(businessProfile.contactPersonEmail)) {
    //                 addToast('Please enter a valid email', {
    //                     appearance: 'error',
    //                     autoDismiss: true,
    //                 })
    //             } else if (activeIndex === 1) {
    //                 props.checkIfEmailExists({email: ownerProfile.email}).then((data) => {
    //                     if (data.payload.data) {
    //                         addToast('The owner email already exists. Please try again.', {
    //                             appearance: 'error',
    //                             autoDismiss: true,
    //                         })
    //                     } else setActiveIndex(newIndex)
    //                 })
    //             } else if (activeIndex === 2) {
    //                 props.checkIfEmailExists({email: businessProfile.email}).then((data) => {
    //                     if (data.payload.data) {
    //                         addToast('The business email already exists. Please try again.', {
    //                             appearance: 'error',
    //                             autoDismiss: true,
    //                         })
    //                     } else if (businessProfile.legalName !== '') {
    //                         props.checkIfUsernameExists({username: businessProfile.legalName}).then((data) => {
    //                             if (data.payload.data) {
    //                                 addToast('This username already exists. Please try again.', {
    //                                     appearance: 'error',
    //                                     autoDismiss: true,
    //                                 })
    //                             } else setActiveIndex(newIndex)
    //                         })
    //                     } else setActiveIndex(newIndex)
    //
    //                 })
    //             }
    //
    //         } else if (selectedAccountType === 3) {
    //             if (activeIndex === 1 && !validator.validate(businessProfile.email)) {
    //                 addToast('Please enter a valid email', {
    //                     appearance: 'error',
    //                     autoDismiss: true,
    //                 })
    //             } else if (activeIndex === 3 && !validator.validate(businessProfile.contactPersonEmail)) {
    //                 addToast('Please enter a valid email', {
    //                     appearance: 'error',
    //                     autoDismiss: true,
    //                 })
    //             } else props.checkIfEmailExists({email: businessProfile.email}).then((data) => {
    //                 if (data.payload.data) {
    //                     addToast('The business email already exists. Please try again.', {
    //                         appearance: 'error',
    //                         autoDismiss: true,
    //                     })
    //                 } else if (businessProfile.legalName !== '') {
    //                     props.checkIfUsernameExists({username: businessProfile.legalName}).then((data) => {
    //                         if (data.payload.data) {
    //                             addToast('This username already exists. Please try again.', {
    //                                 appearance: 'error',
    //                                 autoDismiss: true,
    //                             })
    //                         } else setActiveIndex(newIndex)
    //                     })
    //                 } else setActiveIndex(newIndex)
    //
    //             })
    //         }
    //     } else setActiveIndex(newIndex)
    // }

    function steps(accountTypeChoices) {
        if (ownerProfile.accountType) {
            return <Steps model={accountTypeChoices} activeIndex={activeIndex}
                          onSelect={(e) => setActiveIndex(e.index)}
                          readOnly={false}/>
        } else return <Steps model={accountTypeChoices}/>

    }

    function ownerProfileSection() {
        return <div className={classes.regForm}>
            {steps(registrationSteps)}
            <div className="p-grid">
                <div className="p-col-2"/>
                <div className="p-col-2">
                    <label className={classes.Label}>Full Name</label>
                </div>
                <div className="p-col-3">
                    <span className="p-float-label">
                        <InputText
                            value={ownerProfile.firstName}
                            className={classes.Fields}
                            onChange={(e) =>
                                setOwnerProfile({
                                    ...ownerProfile,
                                    firstName: e.target.value
                                })}/>
                         <label htmlFor='firstName'> First Name</label>
                    </span>
                </div>
                <div className="p-col-3">
                    <span className="p-float-label">
                        <InputText
                            id="lastName"
                            value={ownerProfile.lastName}
                            className={classes.Fields}
                            onChange={(e) =>
                                setOwnerProfile({
                                    ...ownerProfile,
                                    lastName: e.target.value
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
                        value={ownerProfile.gender}
                        options={genders}
                        optionLabel="name"
                        optionValue="id"
                        placeholder="Gender "
                        onChange={(e) => {
                            setOwnerProfile({
                                ...ownerProfile,
                                gender: e.target.value,
                            })
                        }}/>
                </div>
                <div className="p-col-3">
                    <InputText
                        keyfilter="int"
                        className={classes.Fields}
                        value={ownerProfile.age}
                        onChange={(e) => {
                            if (e.target.value.charAt(e.target.value.length - 1) !== "-") {
                                setOwnerProfile({
                                    ...ownerProfile,
                                    age: e.target.value
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
                        className={classes.countriesAndCities}
                        value={ownerProfile.country}
                        onChange={(e) => {
                            setOwnerProfile({
                                ...ownerProfile,
                                country: e,
                            })
                        }}/>
                </div>
                <div className="p-col-3">
                    <RegionDropdown
                        defaultOptionLabel="City"
                        className={classes.countriesAndCities}
                        country={ownerProfile.country}
                        value={ownerProfile.city}
                        onChange={(e) => {
                            setOwnerProfile({
                                ...ownerProfile,
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
                        international
                        defaultCountry="PS"
                        countryCallingCodeEditable={false}
                        placeholder='Enter your phone Number'
                        value={ownerProfile.mobileNumber}
                        onChange={phone =>
                            setOwnerProfile({
                                ...ownerProfile,
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
                    <InputText value={ownerProfile.email}
                               className={classes.Fields}
                               onChange={(e) => {
                                   setOwnerProfile({
                                       ...ownerProfile,
                                       email: e.target.value,
                                   })
                               }}
                    />
                </div>
                <div className="p-col-2"/>


                <div className="p-col-2"/>
                <div className="p-col-2">
                    <label className={classes.Label}>Education</label>
                </div>
                <div className="p-col-6">
                    <InputTextarea
                        value={ownerProfile.OW_education}
                        className={classes.Fields}
                        onChange={(e) => {
                            setOwnerProfile({
                                ...ownerProfile,
                                OW_education: e.target.value,
                            })
                        }}
                        autoResize/>
                </div>
                <div className="p-col-2"/>

                <div className="p-col-2"/>
                <div className="p-col-2">
                    <label className={classes.Label}>Address</label>
                </div>
                <div className="p-col-6">
                    <InputTextarea
                        id="address"
                        value={ownerProfile.address}
                        className={classes.Fields}
                        onChange={(e) => {
                            setOwnerProfile({
                                ...ownerProfile,
                                address: e.target.value,
                            })
                        }}

                        autoResize/>
                </div>
                <div className="p-col-2"/>


            </div>
            <div className="p-grid p-justify-end">

                <Button label="Next"
                        style={{marginTop: "2em", height: "3em"}}
                        className="primaryBtn"
                        icon="pi pi-step-forward"
                        onClick={() => {
                            if (!validator.validate(ownerProfile.email)) {
                                addToast('Please enter a valid email', {
                                    appearance: 'error',
                                    autoDismiss: true,
                                })
                            } else if (ownerProfile.email !== "") {
                                // props.checkIfEmailExists({email: ownerProfile.email}).then((data) => {
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
        if (activeIndex === 0) {
            return ownerProfileSection()
        }
        // else if (activeIndex === 1) {
        //     return businessProfileSection(MSME)
        // } else if (activeIndex === 2) {
        //     return businessProfileSectionPartTwo(MSME)
        // }


    }

    function handleRegistration() {
        // let allFieldsFilled = true;
        // if (selectedAccountType === 1 || selectedAccountType === 2) {
        //     Object.keys(ownerProfile).map((field) => {
        //         if (allFieldsFilled && ownerProfile[field] === "") {
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
        //     } else if (!validator.validate(ownerProfile.email) || !validator.validate(businessProfile.email) || !validator.validate(businessProfile.contactPersonEmail)) {
        //         addToast('Please enter a valid email', {
        //             appearance: 'error',
        //             autoDismiss: true,
        //         })
        //     } else {
        //         props.createAccount({
        //             MSMEOwner: {
        //                 ownerProfile: ownerProfile,
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
        // } else if (selectedAccountType === 3) {
        //     Object.keys(businessProfile).map((field) => {
        //         if (allFieldsFilled && businessProfile[field] === "") {
        //             allFieldsFilled = false
        //         }
        //     })
        //     if (!allFieldsFilled) {
        //         addToast('Please fill all the required fields', {
        //             appearance: 'error',
        //             autoDismiss: true,
        //         })
        //     } else if (!validator.validate(businessProfile.email) || !validator.validate(businessProfile.contactPersonEmail)) {
        //         addToast('Please enter a valid email', {
        //             appearance: 'error',
        //             autoDismiss: true,
        //         })
        //     } else {
        //
        //
        //         props.createAccount(
        //             {
        //                 individualBusiness: {
        //                     businessProfile: {
        //                         BP_legalName: businessProfile.legalName,
        //                         BP_registrationNumber: businessProfile.registrationNumber,
        //                         BP_yearsOfEstablishment: businessProfile.yearsOfEstablishment,
        //                         BP_brandName: businessProfile.brandName,
        //                         BP_website: businessProfile.website,
        //                         BP_email: businessProfile.email,
        //                         BP_country: businessProfile.country,
        //                         BP_city: businessProfile.city
        //                     },
        //                     businessDetails: {
        //                         BD_companyVision: businessProfile.companyVision,
        //                         BD_businessDescription: businessProfile.businessDescription,
        //                         BD_productsAndServices: businessProfile.productsAndServices,
        //                         BD_targetedCustomers: businessProfile.targetedCustomers,
        //                         BD_competition: businessProfile.competition,
        //                         BD_competitiveAdvantage: businessProfile.competitiveAdvantage,
        //                         BD_hasDataForFinancialStatement: businessProfile.hasDataForFinancialStatement
        //                     },
        //
        //                     contactPerson: {
        //                         CP_name: businessProfile.contactPersonName,
        //                         CP_jobTitle: businessProfile.contactPersonJobTitle,
        //                         CP_phone: businessProfile.contactPersonPhone,
        //                         CP_email: businessProfile.contactPersonEmail
        //                     }
        //                 }
        //             }
        //         ).then(data => {
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
        //
        //     }
        //
        // }
    }

    return (
        <div>
            {/*<header className={classes.Topbar}/>*/}
            <h2 className="p-col-fixed">
                Registration
            </h2>
            <hr/>
            {displayForm()}
        </div>


    );
}

const mapStateToProps = state => {
        return {};
    }
;

const mapDispatchToProps = dispatch => {
        return {};
    }
;

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
