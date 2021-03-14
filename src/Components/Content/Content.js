import {BrowserRouter, Route, Switch} from "react-router-dom";
import EnglishHomepage from "../../Containers/Homepage/EnglishHomepage";
import Registration from "../../Containers/Registration/Registration";
import ArabicHomepage from "../../Containers/Homepage/ArabicHomepage";
import About from "../../Containers/Homepage/About/About";
import Contact from "../../Containers/Homepage/Contact/Contact";
const Content = (props) => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={EnglishHomepage}/>
                    <Route path="/arabicHomepage" exact component={ArabicHomepage}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/registration" exact component={Registration}/>

                    {/*<Route path="/homepage" exact component={}/>*/}

                </Switch>
            </BrowserRouter>

        </div>
    );
}
export default Content;