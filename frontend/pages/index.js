import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <>
            <Head>
                <title>Node Bird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.1/antd.min.css" />
            </Head>
            <AppLayout>
                <div>Hello</div>
            </AppLayout>
        </>
    );
};

export default Home;