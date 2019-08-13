import React, { useState, useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../reducers/user';

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: 'keen',
        },
        content: '첫 번째 게시글',
        img: 'https://keen0927.github.io/img/keen-logo__none.png'
    },
    {
        User: {
            id: 1,
            nickname: 'keen',
        },
        content: '첫 번째 게시글',
        img: 'https://keen0927.github.io/img/keen-logo__none.png'
    }
    ]
}


const Home = () => {

    const { isLoggedIn, user } = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loginAction)
        // dispatch(logoutAction)
    },[])

    return (
        <div>
            {user ? <div>로그인 했습니다. {user.nickname}</div> : <div>로그아웃 했습니다.</div>}
            {dummy.isLoggedIn && <PostForm />}
            {dummy.mainPosts.map(c => <PostCard key={c} post={c} />)}
        </div>
    );
};

export default Home;
