const INIT_STATE = {
  coinsList: {}
};

export default function getAllCoins(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_COINS_DATA':
      return { coinsList: action.payload };

    default:
      return state;
  }
}
