import React, { useState } from 'react';

function signupRepeat() {

    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [termCheck, setTermCheck] = useState(false);
    const [passwordCheckError, setPasswordCheckError] = useState(false);
    const [termCheckError, setTermCheckError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordCheck) {
            return setPasswordCheckError(true);
        }
        if (!termCheck) {
            return setTermCheckError(true);
        }
        console.log({
            id,
            nickname,
            password,
            passwordCheck,
            termCheck
        })
    }
    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangePasswordCheck = (e) => {
        // if (password === passwordCheck) setPasswordCheckError(false);
        setPasswordCheckError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }
    const onChangeTermCheck = (e) => {
        // if (e.target.checked === true) setTermCheckError(false);
        setTermCheckError(false);
        setTermCheck(e.target.checked);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <p>아이디 : <input type="text" value={id} required onChange={onChangeId} /></p>
                <p>닉네임 : <input type="text" value={nickname} required onChange={onChangeNickname} /></p>
                <p>비밀번호 : <input type="password" value={password} required onChange={onChangePassword} /></p>
                <p>비밀번호 확인 : <input type="password" value={passwordCheck} onChange={onChangePasswordCheck} /></p>
                { passwordCheckError && <p>비밀번호가 일치하지 않습니다.</p>}
                <p><input type="checkbox" value={termCheck} onChange={onChangeTermCheck} /> 동의하기</p>
                { termCheckError && <p>동의하기는 필수 입니다.</p>}
                <p><button type="button" onClick={onSubmit}>회원가입</button></p>
            </form>
            
        </div>
    )
}

export default signupRepeat;
