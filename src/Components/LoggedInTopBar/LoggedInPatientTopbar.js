import React, {useEffect, useState} from 'react';
import classes from './Topbar.module.css';
import {connect} from 'react-redux';
import './NavigationMenuStyle.css';
import * as uiActions from "../../Containers/InterfaceUtility/store/InterfaceUtilityActions";
import {Sidebar} from "primereact/sidebar";
import {PanelMenu} from "primereact/panelmenu";
import {useHistory} from "react-router-dom";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";
import * as therapistProfileActions from "../../Containers/Therapist/store/TherapistActions";


const LoggedInPatientTopbar = (props) => {
    let history = useHistory();

    const navigationMenuModel = [
        {
            label: 'Dashboard',
            icon: 'pi pi-chart-bar',
            command: () => {
                history.push('/patientDashboard')

            }
        },
        {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => {
                history.push('/patientDashboard/patientProfileInfo')

            }
        },
        {
            label: 'Sign Out',
            icon: 'pi pi-sign-out',
            command: () => {
                localStorage.clear()
                history.push('/')

            }
        },
        {
            label: 'Chatting',
            icon: 'pi pi-comments',
            command: () => {
                history.push('/chatLogin')

            }
        },

    ];


    const handleNavBarClick = (e) => {
        if (props.menuVisible)
            props.hideMenu();
        else
            props.showMenu();
    }

    const [lang, setLang] = useState(null)
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("lang"))) {
            setLang(JSON.parse(localStorage.getItem("lang")))
        }

    }, [localStorage.getItem('lang')])

    let dataLoaded = false;

    const [therapists,setTherapists] = useState(null);
    const [selectedTherapist,setSelectedTherapist]=useState(null);

    useEffect(() => {
        if (dataLoaded === false) {
            props.getAllTherapists().then((data) => {
                let temp=[]
                data.payload?.map((data)=>{
                    temp.push({id:data.id,fullName:data.firstName+" "+data.lastName})
                })
                setTherapists(temp)
            })
            dataLoaded = true;
        }
    }, [dataLoaded])
    return (
        <header className={classes.Topbar}>
            <div>
                <Sidebar showCloseIcon={false}
                         className={classes.Sidebar} modal={false}
                         visible={props.menuVisible}
                         onHide={() => props.hideMenu()}>
                    <PanelMenu model={navigationMenuModel}/>
                </Sidebar>

                <a className={classes.MenuBarLink} onClick={handleNavBarClick}>
                        <span style={{color: 'inherit'}} className={
                            props.menuVisible ? 'pi pi-times' : 'pi pi-bars'}/>
                </a>


                <div className="p-grid">
                    <div className="p-col-2"/>

                    <div className="p-col-3">
                        {lang && lang === "arabic" ?
                            <Button label="English" className="primaryBtn" style={{
                                width: "9em",
                                height: "3.5em",
                                // marginLeft: "1em",
                                // marginTop: "1em",
                                background: "#a474b7"
                            }}
                                    onClick={() => {
                                        localStorage.setItem('lang', JSON.stringify("english"))
                                        window.location.reload();

                                    }}
                            /> :


                            <Button label="Arabic" className="primaryBtn" style={{
                                width: "9em",
                                height: "3.5em",
                                // marginLeft: "1em",
                                // marginTop: "1em",
                                background: "#a474b7"
                            }}
                                    onClick={() => {
                                        localStorage.setItem('lang', JSON.stringify("arabic"))
                                        window.location.reload();

                                    }}
                            />}

                    </div>
                    <div className="p-col-4">
                        {therapists?
                            <Dropdown value={selectedTherapist} options={therapists}
                                      onChange={(e)=> {
                                          setSelectedTherapist(e.target.value)
                                          history.push("/patientDashboard/viewTherapistProfile/" + e.target.value)
                                          window.location.reload()
                                      }}
                                      optionLabel="fullName"
                                      optionValue="id"
                                      filter
                                      className={classes.search}
                                      showClear filterBy="fullName" placeholder="Search for a Therapist"
                            />
                            :null}

                    </div>




                    <div className="p-col-1"/>


                    <div className="p-col-2">
                        <span className={classes.UsernameLabel}>
                             {JSON.parse(localStorage.getItem("auth"))?.username}
                        </span>
                        <a className={classes.UserProfileLink} onClick={() => {
                            console.log("clicked")
                        }}>

                            <span style={{color: 'inherit'}} className="pi pi-user"/>
                        </a>
                    </div>


                </div>


            </div>


        </header>
    )
}
const mapStateToProps = state => {
    return {
        // user: state.login.loggedInUser?.user,
        menuVisible: state.ui.menuVisible
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showMenu: () => dispatch(uiActions.showMenu()),
        hideMenu: () => dispatch(uiActions.hideMenu()),
        getAllTherapists: () => dispatch(therapistProfileActions.getAllTherapists()),



    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoggedInPatientTopbar);