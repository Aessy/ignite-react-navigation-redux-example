import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'

import SendScreen from '../Containers/SendScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SendScreen: { screen: SendScreen },
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: { title: 'Login' }
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    header: {
      style: styles.header
    }
  }
})

const Navigation = ({ dispatch, primaryNav }) => (
  <PrimaryNav
    navigation={addNavigationHelpers({
      dispatch,
      state: primaryNav
    })}
  />
)

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  primaryNav: PropTypes.object.isRequired
}

export const navReducer = (state, action) => {
  const newState = PrimaryNav.router.getStateForAction(action, state)
  return newState || state
}

function mapStateToProps (state) {
  return {
    primaryNav: state.navReducer
  }
}

// export default PrimaryNav
export default connect(mapStateToProps)(Navigation)
