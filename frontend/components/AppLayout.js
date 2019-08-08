import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';


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


const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle'}}></Input.Search>
                </Menu.Item>
            </Menu>
            <Row gutter={24} style={{ maxWidth: '1024px', margin: '20px auto 0 auto' }}>
                <Col xs={24} md={6}>
                    {dummy.isLoggedIn
                        ?   <UserProfile />
                        :   <LoginForm />
                    }
                </Col>
                <Col xs={24} md={12}>
                    { children }
                </Col>
                <Col xs={24} md={6}>
                    section area
                </Col>
            </Row>
        </div>
    )
}

AppLayout.proptypes = {
    children: PropTypes.node
}

export default AppLayout;