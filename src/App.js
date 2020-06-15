import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import workspace from './workspace.jpg';
import './App.css';
import './bootstrap.min.css';
import './piggy.css';
import Form from './form';

const logo_url = "https://dashboard.piggyvest.com/static/media/piggyvest-logo.0b78a8fa.svg";

const formSecStyle = {
    borderTopLeftRadius: '30px', 
    borderBottomRightRadius: '30px', 
    borderTopRightRadius: '30px', 
    width: '100%'
};

const addSecStyle = {
    color: 'white', 
    marginTop: '2rem'
};

const noAcctStyle = {
    marginBottom: '1.5rem'
};

const aStyle = {
    color: 'white', 
    fontSize: '0.875rem', 
    fontWeight: '400', 
    marginTop: '2rem', 
    paddingTop: '0.25rem', 
    paddingBottom: '0.25rem'
};


class App extends Component {

    render() {
        return (
            <div className="container b-class">
                <div className="row">
                    <div className="col-md-4"></div>
                        <div className="col-md-5" id="f-col">
                            <div className="piggy-logo">
                                <a href="#">
                                    <img src={logo_url} alt="Piggy Logo" className="piggy_logo"></img>
                                </a>
                            </div>
                            <div className="form_sec bg-white" style={formSecStyle}>
                                <Form />
                            </div>
                        <div className="add-sec text-center" style={addSecStyle}>
                            <div className="no-accnt" style={noAcctStyle}>
                                <a href="#" style={aStyle}>Don't have an account? Register</a>
                            </div>
                            <div className="f-pass" style={noAcctStyle}>
                                <a href="#" style={aStyle}>Forgot password?</a>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        )
    }
}

export default App





