import React, { Component } from 'react';
import axios from 'axios';
import 'normalize.css';
import './bititem.scss';

class BitItem extends Component { 

  constructor(props){
    super(props);
    this.state = {
      itemName: this.props.coinNumber,
      bitprice: ''
    };

  }

  componentDidMount(){
    let price = '';
    const priceUrl = `https://min-api.cryptocompare.com/data/price?fsym=`;
    const priceUrlEnd = `&tsyms=USD`;
        axios
          .get(priceUrl+this.state.itemName+priceUrlEnd)
          .then((response) => {
            price = response.data;
            this.setState({
               bitprice: price.USD
            });
          })
          .catch((error) => {
            console.log(error);
          });
  }


  render() {

    const {
            coinNumber,
            coinName,
            coinAvatar
          } = this.props;
          
    const homeUrl = 'https://cryptocompare.com';

    return (
          <div className="bit-item">
            <p className="bit-item-num">{coinName}</p>
            <div className="bit-item-image-wrap">
              <img className="bit-item-image" src={homeUrl + coinAvatar} alt="coin's avatar"/>
            </div>                   
            <p className="bit-item-name">{coinName}</p> 
            <p className="bit-item-price">{this.state.bitprice}</p>    
          </div>
    );
  }
}


export default BitItem;