import {BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from "../../Containers/Homepage/Homepage";
import Registration from "../../Containers/Registration/Registration";
const Content = (props) => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/registration" exact component={Registration}/>

                    {/*<Route path="/homepage" exact component={}/>*/}

                </Switch>
            </BrowserRouter>

        </div>
    );
}
export default Content;