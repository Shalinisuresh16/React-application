import React, { Component } from 'react';

class Child extends Component{
    constructor(props){
    super(props);
    this.state={color:props.color};
    }
    render(){
        return(
        <div style={{color:this.state.color}}>Hello world
        </div>
        );
    }
}
export default Child;