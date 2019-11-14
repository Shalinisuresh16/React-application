import React from 'react';
import Child from './Child';
class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state={color:"green"};
    }
    onChan=()=>{
        this.setState({color:"brown"});
    }
    render(){
        return(
            <div>
            <Child color={this.state.color} />
            <button onClick={this.onChan}> Change color</button>
            </div>
        )
    }
}
export default Parent;