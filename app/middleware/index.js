
import { routerMiddleware } from 'react-router-redux'
import logger from './logger'

const reduxRouterMiddleware = routerMiddleware()

export {
  reduxRouterMiddleware,
  logger
}