import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureAPI'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { LoginTypes } from '../Containers/LoginScreen/redux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from '../Containers/LoginScreen/sagas'
import { getUserAvatar } from './GithubSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ]
}

// @NOTES
// takeLatest = one request at a time (pending request is canceled)
// takeEvery = takes every request.
