import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import workspace from './workspace.jpg';
import './bootstrap.min.css';
import './piggy.css';

class Form extends Component{

    render() {
        return (
            <form action="" method="post" style={{padding: '1.5rem'}}>
                <div className="form-header" style={{padding: '1rem'}}>
                    <h3 className="text-center" style={{color: '#083e9e', fontSize: '1.5rem', fontWeight: '700',}}>Login to your account</h3>
                    <p className="text-center" style={{color: '#4a5568', fontSize: '0.875rem',}}>Securely login to your PiggyVest</p>
                </div>
                <div class="input-sec">
                    <label className="lab">Email or Phone Number</label>
                    <input type="text" className="form-control c_input"></input>
                </div>
                <div className="input-sec">
                    <label className="lab">Password</label>
                    <input type="password" className="form-control c_input"></input>
                </div>
                <div className="sub-btn" style={{padding: '1rem'}}>
                    <button type="submit" className="btn btn-primary btn-block s-btn">
                        <h6 style={{padding: '0.5rem'}}>LOG IN</h6>
                    </button>
                </div>
            </form>
        )
    }
};

export default Form;