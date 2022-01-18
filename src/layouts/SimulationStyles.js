import styled from 'styled-components';

export const Content = styled.div`
    padding: 50px 110px;

    h1 {
        font-size: 50px;
        font-weight: 600;
        text-align: center;
        color: #3597D4;
        margin-bottom: 50px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        font-size: 15px;
        text-decoration: underline;
        color: #3B3B3B;
        cursor: pointer;
        text-align: center;
        margin-top: 20px;

        :hover {
            color: #808080;
        }
    }
`;

export const Select = styled.select`
    height: 43px;
    background-color: #FFF;
    width: 35%;
    border-radius: 5px;
    border-color: #CCC;
    padding-left: 13px;
    font-size: 20px;
    color: #807a7a;
    margin-bottom: 15px;

    option {
        color: black;
        background-color: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;

export const Input = styled.input`
    padding: 16px;
    border: 1px solid #CCC;
    border-radius: 5px;
    margin-bottom: 15px;
    width: 35%;
    height: 43px;
    font-size: 20px;
    background-color: #FFF;
    color: #807a7a;

    ::placeholder{
        font-size: 20px;
        color: #807a7a;
    }
`;

export const Button = styled.button`
    margin-top: 20px;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    width: 120px;
    height: 120px;
    color: #FFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3597D4;

    :hover{
        box-shadow: 5px 5px 30px rgba(0, 0, 0, .80);
    }
`;

export const Resume = styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
    justify-content: center;
    margin-top: 50px;

    .result{
        background-color: #43B7BF;
        font-weight: 600;
    }

    table, th, td {
        color: #3B3B3B;
        border: 2px solid #3B3B3B;
        border-collapse: collapse;
        min-width: 90px;
        padding: 10px;
        text-align: center;
        font-size: 18px;
    }

    th, td {
        display: table-cell;
        vertical-align: middle;
    }

    th {
        font-weight: 600;
        background-color: #43B7BF;
    }
`;