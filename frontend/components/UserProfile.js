import React, { useCallback } from 'react'
import {Card, Avatar, Button} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {

    // const { mainPosts } = useSelector(state => state.post)
    // const { nickname, Followers, Following } = useSelector(state => state.user);

    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch(logoutAction);
    },[]) 

    return (
        <div>
            <Card 
                actions={[
                    <div key="twit">트윗 {user.Post.length}</div>,
                    <div key="following">팔로잉 {user.Following.length}</div>,
                    <div key="follower">팔로워 {user.Followers.length}</div>
            ]}>
                <Card.Meta
                    avatar={<Avatar>{user.nickname[0]}</Avatar>}
                    title={user.nickname}/>
            </Card>
            <Button onClick={onLogout} style={{ margin: '10px 0'}}>로그아웃</Button>
        </div>
    )
}

export default UserProfile
