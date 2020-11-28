import { useRouterHistory } from 'react-router'
import { createBrowserHistory } from 'history' 

const createAppHistory = useRouterHistory(createBrowserHistory)
const appHistory = createAppHistory({
    parseQueryString: parse,
    stringifyQuery: stringify
  })
  
export default appHistory
