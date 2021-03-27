import LoggedOutTopBar from "../../../Components/TopBar/LoggedOutTopBar";
import "../Homepage.css";
import "../Contact/Contact.css";

const Contact = () => {
    return (
        <div>
            <body className="u-body">
            <LoggedOutTopBar/>

            <section className="u-clearfix u-custom-color-1 u-section-9" id="carousel_c0f4">
                <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-xl u-sheet-1">
                    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-size-26">
                                    <div className="u-layout-col">
                                        <div
                                            className="u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-left-cell u-size-60 u-layout-cell-1">
                                            <div
                                                className="u-container-layout u-valign-bottom-md u-valign-bottom-sm u-valign-bottom-xs u-container-layout-1">
                                                <h3>Contact Information</h3>
                                                <p className="u-text u-text-1">info@mindcology.com<br/>mindCology@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-size-34">
                                    <div className="u-layout-col">
                                        <div
                                            className="u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                                            <div className="u-container-layout u-valign-middle u-container-layout-2">
                                                <h1 className="u-text u-text-2">contact us</h1>

                                            </div>
                                        </div>
                                        <div
                                            className="u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-3">
                                            <div className="u-container-layout u-valign-top u-container-layout-3">
                                                <h6 className="u-text u-text-3">1 (234) 567-891&nbsp;<br/>1 (234)
                                                    987-654
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section >
                <div  className="container contact">

                    <div className="row">
                        <h2>Contact Us</h2>
                        <h4>HOW CAN WE HELP ?</h4>
                        <div className="col-md-9">
                            <div className="contact-form">
                                <div className="form-group">
                                    <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="fname" placeholder="Enter First Name"
                                               name="fname"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" >Last Name:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" >Email:</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" >Comment:</label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control"  id="comment"></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="submit" className="btn btn-default">Submit</button>
                                    </div>

                                </div></div></div>
                    </div>
                </div></section>

            </body>







        </div>
    );
}
export default Contact;
