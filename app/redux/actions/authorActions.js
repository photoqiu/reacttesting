import * as async_datas  from '@configs/base.ajax'
import { login, loginByTicket }  from '@apis/common'

export const ACTION_CONSTANTS = {
    AUTHOR_RESULT_FETCHING: 'AUTHOR_RESULT_FETCHING',
    AUTHOR_RESULT_RECEIVED: 'AUTHOR_RESULT_RECEIVED',
    AUTHOR_RESULT_ERROR: 'AUTHOR_RESULT_ERROR'
}
  
export const actions = {
    receivedAuthorResults: function (result) {
        return {
            type: ACTION_CONSTANTS.AUTHOR_RESULT_RECEIVED,
            result
        }
    },
    fetchingAuthorResult: function () {
        return {
            type: ACTION_CONSTANTS.AUTHOR_RESULT_FETCHING
        }
    },
    errorAuthorResult: function (error) {
        return {
            type: ACTION_CONSTANTS.AUTHOR_RESULT_ERROR,
            error
        }
    },
}
  
export default function getAuthorResults(query) {
    return function (signal) {
        return async (dispatch, _, { netlifyEndpoint }) => {
            dispatch(actions.fetchingAuthorResult())
            try {
                const response = async_datas.doGetDatas(login)
                if (response.ok) {
                    const parsedRes = response.json()
                    return dispatch(actions.receivedAuthorResults(parsedRes.authorResponse.search))
                }
                throw new Error('author api error')
            } catch (error) {
                dispatch(actions.errorAuthorResult(error.message))
            }
        }
    }
}
  