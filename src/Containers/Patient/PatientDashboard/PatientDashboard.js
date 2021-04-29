import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import './CarouselDemo.css';
import * as profileActions from "../../Therapist/store/TherapistActions";
const PatientDashboard = (props) => {

    const [therapistInfo, setTherapistInfo] = useState(null)
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
        console.log("entered 1")

        if (dataLoaded === false) {
            console.log("entered 2")
            props.getProfileData({id: id}).then((data) => {
                setTherapistInfo(data.payload)
                {console.log(data, data.payload,"therapist Info")}
            })
            dataLoaded = true;
        }
    }, [dataLoaded])
        const therapistTemplate = (therapistInfo) => {

            return (

                <div className="therapist-item">
                    <div className="therapist-item-content">
                        <div className="p-mb-3">
                            {/*<img src={`showcase/demo/images/therapist/${therapistInfo.image}`}*/}
                                 onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                                 alt={therapistInfo.username}  className="therapist-image"/>
                        </div>
                        <div>
                            <h4 className="p-mb-1">{therapistInfo.email}</h4>
                            <h6 className="p-mt-0 p-mb-3">${therapistInfo.specialization}</h6>
                            <span

                            >{therapistInfo.description}</span>
                            <div className="car-buttons p-mt-5">
                                <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2"/>
                                <Button icon="pi pi-star" className="p-button-success p-button-rounded p-mr-2"/>
                                <Button icon="pi pi-cog" className="p-button-help p-button-rounded"/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
            return (

                <div style={{paddingTop:"2em"}} >

                    <h1>
                        <blockquote>You don’t have to struggle in silence. We are here to provide you with the mental
                            health
                            care you need
                        </blockquote>

                    </h1>

                    <div>
                        <div className="therapist-demo">
                            <div className="card">
                                <Carousel value={therapistInfo} numVisible={3} numScroll={3}
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
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        getProfileData: (data) => dispatch(profileActions.getProfileData(data)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PatientDashboard);
