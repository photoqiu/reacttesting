/* eslint-disable no-shadow */
import { createAction, handleActions } from 'redux-actions';
import { ADD_TODO, LOGOUT, LOGIN, REGISTER } from 'actionTypes'
import { List, Map } from 'immutable';
import { createAjaxAction } from '@configs/common'
import * as common from '@apis/common'

let id = 0
export const create = createAction(ADD_TODO, (text) => text);
// eslint-disable-next-line no-plusplus
export const requestLogin = createAction(LOGIN)
export const registerUsers = createAction(REGISTER)
export const logout = createAction(LOGOUT)
export const login = createAjaxAction(common.login, requestLogin, registerUsers)

const initialState = Map({
    input: '',
    list: List([
        Map({ id: 0, name: '水果', entered: true }),
        Map({ id: 1, name: '米饭', entered: true }),
        Map({ id: 2, name: '鸡腿', entered: true }),
    ]),
});

export default handleActions({
    [TOGGLE_TODO]: (state, action) => state.set('input', action.payload),
    [ADD_TODO]: (state, action) =>
        state.update('list', (list) =>
            list.push(Map({
                    id: action.payload.id,
                    name: action.payload.text,
                    entered: false,
                })
            )
        ),
    [LOGIN]: (state, action) => {
        const index = state.get('list').findIndex((item) => item.get('id') === action.payload);
        return state.updateIn(['list', index, 'entered'], entered => !entered);
    },
    [LOGOUT]: (state, action) => {
        const index = state.get('list').findIndex((item) => item.get('id') === action.payload);
        return state.deleteIn(['list', index]);
    },
}, initialState);