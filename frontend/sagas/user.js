import { all, fork, take, takeLatest, takeEvery, call, put, delay } from 'redux-saga/effects';
import { LOG_IN_REQUEST , LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducers/user';

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
    yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpAPI() {

}
function* signUp() {
    try {
        yield call(signUpAPI);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE
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