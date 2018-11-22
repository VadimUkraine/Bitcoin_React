import axios from 'axios';


export function getAllCoins(coinsList) {
  return {
    type: 'GET_ALL_COINS_DATA',
    payload: coinsList
  };
}

export function getAllCoinsData() {
  return function (dispatch) {
    axios
      .get(`https://min-api.cryptocompare.com/data/all/coinlist`)
      .then((response) => {
        const coinsList = response.data['Data'];
        dispatch(getAllCoins(coinsList));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}