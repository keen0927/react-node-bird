import React from 'react';
import { Form, Input, Button, List, Card, Icon } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';

const profile = () => {
    return (
        <div>
            <NicknameEditForm />
            <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={['킨','하이','노드버드']}
                renderItem={
                    item => (
                        <List.Item style={{ marginTop: '20px' }}>
                            <Card actions={[<Icon type="stop" />]}>
                                <Card.Meta key="stop" description={item} />
                            </Card>
                        </List.Item>
                    )
                }
             />
             <List
             style={{ marginBottom: '20px' }}
             grid={{ gutter: 4, xs: 2, md: 3 }}
             size="small"
             header={<div>팔로잉 목록</div>}
             loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
             bordered
             dataSource={['킨','하이','노드버드']}
             renderItem={
                 item => (
                     <List.Item style={{ marginTop: '20px' }}>
                         <Card key="stop" actions={[<Icon type="stop" />]}>
                             <Card.Meta description={item} />
                         </Card>
                     </List.Item>
                 )
             }
          />
        </div>
    )
}

export default profile;