import React from 'react';
import Image from 'next/image'
import { Card } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';


const { Meta } = Card;

const Invitation = () => {
    return (
        <>

            <Card
                hoverable
                style={{ width: 320 }}
                cover={<Image src="/img/azad.jpg" width="320" height="350" alt='' />}
                actions={[
                    <CloseOutlined key="reject" />,
                    <CheckOutlined key="done" />,
                ]}
            >
                <Meta className='text-center' title="Md Azadur" description="22 yr's, 5`7``, Dhaka, Unmmared" />

            </Card>

        </>
    );
};

export default Invitation;