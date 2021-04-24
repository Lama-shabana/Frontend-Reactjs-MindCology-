import React, {useState} from 'react';
import {connect} from 'react-redux';
import classes from './therapistProfile.module.css';
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

const TherapistProfile = (props) => {

    // const [otherInfo, setOtherInfo] = useState({
    //     firstName: "First NameFirst ",
    //     lastName: "Last name",
    //     email: "email",
    //     mobileNumber: "059",
    //
    //
    // })

    const [therapistInfo, setTherapistInfo] = useState({
        firstName: "First Name",
        lastName: "Last name",
        mobileNumber: "+970 ",
        age:"age",
        gender:"gender",
        email: "email",
        userName:"userName",
        educationLevel:"educationLevel",
        specialization:"specialization",


    })


    const gender =["Male,Female"];


    const therapistInfoDisplay = () => {
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
                            {therapistInfo.firstName}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       placeholder="Company Name"
                                       value={therapistInfo.firstName}
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
                            {therapistInfo.lastName}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                      // placeholder="Industry"
                                      value={therapistInfo.lastName}
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
                            {therapistInfo.age}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       placeholder="Job Title"
                                       value={therapistInfo.age}
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
                            {therapistInfo.gender}
                        </InplaceDisplay>
                        <InplaceContent>
                            <Dropdown className={classes.inputs}
                                      placeholder="Industry"
                                      value={therapistInfo.gender}
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
                            {therapistInfo.mobileNumber}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                // placeholder="Job Title"
                                       value={therapistInfo.mobileNumber}
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
                            {therapistInfo.email}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       placeholder="Job Title"
                                       value={therapistInfo.email}
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


            <div className="p-col-4">
                <label className={classes.labels}>user-name</label>

            </div>

            <div className="p-col-4">
                <label className={classes.labels}>Education-level </label>

            </div>
            <div className="p-col-4">
                <label className={classes.labels}>specialization </label>
            </div>
            <div className="p-col-4" style={{textAlign: "center"}}>
                <Inplace closable>
                    <InplaceDisplay>
                        {therapistInfo.userName}
                    </InplaceDisplay>
                    <InplaceContent>
                        <InputText className={classes.inputs}
                                  placeholder="Industry"
                                  value={therapistInfo.userName}
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
                        {therapistInfo.educationLevel}
                    </InplaceDisplay>
                    <InplaceContent>
                        <InputText className={classes.inputs}
                            // placeholder="Job Title"
                                   value={therapistInfo.educationLevel}
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
                        {therapistInfo.specialization}
                    </InplaceDisplay>
                    <InplaceContent>
                        <InputText className={classes.inputs}
                                   placeholder="Job Title"
                                   value={therapistInfo.specialization}
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


            {therapistInfo.accountType === '1' || therapistInfo.accountType === "2" ?
                <Tabs defaultActiveKey="therapistInfo" transition={false}>
                    {/*<Tab eventKey="accountType" title="Account Type" tabClassName={classes.tab}>*/}
                    {/*    {accountType()}*/}


                    {/*<Tab eventKey="businessInfo" title="Business Info" tabClassName={classes.tab}>*/}
                    {/*    /!*{businessInfoDisplay()}*!/*/}
                    {/*</Tab>*/}

                </Tabs>
                : <Tabs defaultActiveKey="accountType" transition={false}>

                    <Tab eventKey="therapistInfo" title="Therapist Info" tabClassName={classes.tab}>
                        {therapistInfoDisplay()}
                    </Tab>

                </Tabs>
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

export default connect(mapStateToProps, mapDispatchToProps)(TherapistProfile);
