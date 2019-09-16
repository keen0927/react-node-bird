import React, { useState, useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

    const { isLoggedIn } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({
    //         type: 'LOG_IN',
    //     });

    // },[])

    return (
        <div>
            {isLoggedIn && <PostForm />}
            {mainPosts.map(c => <PostCard key={c} post={c} />)}
        </div>
    );
};

export default Home;
