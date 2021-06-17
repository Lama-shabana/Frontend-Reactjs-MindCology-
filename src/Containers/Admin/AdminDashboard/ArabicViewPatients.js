import React,{useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as patientProfileActions from "../../Patient/store/PatientActions"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import * as profileActions from "../../Therapist/store/TherapistActions";
import {Button} from "primereact/button";

const ArabicViewPatients = (props) => {

    const [patients, setPatients] = useState([] );
    const id = JSON.parse(localStorage.getItem("auth"))?.id
    function onDelete() {
        props.editProfile({id: id, therapistInfo:{active:false}}).then((data) => console.log(data))
        localStorage.clear()
        // props.history.push("/")

    }
    function actionActiveTemplate(e) {
        return (
            <div>
                <Button label="تعطيل الحساب" className="primaryBtn" icon="pi pi-trash
" style={{
                    width: "17em",
                    height: "2.5em",
                    marginTop: "2em",
                    background: "#79428b"
                }}
                        onClick={() => {
                            onDelete()

                        }}
                />
            </div>
        );
    }
    let dataLoaded = false;
    useEffect(() => {
        console.log("entered 1")

        if (dataLoaded === false) {
            console.log("entered 2")
            props.getAllPatients().then((data) => {
                setPatients(data.payload)
                {console.log(data, data.payload,"patients List")}
            })
            dataLoaded = true;
        }
    }, [dataLoaded])
    return (
        <div>


            <div   style={{marginTop:"6em"}}>

                <div className="datatable-templating-demo">
                    <div className="card">


                        <DataTable
                            value={patients}
                        >
                            <Column field="firstName" header="الاسم الأول "/>

                            <Column field="lastName" header="الاسم الاخير">

                            </Column>
                            <Column field="gender" header="الجنس">

                            </Column>
                            <Column field="email" header="البريد الالكتروني">

                            </Column>
                            <Column field="age" header="العمر">

                            </Column>
                            <Column field="phoneNumber" header="رقم الهاتف">

                            </Column>
                            <Column
                                body={(e)=>actionActiveTemplate(e)}
                                header=" الحساب ">
                            </Column>


                        </DataTable>
                        {/*:null}*/}

                    </div>
                </div>

            </div>


        </div>
    );
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllPatients: () => dispatch(patientProfileActions.getAllPatients()),
        editProfile: (data) => dispatch(profileActions.editProfile(data)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArabicViewPatients);
