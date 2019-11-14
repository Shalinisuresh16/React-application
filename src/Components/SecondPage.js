import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Details from './Details';

class SecondPage extends Component{
    state={
        name1:"First",
        name2:"Second",
        name3:"Three"
    }
    render() {
        return (
            <nav>
                <Router>
                <ul>
                    <li>
                        <Link to ="/Details">{this.state.name1}</Link>
                        <ul className="ulstyle">
                            <li>
                            <Route exact path="/Details" component={Details} />
                            </li>
                        </ul>

                        
                    </li>
                    <li>
                        <Link to ="/Details">{this.state.name2}</Link>
                    </li>
                    <li>
                        <Link to ="/Details">{this.state.name3}</Link>
                    </li>
                </ul>
                
                </Router>
             </nav>
        );
    }
}
export default SecondPage;