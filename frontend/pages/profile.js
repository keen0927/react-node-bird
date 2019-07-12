import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const profile = () => {
    return (
        <>
            <Head>
                <title>Node Bird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.1/antd.min.css" />
            </Head>
            <AppLayout>
                <div>profile!</div>
            </AppLayout>
        </>
    )
}

export default profile;