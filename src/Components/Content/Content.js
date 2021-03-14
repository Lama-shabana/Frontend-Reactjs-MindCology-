import {BrowserRouter, Route, Switch} from "react-router-dom";
import EnglishHomepage from "../../Containers/Homepage/EnglishHomepage";
import Registration from "../../Containers/Registration/Registration";
import ArabicHomepage from "../../Containers/Homepage/ArabicHomepage";
const Content = (props) => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={EnglishHomepage}/>
                    <Route path="/arabicHomepage" exact component={ArabicHomepage}/>

                    <Route path="/registration" exact component={Registration}/>

                    {/*<Route path="/homepage" exact component={}/>*/}

                </Switch>
            </BrowserRouter>

        </div>
    );
}
export default Content;