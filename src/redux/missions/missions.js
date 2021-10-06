const initialState = [];

const api = 'https://api.spacexdata.com/v3/missions';

const DISPLAY_MISSIONS = 'missionStore/missions/DISPLAY_MISSIONS';
const JOIN_MISSION = 'missionStore/missions/JOIN_MISSION';
const LEAVE_MISSION = 'missionStore/missions/LEAVE_MISSION';

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

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MISSIONS:
      return [...action.payload];
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    default:
      return state;
  }
};

export default missionReducer;
