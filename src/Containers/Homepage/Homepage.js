import {InputText} from "primereact/inputtext";
import classes from "../Registration/Registration.module.css";


const Homepage = (props) => {
    let user="";
    return (
        <div>

           <h1>this is the home page</h1>
            <InputText
                className="p-invalid p-d-block"
                id="lastName"
                value={user}
                // className={classes.Fields}
                onChange={(e) =>
                    user=e.target.value}/>
        </div>
    );
}
export default Homepage;