import { GET_ROCKETS, GET_SUCCESS, GET_ERR } from '../slices/rocketSlice';

const initialState = {
  rockets: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return { ...state, pending: true };
    case GET_SUCCESS:
    {
      const data = action.rockets;
      const subset = [];
      data.forEach((rocket) => {
        subset.push(
          {
            id: rocket.id,
            rocket_name: rocket.rocket_name,
            description: rocket.description,
            rocket_images: rocket.flickr_images,
          },
        );
      });
      return { ...state, pending: false, rockets: subset };
    }
    case GET_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
