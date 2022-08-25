import React  from 'react';
import ReactDOM from 'react-dom';

import './ErrorModal.css'

const ErrorPortal = (props) => {

    const changeErrorState = () => {
        props.onShowHideErrorModal(true, "", "");
    };

    return(

        <div className='errorBg'>
            <div className='modal'>
                <header className='header'>
                    <h2>{props.errorHeader}</h2> 
                </header>
                <div className='content'>
                    {props.errorLabel}
                </div>
                <div className='actions'> 
                    <button onClick={changeErrorState}>OK</button>
                </div>
            </div>
        </div>
    )
};
const ErrorModal = (props) => {
    
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<ErrorPortal 
                errorLabel={props.errorLabel} 
                onShowHideErrorModal={props.onShowHideErrorModal} 
                errorHeader={props.errorHeader}
                />, document.getElementById("error-modal"))}
        </React.Fragment>
    )
};

export default ErrorModal;
            
