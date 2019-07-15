import React, { useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const SignupRe = () => {

    const [submit, setOnSubmit] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordCheckError, setPasswordCheckError] = useState(false);
    const [agree, setAgree] = useState(false);
    const [agreeError, setAgreeError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordCheck) {
            return setPasswordCheckError(true);
        }
        if (!agree) {
            return setAgreeError(true);
        }
        console.log(
            id,
            password,
            passwordCheck,
            agree
        )
    }
    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangePasswordCheck = (e) => {
        setPasswordCheckError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }
    const onChangeAgree = (e) => {
        setAgreeError(false);
        setAgree(e.target.checked);
    }

    return (
        <div>
            <Head>
                <title>Node Bird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.1/antd.min.css" />
            </Head>
            <AppLayout>
                <div>
                    <form onSubmit={onSubmit}>
                        <p>아이디 : <input type="text" value={id} required onChange={onChangeId} /></p>
                        <p>비밀번호 : <input type="text" value={password} required onChange={onChangePassword} /></p>
                        <p>비밀번호확인 : <input type="text" value={passwordCheck} required onChange={onChangePasswordCheck} /></p>
                        { passwordCheckError && <div>비밀번호가 일치하지 않습니다</div>}
                        <p><input type="checkbox" value={agree} onChange={onChangeAgree} /> 동의하기</p>
                        { agreeError && <div>동의는 필수 항목입니다.</div>}
                        <p><button type="button" onClick={onSubmit}>회원가입</button></p>
                    </form>
                </div>
            </AppLayout>
        </div>
    )
}

export default SignupRe;