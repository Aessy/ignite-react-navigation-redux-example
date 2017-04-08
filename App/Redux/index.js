import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import { navReducer } from '../Navigation/AppNavigation'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    navReducer,
    github: require('./GithubRedux').reducer,
    login: require('../Containers/LoginScreen/redux').reducer,
    search: require('./SearchRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
