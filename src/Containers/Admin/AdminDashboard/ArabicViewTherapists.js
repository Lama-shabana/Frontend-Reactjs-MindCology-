import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ButtonHeader } from 'primereact/button';
import './DataTableDemo.css';
import * as profileActions from "../../Therapist/store/TherapistActions";
import {useHistory} from "react-router-dom";

const ArabicViewTherapists = (props) => {
    const [therapists, setTherapists] = useState([]);

    function onDelete(therapistId) {

        props.editProfile({id: therapistId, therapistInfo: {active: false}}).then((data) => {
            let deletedTherapistIndex=therapists.findIndex(x=> x.id===therapistId)
            let temp=[...therapists]
            if (deletedTherapistIndex > -1) {
                temp.splice(deletedTherapistIndex, 1);
                setTherapists(temp)
            }
        })
    }
    function actionActiveTemplate(e) {
        return (
            <div>
                <Button label="تعطيل الحساب" className="primaryBtn" icon="pi pi-trash
" style={{
                    background: "#79428b"
                }}
                        onClick={() => {
                            onDelete(e.id)
                        }}
                />
            </div>
        );
    }
    let dataLoaded = false;
    let history = useHistory();
    useEffect(() => {
        console.log("entered 1")

        if (dataLoaded === false) {
            console.log("entered 2")
            props.getAllTherapists().then((data) => {
                setTherapists(data.payload)
                {console.log(data, data.payload,"therapists List")}
            })
            dataLoaded = true;
        }
    }, [dataLoaded])

    const header = (
        <div className="table-header">
            Therapists
            <ButtonHeader icon="pi pi-refresh" />
        </div>
    );

    return (
        <div>
            <div>
                <div>
                    <Button   label=" اضافة معالج نفسي" icon="pi pi-plus" iconPos="left" style={{width:"220px",marginTop:"6em",marginLeft:"1em",height:"50px",backgroundColor:"var(--purple-300)"}}
                              onClick={()=> history.push("/adminDashboard/addTherapist")}/>
                </div>
                <div   style={{marginTop:"3em"}}>

                            <DataTable value={therapists}>
                                <Column field="firstName" header="الاسم الاول"/>
                                <Column field="lastName" header="الاسم الاخير"/>
                                <Column field="gender" header="الجنس"/>
                                <Column field="phoneNumber" header=" رقم الهاتف"/>
                                <Column field="email" header="البريد الالكتروني"/>
                                <Column field="educationLevel" header=" درجة الدراسات العليا"/>
                                <Column field="specialization" header="التخصص"/>
                                <Column field="description" header="الوصف"/>
                                <Column
                                    body={(e)=>actionActiveTemplate(e)}
                                    header=" الحساب ">
                                </Column>
                            </DataTable>

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
        getAllTherapists: () => dispatch(profileActions.getAllTherapists()),
        editProfile: (data) => dispatch(profileActions.editProfile(data)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArabicViewTherapists);
