import rocketsReducer from '../redux/rockets/rockets';
import missionsReducer from '../redux/missions/missions';

describe('Rocket tests', () => {
  test('should return the initial state of rockets reducer', () => {
    expect(rocketsReducer(undefined, {})).toEqual({
      rockets: [],
    });
  });
});

describe('Mission tests', () => {
  test('should return the initial state of missions reducer', () => {
    expect(missionsReducer(undefined, {})).toEqual([]);
  });
});
