import React, { PureComponent, Fragment } from 'react';
import './Perfume.scss';
import  test from './test';
import Popup from './Popup';

const products=test.Product;

const HEAD = 'HOME';
const LOGIN = 'LOGIN';

class Perfume extends PureComponent{
    constructor(props){
        super(props);
        this.state={showPopup:false}
    }
    onProduct=()=> {
        this.setState({showPopup:!this.state.showPopup});
    }

    displayCard() {
        return (
        products.map((pro) => (
            <div key={pro.productId} className="perfume_card">
                <img src={(pro.img)} alt='Product data' />
                <p>
                    <span>{pro.name}</span>
                </p>
                <div className="perfume_desc">
                    {pro.description}
                </div>
                <div className='perfume_price'>Rs.{pro.price}</div>
                <div className="perfume_button">
                    <button className="btn" onClick={this.onProduct.bind(this)}>Product Details</button>
                </div>
            </div>
        )));
    }
    displayOneCard(){
        console.log(products[0].img);
        return(
            <div className="popup_inner">
                <div>
                    <img className="popup_img" src= {products[2].img} alt="picture" />
                    <p>{products[0].name}</p>
                </div>
                <div className="popup_desc">
                    {products[0].description}
                    <p>Rs.{products[0].price}</p>
                </div>
            </div>
        )
    }
    render(){
        return(
            <Fragment>
                <header>
                    <ul>
                        <li>{HEAD}</li>
                        <div className="perfume_login">{LOGIN}</div>
                    </ul>
                </header>
                <div className="perfume_page_header"> Perfume appliances</div>
                <div className="perfume_container">
                    { this.displayCard() }
                </div>                             
                <footer>
                    <div className="footer_text">&#169; 2019-2020 Perfume.png | All rights reserved</div>
                </footer>
                {this.state.showPopup ? <Popup 
                    
                text={this.displayOneCard()}></Popup> : null};
            </Fragment>
        );
    }
}
export default Perfume;