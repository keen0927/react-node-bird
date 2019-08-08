import React from 'react'
import { Form, Button, Input } from 'antd';



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

const PostForm = () => {
    return (
        <Form style={{ marginBottom: 20}} encType="multipart/form-data">
            <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?"></Input.TextArea>
            <div>
                <input type="file" multiple hidden/>
                <Button style={{ marginRight: '8px' }}>이미지 업로드</Button>
                <Button type="primary" htmlType="submit">짹짹</Button>
            </div>
            <div>
                {dummy.imagePaths.map((v,i) => {
                    return (
                        <div key={v} style={{display: 'inline-block'}}>
                            <img src={"http://localhost:3065/" + v} style={{ width: '200px'}} alt="" />
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Form>
    )
}

export default PostForm
