import React from 'react'
import {Card, Avatar} from 'antd';

const dummy = {
    nickname: 'Keen',
    Post: [],
    Follweings: [],
    Followers: [],
    isLoggedIn: false
}

const UserProfile = () => {
    return (
        <div>
            <Card 
                actions={[
                    <div key="twit">트윗 {dummy.Post.length}</div>,
                    <div key="following">팔로잉 {dummy.Follweings.length}</div>,
                    <div key="follower">팔로워 {dummy.Followers.length}</div>
            ]}>
                <Card.Meta
                    avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                    title={dummy.nickname}/>
            </Card>
        </div>
    )
}

export default UserProfile
