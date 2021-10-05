import { useSelector } from 'react-redux';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  const rocketList = rockets.map((rocket) => (
    <div key={rocket.id} className="container">
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
            ? <input className="cancel" type="button" value="Cancel Reservation" />
            : <input className="reserve" type="button" value="Reserve Rocket" />
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
