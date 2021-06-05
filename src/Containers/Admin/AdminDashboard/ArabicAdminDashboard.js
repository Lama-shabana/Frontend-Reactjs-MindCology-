import React, {useState} from 'react';
import {connect} from "react-redux";
import Counselling from "../../../assets/istockphoto-1169420428-612x612-1.jpg";
import { Chart } from 'primereact/chart';
//
// this.chartData = {
//     datasets: [{
//         data: [
//             11,
//             16,
//             7,
//             3,
//             14
//         ],
//         backgroundColor: [
//             "#42A5F5",
//             "#66BB6A",
//             "#FFA726",
//             "#26C6DA",
//             "#7E57C2"
//         ],
//         label: 'My dataset'
//     }],
//     labels: [
//         "Red",
//         "Green",
//         "Yellow",
//         "Grey",
//         "Blue"
//     ]
// };
//
// this.lightOptions = {
//     legend: {
//         labels: {
//             fontColor: '#495057'
//         }
//     },
//     scale: {
//         gridLines: {
//             color: '#ebedef'
//         }
//     }
// };


const ArabicAdminDashboard = (props) => {



    return (
        // <div>
        //     <div className="card">
        //         <Chart type="polarArea"
        //                data={this.chartData}
        //                options={this.lightOptions}
        //         />
        //     </div>

        <div style={{fontSize:"inherit"}}>
            <img style={{ paddingTop:"1em",width:"100%"}} src={Counselling}
                 alt="logo"/>

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
export default connect(mapStateToProps, mapDispatchToProps)(ArabicAdminDashboard);
