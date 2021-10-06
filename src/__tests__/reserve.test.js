import rocketsReducer, { reserveRocket } from '../redux/rockets/rockets';
import missionsReducer, { joinMission } from '../redux/missions/missions';

describe('Test rocket reserve', () => {
  test('should return the rockets with reverted reserved value', () => {
    const initialRocketState = {
      rockets: [
        {
          id: 1,
          reserved: true,
        },
      ],
    };
    expect(rocketsReducer(initialRocketState, reserveRocket(1))).toEqual(
      {
        rockets: [
          {
            id: 1,
            reserved: false,
          },
        ],
      },
    );
  });
});

describe('Test mission join', () => {
  test('should return the missions with reverted reserved value', () => {
    const initialMissionState = [
      {
        mission_id: 1,
        reserved: false,
      },
    ];

    expect(missionsReducer(initialMissionState, joinMission(1))).toEqual(
      [
        {
          mission_id: 1,
          reserved: true,
        },
      ],
    );
  });
});
