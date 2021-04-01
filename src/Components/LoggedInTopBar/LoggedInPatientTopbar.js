import React from 'react';
import classes from './Topbar.module.css';
import {connect} from 'react-redux';
import './NavigationMenuStyle.css';
import * as uiActions from "../../Containers/InterfaceUtility/store/InterfaceUtilityActions";
import {Sidebar} from "primereact/sidebar";
import {PanelMenu} from "primereact/panelmenu";


const LoggedInPatientTopbar = (props) => {
    const navigationMenuModel = [

        {
            label: 'Profile',
            icon: 'pi pi-chart-bar',
            command: () => {
                // props.history.push('/entity/GeneralInfo')
            }
        },

        {
            label: 'Sign Out',
            icon: 'pi pi-sign-out',
            command: () => {
                localStorage.clear()
                props.history.push('/')

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
            {/*{props.history.location.pathname === "/" || props.history.location.pathname === "/landingPage" || props.history.location.pathname === "/Registration" || props.history.location.pathname.includes("/changePassword") ?*/}
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
                    <span className={classes.UsernameLabel}>
                    {props.user?.username}
                    </span>
                    <a className={classes.UserProfileLink} onClick={() => {
                        console.log("clicked")
                    }}>
                        <span style={{color: 'inherit'}} className="pi pi-user"/>


                    </a>
                </div>

            }


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