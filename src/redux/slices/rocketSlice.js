const GET_ROCKETS = 'books/rocketsslice/GET_ROCKETS';
const GET_SUCCESS = 'rockets/rocketsslice/GET_SUCCESS';
const GET_ERR = 'rockets/rocketsslice/GET_ERR';

const apiURL = 'https://api.spacexdata.com/v3/rockets';

const pullRockets = () => async (dispatch) => {
  dispatch({ type: GET_ROCKETS });
  const response = await fetch(apiURL);
  const rockets = await response.json();
  return dispatch({ type: GET_SUCCESS, rockets });
};

export {
  pullRockets as default,
  GET_ROCKETS,
  GET_SUCCESS,
  GET_ERR,
};
