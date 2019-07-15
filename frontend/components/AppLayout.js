import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button } from 'antd';

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
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
<<<<<<< HEAD
            <Link href="/signupRe"><a><Button>회원가입 리</Button></a></Link>
=======
            <Link href="/signupRepeat"><a><Button>회원가입리핏</Button></a></Link>
>>>>>>> e031c6b0542a255c41c13c4f1e65c13d54a3594a
            { children }
        </div>
    )
}

export default AppLayout;