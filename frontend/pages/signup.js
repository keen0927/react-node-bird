import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';

const signup = () => {

    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({
            id,
            nickname,
            password,
            passwordCheck,
            term
        });

        if (password !== passwordCheck) {
            return setPasswordError(true);
        }

        if (!term) {
            return setTermError(true)
        }
    };

    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangeNick = (e) => {
        setNickname(e.target.value);
    };

    const onChangePassword = (e) => {       
        setPassword(e.target.value);
    };

    const onChangePasswordCheck = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };

    const onChangeTerm = (e) => {
        setTermError(false);
        setTerm(e.target.checked);
    };


    

    return (
        <>
            <Head>
                <title>Node Bird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.1/antd.min.css" />
            </Head>
            <AppLayout>
                <Form onSubmit={onSubmit} style={{ padding: '10px'}}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <Input name="user-nick" value={nickname} required onChange={onChangeNick} />                    
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />                                          
                    </div>
                    <div>
                        <label htmlFor="user-password-check">비밀번호확인</label>
                        <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />                                                             
                        {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                    </div>
                    <div>
                        <Checkbox name="user-term" value={term} onChange={onChangeTerm}>동의하기</Checkbox>
                        {termError && <div style={{ color: 'red'}}>동의하기 후 회원 가입이 가능합니다.</div>}
                    </div>
                    <div>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>
                <div>회원가입</div>
            </AppLayout>
        </>
    )
}

export default signup;