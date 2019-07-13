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

    const onSubmit = () => {

    };

    const onChangeId = () => {

    };

    const onChangeNick = () => {

    };

    const onChangePassword = () => {

    };

    const onChangePasswordCheck = () => {

    };

    const onChangeTerm = () => {

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
                        <Input name="user-id" required onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <Input name="user-nick" required onChange={onChangeNick} />                    
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <Input name="user-password" required onChange={onChangePassword} />                                        
                    </div>
                    <div>
                        <label htmlFor="user-password-check">비밀번호확인</label>
                        <Input name="user-password-check" required onChange={onChangePasswordCheck} />                                                            
                    </div>
                    <div>
                        <Checkbox name="user-term" onChange={onChangeTerm}>동의하기</Checkbox>
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