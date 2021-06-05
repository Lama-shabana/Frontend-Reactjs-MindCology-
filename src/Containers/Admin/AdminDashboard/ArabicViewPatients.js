import React,{useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as patientProfileActions from "../../Patient/store/PatientActions"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

const ArabicViewPatients = (props) => {

    const [patients, setPatients] = useState([] );


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
                            <Column  field= {({ filed='active' }) => String('نعم').toString()}
                                     header="Active">

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


    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArabicViewPatients);
