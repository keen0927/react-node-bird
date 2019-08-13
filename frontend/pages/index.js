import React, { useState, useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch } from 'react-redux';
import { LOG_IN } from '../reducers/user';

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

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: LOG_IN,
            data: {
                nickname: 'keen'
            }
        })
    },[])


    return (
        <div>
            {dummy.isLoggedIn && <PostForm />}
            {dummy.mainPosts.map(c => <PostCard key={c} post={c} />)}
        </div>
    );
};

export default Home;
