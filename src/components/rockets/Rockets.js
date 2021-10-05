import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  const dispatch = useDispatch();

  const reserveClick = (e) => {
    const rocketID = e.target.parentElement.parentElement.id;
    dispatch(reserveRocket(rocketID));
  };

  const rocketList = rockets.map((rocket) => (
    <div key={rocket.id} id={rocket.id} className="container">
      <img className="image" alt="rocket" src={rocket.rocket_images} />
      <div className="panel">
        <p className="title">{rocket.rocket_name}</p>
        <p className="description">
          {
            rocket.reserved
              ? <input className="notification" type="button" value="Reserved" />
              : null
          }
          {rocket.description}
        </p>
        {
          rocket.reserved
            ? (
              <input
                className="cancel"
                type="button"
                value="Cancel reservation"
                onClick={reserveClick}
              />
            )
            : (
              <input
                className="reserve"
                type="button"
                value="Reserve Rocket"
                onClick={reserveClick}
              />
            )
        }
      </div>
    </div>
  ));

  return (
    <>
      {rocketList}
    </>
  );
};

export default Rockets;
