import React from 'react';
import {Row, Col, Form, Input, Button} from 'antd';

const NicknameEditForm = () => {
    return (
        <div>
            <Form style={{ marginBottom: '24px', border: '1px solid #d9d9d9', padding: '16px' }}>
                <Row>
                    <Col xs={24} md={20}>
                        <Input addonBefore="닉네임" />
                    </Col>
                    <Col md={1}></Col>
                    <Col xs={24} md={3}>
                        <Button type="primary">수정</Button>
                    </Col>
                </Row>


            </Form>
        </div>
    )
}

export default NicknameEditForm;