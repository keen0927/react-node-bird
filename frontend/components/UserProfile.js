import React from 'react'
import {Card, Avatar} from 'antd';
import { useSelector } from 'react-redux';

const UserProfile = () => {

    // const { mainPosts } = useSelector(state => state.post)
    // const { nickname, Followers, Following } = useSelector(state => state.user);

    const { user } = useSelector(state => state.user);

    return (
        <div>
            <Card 
                actions={[
                    <div key="twit">트윗 {user.post.length}</div>,
                    <div key="following">팔로잉 {user.Following.length}</div>,
                    <div key="follower">팔로워 {user.Followers.length}</div>
            ]}>
                <Card.Meta
                    avatar={<Avatar>{user.nickname[0]}</Avatar>}
                    title={user.nickname}/>
            </Card>
        </div>
    )
}

export default UserProfile
