import React, {useState} from 'react';
import {connect} from 'react-redux';
import classes from './Profile.module.css';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from "primereact/dropdown";
import {Steps} from "primereact/steps";
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputNumber} from "primereact/inputnumber";
import {InputTextarea} from "primereact/inputtextarea";
import {Inplace, InplaceContent, InplaceDisplay} from "primereact/inplace";
import {Tab, Tabs} from "react-bootstrap";
// import { Tabs, Tab } from 'react-tab-view'

import {Button} from "primereact/button";

const Profile = (props) => {

    // const [otherInfo, setOtherInfo] = useState({
    //     firstName: "First NameFirst ",
    //     lastName: "Last name",
    //     email: "email",
    //     mobileNumber: "059",
    //
    //
    // })

    const [patientInfo, setPatientInfo] = useState({
        firstName: "First Name",
        lastName: "Last name",
        mobileNumber: "+970 ",
        age:"age",
        gender:"gender",
        email: "email",
        userName:"userName",


    })

    // const [companyInfo, setCompanyInfo] = useState({
    //     companyName: "BWAYN",
    //     industry: "industry",
    //     companyWebsite: "companyWebsite",
    //     companyLocation: "companyLocation",
    //     yearOfEstablishment: "yearOfEstablishment",
    //     investmentSize: "investmentSize",
    //     numberOfEmployees: "0",
    //     legalRegistrationNumber: "legalRegistrationNumber",
    //     legalType: "legalType",
    //     marketPresence: "marketPresence",
    //     partnerNameA: "partnerNameA",
    //     partnerNameB: "partnerNameB",
    //     auditFirm: "auditFirm",
    //     licenses: "licenses",
    //     companyValuation: "companyValuation"
    // })


    //
    const gender =["Male,Female"];
    // const years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    // const industries = ["Agribusiness/food Processing", "Agriculture", "Wood and Furniture", "Stone and Marble", "Construction", "Textile & Garments",
    //     "Pharmaceutical", "ICT", "Services", "Tourism", 'Manufacturing', "Footwear & lather", "Media and Advertising", "Social Media", "Energy", "Other, specify"]
    // const legalTypes = [
    //     "Sole Ownership Company",
    //     "Family Business Company",
    //     "Private shareholding Company",
    //     "Public shareholding Company",]

    // function accountType() {
    //     return <div className="p-grid">
    //
    //         <div className="p-col-12">
    //             <h3 className={classes.welcomeHeader}> Account Type</h3>
    //             <br/>
    //
    //         </div>
    //         <br/>
    //
    //         <div className="p-col-1"/>
    //
    //         <div className="p-col-11">
    //             <Dropdown
    //                 className={classes.inputs}
    //                 value={userInfo.accountType}
    //                 options={accountTypes}
    //                 optionLabel="name"
    //                 optionValue="id"
    //                 // onChange={(e) => {
    //                 //     setUserInfo({
    //                 //         ...userInfo,
    //                 //         accountType: e.target.value,
    //                 //     })
    //                 // }}
    //             />
    //         </div>
    //
    //     </div>

    //
    // }

    const patientInfoDisplay = () => {
        return <div>
            <div className="p-grid">
                <div className="p-col-4">
                    <label className={classes.labels}>First Name</label>

                </div>
                <div className="p-col-4">
                    <label className={classes.labels}>Last Name</label>
                </div>
                <div className="p-col-4">
                    <label className={classes.labels}>Age</label>

                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {patientInfo.firstName}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       placeholder="Company Name"
                                       value={patientInfo.firstName}
                                       // onChange={(e) => setOtherInfo({
                                       //     ...otherInfo,
                                       //     firstName: e.target.value
                                       // })}
                            />

                        </InplaceContent>
                    </Inplace>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {patientInfo.lastName}
                        </InplaceDisplay>
                        <InplaceContent>
                            <Dropdown className={classes.inputs}
                                      placeholder="Industry"
                                      value={patientInfo.lastName}
                                      // onChange={(e) => setOtherInfo({
                                      //     ...otherInfo,
                                      //     lastName: e.value
                                      // })}
                                      editable
                            />
                        </InplaceContent>
                    </Inplace>
                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {patientInfo.age}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       placeholder="Job Title"
                                       value={patientInfo.age}
                                       // onChange={(e) => setUserInfo({
                                       //     ...userInfo,
                                       //     jobTitle: e.target.value
                                       // })}
                            />
                        </InplaceContent>
                    </Inplace>


                </div>


                <div className="p-col-4">
                    <label className={classes.labels}>Gender</label>

                </div>

                <div className="p-col-4">
                    <label className={classes.labels}>Telephone </label>

                </div>
                <div className="p-col-4">
                    <label className={classes.labels}>Email </label>
                </div>

                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {patientInfo.gender}
                        </InplaceDisplay>
                        <InplaceContent>
                            <Dropdown className={classes.inputs}
                                      placeholder="Industry"
                                      value={patientInfo.gender}
                                      options={gender}
                                      // onChange={(e) => setOtherInfo({
                                      //     ...otherInfo,
                                      //     email: e.value
                                      // })}
                                      editable
                            />
                        </InplaceContent>
                    </Inplace>
                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {patientInfo.mobileNumber}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                // placeholder="Job Title"
                                       value={patientInfo.mobileNumber}
                                       // onChange={(e) => {
                                       //     let lastChar = e.target.value.charAt(e.target.value.length - 1)
                                       //     if (Number.isInteger(parseInt(lastChar)) || lastChar === '+') {
                                       //         setUserInfo({
                                       //             ...userInfo,
                                       //             landLineTelephone: e.target.value
                                       //         })
                                       //     }
                                       // }
                                       // }
                            />

                        </InplaceContent>
                    </Inplace>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {patientInfo.email}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                placeholder="Job Title"
                                       value={patientInfo.email}
                                       // onChange={(e) => {
                                       //     console.log(parseInt(e.target.value.charAt(e.target.value.length - 1)), Number.isInteger(parseInt(e.target.value.charAt(e.target.value.length - 1))), "TARR")
                                       //     let lastChar = e.target.value.charAt(e.target.value.length - 1)
                                       //     if (Number.isInteger(parseInt(lastChar)) || lastChar === '+') {
                                       //         setUserInfo({
                                       //             ...userInfo,
                                       //             fax: e.target.value
                                       //         })
                                       //     }
                                       // }
                                       // }
                            />

                        </InplaceContent>
                    </Inplace>
                </div>

            </div>


        </div>
    }

    // const companyInfoDisplay = () => {
    //
    //     return <div>
    //
    //         <div className="p-grid">
    //             <div className="p-col-4">
    //                 <label className={classes.labels}>Company Name</label>
    //
    //             </div>
    //             <div className="p-col-4">
    //                 <label className={classes.labels}>Industry</label>
    //             </div>
    //
    //             <div className="p-col-4">
    //                 <label className={classes.labels}>Company Website</label>
    //             </div>
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <Inplace closable>
    //                     <InplaceDisplay>
    //                         {companyInfo.companyName}
    //                     </InplaceDisplay>
    //                     <InplaceContent>
    //                         <InputText className={classes.inputs}
    //                                    placeholder="Company Name"
    //                                    value={companyInfo.companyName}
    //                                    // onChange={(e) => setCompanyInfo({
    //                                    //     ...companyInfo,
    //                                    //     companyName: e.target.value
    //                                    // })}
    //                         />
    //
    //                     </InplaceContent>
    //                 </Inplace>
    //
    //
    //             </div>
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <Inplace closable>
    //                     <InplaceDisplay>
    //                         {companyInfo.industry}
    //                     </InplaceDisplay>
    //                     <InplaceContent>
    //                         <Dropdown className={classes.inputs}
    //                                   placeholder="Industry"
    //                                   value={companyInfo.industry}
    //                                   options={industries}
    //                                   // onChange={(e) => setCompanyInfo({
    //                                   //     ...companyInfo,
    //                                   //     industry: e.value
    //                                   // })}
    //                                   editable
    //                         />
    //                     </InplaceContent>
    //                 </Inplace>
    //             </div>
    //
    //
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <Inplace closable>
    //                     <InplaceDisplay>
    //                         {companyInfo.companyWebsite}
    //                     </InplaceDisplay>
    //                     <InplaceContent>
    //                         <InputText className={classes.inputs}
    //                                    placeholder="Company Website"
    //                                    value={companyInfo.companyWebsite}
    //                                    // onChange={(e) => setCompanyInfo({
    //                                    //     ...companyInfo,
    //                                    //     companyWebsite: e.target.value
    //                               />/     })}/>
    //                     </InplaceContent>
    //                 </Inplace>
    //             </div>
    //
    //             <div className="p-col-4">
    //                 <label className={classes.labels}>Company Location</label>
    //
    //             </div>
    //
    //             <div className="p-col-4">
    //                 <label className={classes.labels}>Year Of Establishment</label>
    //             </div>
    //             <div className="p-col-4">
    //                 <label className={classes.labels}>Investment Size</label>
    //             </div>
    //
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <Inplace closable>
    //                     <InplaceDisplay>
    //                         {companyInfo.companyLocation}
    //                     </InplaceDisplay>
    //                     <InplaceContent>
    //                         <InputText className={classes.inputs}
    //                                    placeholder="Company Location"
    //                                    value={companyInfo.companyLocation}
    //                                    // onChange={(e) => setCompanyInfo({
    //                                    //     ...companyInfo,
    //                                    //     companyLocation: e.target.value
    //                                    // })}
    //                         />
    //                     </InplaceContent>
    //                 </Inplace>
    //             </div>
    //
    //
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <Inplace closable>
    //                     <InplaceDisplay>
    //                         {companyInfo.yearOfEstablishment}
    //                     </InplaceDisplay>
    //                     <InplaceContent>
    //                         <Dropdown className={classes.inputs}
    //                                   placeholder="Year Of Establishment"
    //                                   value={companyInfo.yearOfEstablishment}
    //                                   // options={years}
    //                                   // onChange={(e) => setCompanyInfo({
    //                                   //     ...companyInfo,
    //                                   //     yearOfEstablishment: e.value
    //                                   // })}
    //                         />
    //                     </InplaceContent>
    //                 </Inplace>
    //             </div>
    //
    //
    //
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <Inplace closable>
    //                     <InplaceDisplay>
    //                         {companyInfo.investmentSize}
    //                     </InplaceDisplay>
    //                     <InplaceContent>
    //                         <InputText className={classes.inputs}
    //
    //                                    placeholder="Investment Size"
    //                                    value={companyInfo.investmentSize}
    //                                    // onChange={(e) => setCompanyInfo({
    //                                    //     ...companyInfo,
    //                                    //     investmentSize: e.target.value
    //                                    // })}
    //                         />
    //                     </InplaceContent>
    //                 </Inplace>
    //             </div>
    //
    //
    //
    //             <div className="p-col-4">
    //                 <label className={classes.labels}>Intellectual Properties, Licenses & Permits*</label>
    //
    //
    //             </div>
    //             <div className="p-col-4">
    //                 <label className={classes.labels}>Legal Type</label>
    //             </div>
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <label className={classes.labels}># of Employees</label>
    //
    //             </div>
    //
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <Inplace closable>
    //                     <InplaceDisplay>
    //                         {companyInfo.licenses}
    //                     </InplaceDisplay>
    //                     <InplaceContent>
    //                         <InputText className={classes.inputs}
    //                                    placeholder="Licenses & Permits"
    //                                    value={companyInfo.licenses}
    //                                    // onChange={(e) => setCompanyInfo({
    //                                    //     ...companyInfo,
    //                                    //     licenses: e.target.value
    //                                    // })}
    //                         />
    //                     </InplaceContent>
    //                 </Inplace>
    //             </div>
    //
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <Inplace closable>
    //                     <InplaceDisplay>
    //                         {companyInfo.legalType}
    //                     </InplaceDisplay>
    //                     <InplaceContent>
    //                         <Dropdown className={classes.inputs}
    //                                   placeholder="Legal type"
    //                                   value={companyInfo.legalType}
    //                                   options={legalTypes}
    //                                   // onChange={(e) => setCompanyInfo({
    //                                   //     ...companyInfo,
    //                                   //     legalType: e.value
    //                                   // })}
    //                         />
    //                     </InplaceContent>
    //                 </Inplace>
    //             </div>
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <Inplace closable>
    //                     <InplaceDisplay>
    //                         {companyInfo.numberOfEmployees}
    //                     </InplaceDisplay>
    //                     <InplaceContent>
    //                         <InputNumber className={classes.inputs}
    //                                      placeholder="Number of Employees"
    //                                      value={companyInfo.numberOfEmployees}
    //                                      // onValueChange={(e) => setCompanyInfo({
    //                                      //     ...companyInfo,
    //                                      //     numberOfEmployees: e.target.value
    //                                      // })}
    //                         />
    //                     </InplaceContent>
    //                 </Inplace>
    //
    //             </div>
    //
    //
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <label className={classes.labels}>Audit Firm</label>
    //             </div>
    //
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <label className={classes.labels}>Owners/Partner A</label>
    //
    //             </div>
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <label className={classes.labels}>Owners/Partner B</label>
    //
    //             </div>
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <Inplace closable>
    //                     <InplaceDisplay>
    //                         {companyInfo.auditFirm}
    //                     </InplaceDisplay>
    //                     <InplaceContent>
    //                         <InputText className={classes.inputs}
    //                                    placeholder="Audit Firm"
    //                                    value={companyInfo.auditFirm}
    //                                    // onChange={(e) => setCompanyInfo({
    //                                    //     ...companyInfo,
    //                                    //     auditFirm: e.target.value
    //                                    // })}
    //                         />
    //                     </InplaceContent>
    //                 </Inplace>
    //             </div>
    //
    //
    //
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <Inplace closable>
    //                     <InplaceDisplay>
    //                         {companyInfo.partnerNameA}
    //                     </InplaceDisplay>
    //                     <InplaceContent>
    //                         <InputText className={classes.inputs}
    //                                    style={{marginRight: "1%"}}
    //                                    placeholder="Partner Name A"
    //                                    value={companyInfo.partnerNameA}
    //                                    // onChange={(e) => setCompanyInfo({
    //                                    //     ...companyInfo,
    //                                    //     partnerNameA: e.target.value
    //                                    // })}
    //                         />
    //                     </InplaceContent>
    //                 </Inplace>
    //             </div>
    //
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //                 <Inplace closable>
    //                     <InplaceDisplay>
    //                         {companyInfo.partnerNameB}
    //                     </InplaceDisplay>
    //                     <InplaceContent>
    //                         <InputText className={classes.inputs}
    //                                    placeholder="Partner Name B"
    //
    //                                    value={companyInfo.partnerNameA}
    //                                    // onChange={(e) => setCompanyInfo({
    //                                    //     ...companyInfo,
    //                                    //     partnerNameB: e.target.value
    //                                    // })}
    //                         />
    //                     </InplaceContent>
    //                 </Inplace>
    //             </div>
    //
    //             <div className="p-col-12" style={{textAlign: "center"}}>
    //                 <label className={classes.labels}>Company Valuation</label>
    //             </div>
    //             <div className="p-col-12" style={{textAlign: "center"}}>
    //                 <Inplace closable>
    //                     <InplaceDisplay>
    //                         {companyInfo.companyValuation}
    //                     </InplaceDisplay>
    //                     <InplaceContent>
    //                         <InputText className={classes.inputs}
    //                                    placeholder="Company Valuation"
    //                                    value={companyInfo.companyValuation}
    //                                    // onChange={(e) => setCompanyInfo({
    //                                    //     ...companyInfo,
    //                                    //     companyValuation: e.target.value
    //                                    // })}
    //                         />
    //                     </InplaceContent>
    //                 </Inplace>
    //             </div>
    //         </div>
    //
    //
    //     </div>
    // }



    const accountTypes = [
        {id: "1", name: "MSME/Startup with > 2 years."},
        {id: "2", name: 'MSME/Startup with < 2 years'},
        {id: "3", name: 'Individual with business idea'},
    ]


    return (
        <div className={classes.form}>
            <label className={classes.headerLabel}> Profile
                <i style={{marginLeft: "0.5em"}} className="pi pi-user"/>
            </label>

            <p className={classes.note}>Click on any field to edit</p>
            <Tabs defaultActiveKey="patientInfo" transition={false}>

                <Tab eventKey="patientInfo" title="patient Info" tabClassName={classes.tab}>
                    {patientInfoDisplay()}
                </Tab>

            </Tabs>

            {/*{patientInfo.accountType === '1' || patientInfo.accountType === "2" ?*/}
            {/*    <Tabs defaultActiveKey="patientInfo" transition={false}>*/}
            {/*        /!*<Tab eventKey="accountType" title="Account Type" tabClassName={classes.tab}>*!/*/}
            {/*        /!*    {accountType()}*!/*/}


            {/*        /!*<Tab eventKey="businessInfo" title="Business Info" tabClassName={classes.tab}>*!/*/}
            {/*        /!*    /!*{businessInfoDisplay()}*!/*!/*/}
            {/*        /!*</Tab>*!/*/}

            {/*    </Tabs>*/}

            }
            <div className="p-grid">
                <div className="p-col-5"/>

                <div className="p-col-3">
                    <div className="box">
                        <Button label="Save" className="primaryBtn" icon="pi pi-check" style={{width:"9em",height:"3em",marginLeft:"1em",marginTop:"2em",background:"#a474b7"}}/>
                    </div>
                </div>
                <div className="p-col-4"/>
            </div>


        </div>
    );
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
