import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Carousel} from 'primereact/carousel';
import {Button} from 'primereact/button';
import './CarouselDemo.css';
import * as therapistProfileActions from "../../Therapist/store/TherapistActions";

const PatientDashboard = (props) => {

    const [therapistInfo, setTherapistInfo] = useState(
        [
            {
                id: 1,
                username: "test",
                specialization: "specialization",
                description: "description",
                email: "email"
            },
            {
                id: 2,
                username: "test",
                specialization: "specialization",
                description: "description",
                email: "email"
            },
            {
                id: 3,
                username: "test",
                specialization: "specialization",
                description: "description",
                email: "email"
            }

        ]
    )
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const id = JSON.parse(localStorage.getItem("auth"))?.id

    let dataLoaded = false;


    useEffect(() => {
        if (dataLoaded === false) {
            props.getAllTherapists().then((data) => {
                setTherapistInfo(data.payload)
                console.log(data, data.payload, "therapist Info")
            })
            dataLoaded = true;
        }
    }, [dataLoaded])
    const therapistTemplate = (therapistInfo) => {
        return (
            <div className="therapist-item">
                <div className="therapist-item-content">
                    <div className="p-mb-3">
                        {/*< className="therapist-image" img src={}/>*/}
                        <span style={{backgroundColor: "powderblue"}}>{therapistInfo.username}</span>

                    </div>
                    <div>
                        <h4 className="p-mb-1">{therapistInfo.email}</h4>
                        <h6 className="p-mt-0 p-mb-3">{therapistInfo.specialization}</h6>
                        <span>{therapistInfo.description}</span>
                        <div className="car-buttons p-mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2"/>
                            <Button icon="pi pi-star" className="p-button-success p-button-rounded p-mr-2"/>
                            <Button icon="pi pi-send" className="p-button-help p-button-rounded"/>
                            <div className="box">
                                <Button label=" view therapist Info " className="primaryBtn" icon="pi pi-chevron-right"
                                        style={{
                                            width: "12em",
                                            height: "3em",
                                            marginLeft: "1em",
                                            marginTop: "2em",
                                            background: "purple"


                                        }}
                                        onClick={() => props.history.push("/patientDashboard/viewTherapistProfile/" + therapistInfo.id)}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (

        <div style={{paddingTop: "2em"}}>

            <h1>
                <blockquote>You don’t have to struggle in silence. We are here to provide you with the mental
                    health
                    care you need
                </blockquote>

            </h1>

            <div>
                <div className="therapist-demo">
                    <div className="card">
                        <Carousel value={therapistInfo}
                                  numVisible={3} numScroll={3}
                                  responsiveOptions={responsiveOptions}
                                  itemTemplate={therapistTemplate}
                                  header={<h5>Therapists</h5>}/>
                    </div>


                </div>
            </div>

        </div>

    );
}


const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        getAllTherapists: () => dispatch(therapistProfileActions.getAllTherapists()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PatientDashboard);
