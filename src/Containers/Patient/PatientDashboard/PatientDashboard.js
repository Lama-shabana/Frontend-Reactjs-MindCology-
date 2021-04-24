import React, {useState} from 'react';
import {connect} from "react-redux";
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import './CarouselDemo.css';
import LoggedInPatientTopbar from "../../../Components/LoggedInTopBar/LoggedInPatientTopbar";
import PatientAccountProfile from "./PatientAccountProfile";
import TakeAnAppointment from "./TakeAppointment";
import {ToastProvider} from "react-toast-notifications";
import classes from './patientDashboard.css';
const PatientDashboard = (props) => {
    const [therapists, setTherapists] = useState([]);
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

    // const therapistService = new therapistService();

    // useEffect(() => {
        //     therapistService.getProductsSmall().then(data => setProducts(data.slice(0,9)));
        // }, []); // eslint-disable-line react-hooks/exhaustive-deps

        const therapistTemplate = (therapist) => {
            return (
                <div className="therapist-item">
                    <div className="therapist-item-content">
                        <div className="p-mb-3">
                            <img src={`showcase/demo/images/therapist/${therapist.image}`}
                                 onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                                 alt={therapist.name} className="therapist-image"/>
                        </div>
                        <div>
                            <h4 className="p-mb-1">{therapist.name}</h4>
                            <h6 className="p-mt-0 p-mb-3">${therapist.mobileNumber}</h6>
                            <span
                                className={`product-badge status-${therapist.inventoryStatus.toLowerCase()}`}>{therapist.inventoryStatus}</span>
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
                <div>

                    <h1>
                        <blockquote>You don’t have to struggle in silence. We are here to provide you with the mental
                            health
                            care you need
                        </blockquote>

                    </h1>

                    <div>
                        <div className="carousel-demo">
                            <div className="card">
                                <Carousel value={therapists} numVisible={3} numScroll={3}
                                          responsiveOptions={responsiveOptions}
                                          itemTemplate={therapistTemplate} header={<h5>Therapists</h5>}/>
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
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PatientDashboard);
