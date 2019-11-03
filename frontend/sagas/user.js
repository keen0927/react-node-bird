import { all, fork, take, takeLatest, takeEvery, call, put, delay } from 'redux-saga/effects';
import { LOG_IN_REQUEST , LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducers/user';
import axios from 'axios';

function loginAPI() {
    // 서버에 요청을 보내는 부분
  // return axios.post('http:localhost:3065/api/user')
}

function* login(action) {
    try {
        // yield call(signUpAPI, action.data);
        yield delay(2000);
        yield put({ // dispatch와 동일
            type: LOG_IN_SUCCESS
        })
    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE
        })
    }
}

function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpAPI(signUpData) {
  return axios.post('http://localhost:3065/api/user', signUpData);
}
function* signUp(action) {
    try {
        yield call(signUpAPI, action.data);
        yield delay(2000);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e
        })
    }
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
    ])
}
