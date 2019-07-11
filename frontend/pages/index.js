import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <>
            <Link href="/about"><a>about</a></Link>
            하세깃!
        </>
    );
};

export default Home;