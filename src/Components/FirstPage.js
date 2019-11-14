import React,{ Component } from 'react';
import './FirstPage.css';
import SecondPage from './SecondPage';
// import '../Images/logo.png';

class FirstPage extends Component{
    state={
        line:"Hi hello"
    };
    onchange=()=>{
        this.setState({
            line:"hw r y?"
        })
    }
    render(){
        return(
            <div>
                <div className="navcontainer">
                    <SecondPage></SecondPage>
                </div>
                {/* <img src='../Images/logo.png' alt="image"/> */}
            </div>
        )
    }
}
export default FirstPage;