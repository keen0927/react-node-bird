import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const useEffectTest = () => {

    const [ name, setName ] = useState('');
    const [ nickname, setNickname ] = useState('');
    useEffect(() => {
        console.log({
            name,
            nickname
        })
    });

    // #1 마운트 될때만 
    // 두번쨰 파라미터 빈 배열 추가
    useEffect(() => {
        console.log('마운트');
    },[]);

    // #2 특정 값이 업데이트 될때만
    useEffect(() => {
        console.log(name);
    },[name]);


    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <p><input type="text" value={name} onChange={onChangeName} style={{ border: '1px solid red'}} /></p>
                <p><input type="text" value={nickname} onChange={onChangeNickname} style={{ border: '1px solid red'}} /></p>
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>

            </div>
        </div>
    );
};

export default useEffectTest;