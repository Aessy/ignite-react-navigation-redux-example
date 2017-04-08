import { put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import LoginActions from './redux'

// attempts to login
export function * login ({ username, password }) {
  if (password === '') {
    // dispatch failure
    yield put(LoginActions.loginFailure('WRONG'))
  } else {
    // dispatch successful logins
    yield put(NavigationActions.navigate({ routeName: 'SendScreen' }))
    yield put(LoginActions.loginSuccess(username))
  }
}
