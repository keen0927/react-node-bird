import React, { useCallback } from 'react'
import {Card, Avatar, Button} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
// import { logoutAction } from '../reducers/user';

const UserProfile = () => {

    // const { mainPosts } = useSelector(state => state.post)
    // const { nickname, Followers, Following } = useSelector(state => state.user);

    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST
        })
    },[me]) 

    return (
        <div>
            <Card 
                actions={[
                    <div key="twit">트윗 {me.Post.length}</div>,
                    <div key="following">팔로잉 {me.Followings.length}</div>,
                    <div key="follower">팔로워 {me.Followers.length}</div>
            ]}>
                <Card.Meta
                    avatar={<Avatar>{me.nickname[0]}</Avatar>}
                    title={me.nickname}/>
            </Card>
            <Button onClick={onLogout} style={{ margin: '10px 0'}}>로그아웃</Button>
        </div>
    )
}

export default UserProfile
