import React from 'react';
import classes from './Topbar.module.css';
import {connect} from 'react-redux';
import './NavigationMenuStyle.css';
import * as uiActions from "../../Containers/InterfaceUtility/store/InterfaceUtilityActions";
import {Sidebar} from "primereact/sidebar";
import {PanelMenu} from "primereact/panelmenu";
import { useHistory } from "react-router-dom";


const LoggedInPatientTopbar = (props) => {
    let history = useHistory();

    const navigationMenuModel = [

        {
            label: 'Profile',
            icon: 'pi pi-chart-bar',
            command: () => {
                history.push('/patientDashboard/patientInfo')

            }
        },

        {
            label: 'Delete Account',
            icon: 'pi pi-delete-account',
            command: () => {
                history.push('/patientDashboard/patientInfo/deleteAccount')

            }
        },
        {
            label: 'Appointments',
            //icon: 'pi pi-appointment',
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


    return (
        <header className={classes.Topbar}>
                <div>
                    <Sidebar showCloseIcon={false}
                             className={classes.Sidebar} modal={false}
                             visible={props.menuVisible}
                             onHide={() => props.hideMenu()}>
                        <PanelMenu model={navigationMenuModel}>
                        </PanelMenu>
                    </Sidebar>
                    <a className={classes.MenuBarLink} onClick={handleNavBarClick}>
                <span style={{color: 'inherit'}} className={
                    props.menuVisible ? 'pi pi-times' : 'pi pi-bars'
                }/>
                    </a>
                    {/*<div onClick={() => {*/}
                    {/*    props.history.push('/dashboard')*/}
                    {/*}} className={classes.Logo}>*/}
                    {/*    <img src={logo} width={150} alt={"Logo"}/>*/}
                    {/*</div>*/}

                    <span>
                            <link rel="stylesheet"
                                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                    <form className="example">
                        <input type="text" placeholder="Search" name="search"/>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                     </span>


                    <span className={classes.UsernameLabel}>
                    {JSON.parse(localStorage.getItem("auth"))?.username}
                    </span>

                    <a className={classes.UserProfileLink} onClick={() => {
                        console.log("clicked")
                    }}>
                        <span style={{color: 'inherit'}} className="pi pi-user"/>
                    </a>

                </div>


        </header>
    )
}
const mapStateToProps = state =>
{
    return {
        // user: state.login.loggedInUser?.user,
        menuVisible: state.ui.menuVisible
    }
}
const mapDispatchToProps = dispatch =>
{
    return {
        showMenu: () => dispatch(uiActions.showMenu()),
        hideMenu: () => dispatch(uiActions.hideMenu())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoggedInPatientTopbar);