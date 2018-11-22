import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/getAllCoins';
import BitItem from './sub_components/BitItem/BitItem';
import 'normalize.css';
import './bitcoin.scss';

class BitcoinList extends Component {
  
  componentDidMount() {
    this.props.getAllCoins();
  }

  render() {
    const listing = Object.values(this.props.coinsAll.coinsList);

    return (
    	<main className="wrapper">
    		<h1 className="bit-title">Bitcoin Table List</h1>   
        <div className="table-wrapper">
          <div className="table-titles">
              <p className="title-num">Number</p>
              <p className="title-img">Image</p>
              <p className="title-name">Name</p>
              <p className="title-price">Price, USD</p>
          </div>
          <div className="bit-table">
              {listing.length ? null : 
                      <div className="preloader">
                          <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66">
                              <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                          </svg>
                      </div>}
              {listing.slice(0,10).map((coin)=>(
                  < BitItem
                    key={coin.Id}
                    coinNumber={coin.Name}
                    coinName={coin.CoinName}
                    coinAvatar ={coin.ImageUrl}              
                  />
                ))}
          </div>       
        </div>    
		</main>
    );
  }
}

const mapStateToProps = (state) => ({
  coinsAll: state.coins
});


function mapDispatchToProps(dispatch) {
  return {
    getAllCoins: () => dispatch(actions.getAllCoinsData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BitcoinList);