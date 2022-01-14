import React from 'react';

import folder from '../assets/folder.png';
import Header from '../components/Header';

export default function Home() {
    return (
        <>
            <Header />
            <img src={folder} alt="folder" />
        </>
    );
}