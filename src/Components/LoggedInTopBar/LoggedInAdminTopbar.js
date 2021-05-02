import React from 'react';
import classes from './Topbar.module.css';
import {connect} from 'react-redux';
import './NavigationMenuStyle.css';
import * as uiActions from "../../Containers/InterfaceUtility/store/InterfaceUtilityActions";
import {Sidebar} from "primereact/sidebar";
import {PanelMenu} from "primereact/panelmenu";
import {useHistory} from "react-router-dom";
import {InputText} from "primereact/inputtext";


const LoggedInAdminTopbar = (props) => {
    let history = useHistory();

    const navigationMenuModel = [

        {
            label: 'Dashboard',
            icon: 'pi pi-chart-bar',
            command: () => {
                history.push('/adminDashboard')

            }
        },

        {
            label: 'Therapists List',
            icon: 'pi pi-users',
            command: () => {
                history.push('/adminDashboard/viewAllTherapists')
            }
        },
        {
            label: 'Patients List',
            icon: 'pi pi-user',
            command: () => {
                history.push('/adminDashboard/viewAllPatients')
            }
        },
        {
            label: 'Create account For therapist',
            icon: 'pi pi-user-plus',
            command: () => {
                history.push('/adminDashboard/AddTherapist')
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
                    <PanelMenu model={navigationMenuModel}/>
                </Sidebar>
                <a className={classes.MenuBarLink} onClick={handleNavBarClick}>
                        <span style={{color: 'inherit'}} className={
                            props.menuVisible ? 'pi pi-times' : 'pi pi-bars'}/>
                </a>
                <div className="p-grid">
                    <div className="p-col-3"/>
                    <div className="p-col-5">
                        <span className="p-input-icon-left">
                            <i className="pi pi-search"/>
                            <InputText className={classes.search}
                                // value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search"
                            />
                        </span>

                    </div>

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


                {/*<span>*/}
                {/*        <link rel="stylesheet"*/}
                {/*              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>*/}
                {/*        <form className="example">*/}
                {/*            <input type="text" placeholder="Search" name="search"/>*/}
                {/*            <button type="submit"><i className="fa fa-search"></i></button>*/}
                {/*        </form>*/}
                {/*</span>*/}


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
export default connect(mapStateToProps, mapDispatchToProps)(LoggedInAdminTopbar);