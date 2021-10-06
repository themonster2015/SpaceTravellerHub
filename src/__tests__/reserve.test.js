import rocketsReducer, { reserveRocket } from '../redux/rockets/rockets';

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
