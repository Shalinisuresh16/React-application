import React, { Component } from 'react';
import './Popup.scss';

class Popup extends Component{
    render(){
        return(
            <div className = "popup_container">
                    {this.props.text}
                    <button className="popup_btn"> Close </button>
            </div>
        )
    }
}

export default Popup;
    