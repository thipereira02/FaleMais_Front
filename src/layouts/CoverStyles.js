import styled from 'styled-components';

export const Content = styled.div`
    margin: 120px 110px 0;
    display: flex;
    justify-content: space-between;

    h1 {
        font-size: 50px;
        font-weight: 600;
        background-image: linear-gradient(to top, #3597D4, #90D5F2);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
`;

export const Subtitle = styled.div`
    margin-top: 60px;
    font-size: 25px;
    font-weight: 600;
    line-height: 40px;
    color: #3B3B3B;
`;

export const Text = styled.div`
    margin-top: 40px;
    font-size: 15px;
    line-height: 20px;
    color: #808080;
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