import React from 'react';
import styled from 'styled-components';

import Cover from '../components/Cover';
import Header from '../components/Header';

export default function Home() {
    return (
        <>
            <Header />
            <Cover />
            <Main>
                dfhdfhdfhfdh
            </Main>
        </>
    );
}

const Main = styled.div`
    height: 300px;
    background-color: #000;
`;