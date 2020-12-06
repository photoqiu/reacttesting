import {doGetDatas}  from '@configs/base.ajax'
import { ACTION_CONSTANTS } from './action-type';
import { login, loginByTicket }  from '@apis/common'


  
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
                const response = doGetDatas(login)
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
  