
import { routerMiddleware } from 'react-router-redux'
import logger from './logger'
import appHistory from './history'
// import router from './router'

const reduxRouterMiddleware = routerMiddleware(appHistory)

export {
  reduxRouterMiddleware,
  logger
}