const initialState = [];

const api = 'https://api.spacexdata.com/v3/missions';

const DISPLAY_MISSIONS = 'missionStore/missions/DISPLAY_MISSIONS';

export const displayMissions = () => (dispatch) => {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      const missions = [];
      data.forEach((datum) => {
        missions.push({
          mission_id: datum.mission_id,
          mission_name: datum.mission_name,
          description: datum.description,
        });
      });

      dispatch({
        type: DISPLAY_MISSIONS,
        payload: missions,
      });
    });
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MISSIONS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default missionReducer;
