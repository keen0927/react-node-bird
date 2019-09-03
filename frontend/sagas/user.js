import { all, fork, take, takeLatest, call, put } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

const HELLO_SAGA = 'HELLO_SAGA';

function loginAPI() {   
    // 서버에 요청을 보내는 부분
}

function* login() {
    try {
        yield call(loginAPI); // 성공하면 다음줄 실행
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
    yield takeLatest(LOG_IN, login)
}

function* helloSaga() { 
    console.log('hello saga1');
    yield take(HELLO_SAGA);
    console.log('hello saga');
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        helloSaga()
    ]);
}