import { all, fork, take, takeLatest, call, put, delay } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

const HELLO_SAGA = 'HELLO_SAGA';

// const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
// const LOGIN_REQUEST = 'LOGIN_REQUEST';
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// const LOGIN_FAILURE = 'LOGIN_FAILURE';

function loginAPI() {
    // 서버에 요청을 보내는 부분
}

function* login() {
    try {
        // yield call(loginAPI); // 성공하면 다음줄 실행
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
    yield take(LOG_IN, login);
    console.log('LOGIN_SUCCESS');
    put({
        type: LOG_IN_SUCCESS
    });
}

export default function* userSaga() {
    yield all[
        // watchHello(),
        watchLogin()
        // watchSighUp()
    ]
}