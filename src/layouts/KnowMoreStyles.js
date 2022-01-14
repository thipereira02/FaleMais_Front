import styled from 'styled-components';

export const Content = styled.div`
    background-color: #90D5F2;
    padding: 50px 110px;

    h1 {
        font-size: 50px;
        font-weight: 600;
        text-align: center;
        color: #FFF;
    }
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 70px;

    div {
        height: 300px;
        width: 300px;
        background-color: #FFF;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 55px;
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
    }

    h2 {
        margin-top: 50px;
        text-align: center;
        color: #3597D4;
        font-size: 20px;
        font-weight: 600;
        line-height: 22px;
    }
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;

    button {
        margin-top: 20px;
        border: none;
        border-radius: 10px;
        height: 50px;
        width: 280px;
        background-color: #3597D4;
        color: #FFF;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
    }
`;