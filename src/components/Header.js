import React from 'react';
import styled from 'styled-components';
import { BiMenuAltRight } from 'react-icons/bi';

import logo from '../assets/logo.png';

export default function Header() {
    return (
        <Content>
            <img src={logo} alt="logo" />
            <BiMenuAltRight size="35px" color="#247b95"/>
        </Content>
    );
}

const Content = styled.div`
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    height: 70px;
    background-color: #FFF;
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        height: 45px;
    }
`;