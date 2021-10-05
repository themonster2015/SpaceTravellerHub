import { GET_ROCKETS, GET_SUCCESS, GET_ERR } from '../slices/rocketSlice';

const RESERVE_ROCKET = 'rockets/rockets/RESERVE_ROCKET';

const initialState = {
  rockets: [],
};

const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_ROCKET:
    {
      const TrackRocket = state.rockets.map((rocket) => {
        if (rocket.id !== Number(action.payload)) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
      return { ...state, rockets: TrackRocket };
    }
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
export { reserveRocket };
