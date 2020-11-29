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
  
export default function getAuthorResults(query, search = 'all', page = 1) {
    return function (signal) {
        return async (dispatch, _, { netlifyEndpoint }) => {
            dispatch(actions.fetchingSearchResult())
            try {
                const getAuthorUrl = new URL('/.netlify/functions/search', netlifyEndpoint)
                const params = {
                    q: query,
                    page,
                    search,
                }
                getAuthorUrl.search = new URLSearchParams(params)
                const response = await fetch(getAuthorUrl, { signal })
                if (response.ok) {
                    const parsedRes = await response.json()
                    return dispatch(actions.receivedAuthorResults(parsedRes.authorResponse.search))
                }
                throw new Error('author api error')
            } catch (error) {
                dispatch(actions.errorAuthorResult(error.message))
            }
        }
    }
}
  