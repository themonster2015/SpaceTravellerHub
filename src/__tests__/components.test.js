import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Profile from '../components/profile/Profile';
import Missions from '../components/missions/Missions';
import Rockets from '../components/rockets/Rockets';
import Nav from '../components/Nav';
import store from '../redux/configureStore';

describe('Test that all components are rendering just fine.', () => {
  it('Render the Nav', () => {
    const tree = renderer
      .create(<Router><Nav /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Render the Profile Page', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Render the Rockets Page.', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Render the Missions page.', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
