import rocketsReducer from '../redux/rockets/rockets';

describe('Rocket tests', () => {
  test('should return the initial state of rockets reducer', () => {
    expect(rocketsReducer(undefined, {})).toEqual({
      rockets: [],
    });
  });
});
