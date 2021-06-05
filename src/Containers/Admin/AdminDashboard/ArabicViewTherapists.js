import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ButtonHeader } from 'primereact/button';
import './DataTableDemo.css';
import * as profileActions from "../../Therapist/store/TherapistActions";

const ArabicViewTherapists = (props) => {
    const [therapists, setTherapists] = useState([] );


    let dataLoaded = false;
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
                              onClick={()=> props.history.push("/arabicAdminDashboard/arabicAddTherapist")}/>
                </div>
                <div   style={{marginTop:"2em"}}>

                    <div className="datatable-templating-demo">
                        <div className="card">
                            <DataTable value={therapists}>
                                <Column field="firstName" header="الاسم الاول"></Column>
                                <Column field="lastName" header="الاسم الاخير"></Column>
                                <Column field="gender" header="الجنس"></Column>
                                <Column field="phoneNumber" header=" رقم الهاتف"></Column>
                                <Column field="email" header="البريد الالكتروني"></Column>
                                <Column field="educationLevel" header=" درجة الدراسات العليا"></Column>
                                <Column field="specialization" header="التخصص"></Column>
                                <Column field="description" header="الوصف"></Column>
                                {/*<Column field="Status" header="Status"></Column>*/}
                            </DataTable>
                        </div>
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
        getAllTherapists: () => dispatch(profileActions.getAllTherapists()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArabicViewTherapists);