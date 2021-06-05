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
            label: 'Appointment',
            icon: 'pi pi-calendar',
            command: () => {
                history.push('/patientDashboard/takeAppointment')
            }
        },
        {
            label: 'Sign Out',
            icon: 'pi pi-sign-out',
            command: () => {
                localStorage.clear()
                history.push('/')

            }
        }

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

    return (
        <header className={classes.Topbar}>
            <div>
                <Sidebar showCloseIcon={false}
                         className={classes.Sidebar} modal={false}
                         visible={props.menuVisible}
                         onHide={() => props.hideMenu()}>
                    <PanelMenu model={navigationMenuModel}/>
                </Sidebar>


                {/*{lang&& lang === "english" ?*/}

                {/*<Button label="Arabic" className="primaryBtn" style={{*/}
                {/*    width: "9em",*/}
                {/*    height: "3em",*/}
                {/*    marginLeft: "1em",*/}
                {/*    marginTop: "2em",*/}
                {/*    background: "#a474b7"*/}
                {/*}}*/}
                {/*        onClick={() => {*/}

                {/*            localStorage.setItem('lang', JSON.stringify("arabic"))*/}
                {/*            console.log(JSON.parse(localStorage.getItem("lang")),"AFTER ARAB")*/}

                {/*        }}*/}
                {/*/>*/}
                {/*    : null*/}

                {/*}*/}
                <a className={classes.MenuBarLink} onClick={handleNavBarClick}>
                        <span style={{color: 'inherit'}} className={
                            props.menuVisible ? 'pi pi-times' : 'pi pi-bars'}/>
                </a>
                <div className="p-grid">
                    <div className="p-col-3"/>
                    {lang && lang === "arabic" ?
                        <Button label="English" className="primaryBtn" style={{
                            width: "9em",
                            height: "4em",
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
                            height: "4em",
                            // marginLeft: "1em",
                            // marginTop: "1em",
                            background: "#a474b7"
                        }}
                                onClick={() => {
                                    localStorage.setItem('lang', JSON.stringify("arabic"))
                                    window.location.reload();

                                }}
                        />}
                    {/*<div className="p-col-5">*/}
                    {/*    <span className="p-input-icon-left">*/}
                    {/*        <i className="pi pi-search"/>*/}
                    {/*        <InputText className={classes.search}*/}
                    {/*            // value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search"*/}
                    {/*        />*/}
                    {/*    </span>*/}

                    {/*</div>*/}

                    <div className="p-col-1">

                    </div>
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
        hideMenu: () => dispatch(uiActions.hideMenu())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoggedInPatientTopbar);