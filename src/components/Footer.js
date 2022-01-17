import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo-w&b.png';

export default function Footer() {
    return (
        <Content>
            <img src={logo} alt="logo" />
            <p>© Copyright 2022 Telzir. All Rights Reserved.</p>
            <div></div>
        </Content>
    );
}

const Content = styled.div`
    background-color: #303030;
    height: 70px;
    padding: 0 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 45px;
    }

    p {
        color: #FFF;
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 3px;
    }

    div {
        width: 141px;
    }
`;