import React from 'react';
import Image from 'next/image'
import { Card } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';


const { Meta } = Card;

const Invitation = () => {
    return (
        <>

            <Card
            className='mx-auto'
                hoverable
                style={{ width: 250 }}
                cover={<Image src="/img/azad.jpg" width="250" height="300" alt='' />}
                actions={[
                    <div className="flex flex-col gap-x-2 justify-center items-center text-gray-400 hover:text-green-400" key="reject">
                        <CloseOutlined className="rounded-full border hover:border-green-500 border-gray-500 p-2"  />
                        <p>Decline</p>
                        </div>,
                    <div className="flex flex-col gap-x-2 justify-center items-center text-gray-400 hover:text-green-400" key="accept"><CheckOutlined className="rounded-full border hover:border-green-500 border-gray-500 p-2"  />
                    <p>Accept</p>
                    </div>,
                ]}
            >
                <Meta className='text-center' title="Md Azadur" description="22 yr's, 5`7``, Dhaka, Unmmared" />

            </Card>

        </>
    );
};

export default Invitation;