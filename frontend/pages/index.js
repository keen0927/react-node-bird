import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Card, Avatar, Icon } from 'antd';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

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
    }]
}


const Home = () => {

    return (
        <div>
            {dummy.isLoggedIn && <PostForm />}
            {dummy.mainPosts.map(c => {
                return (
                    <PostCard key={c} post={c} />
                )
            })}
        </div>
    );
};

export default Home;
