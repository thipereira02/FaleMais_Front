import React from 'react';
import styled from 'styled-components';

import call from '../assets/call.gif';
import folder from '../assets/folder.png';

export default function Cover() {
    return (
        <Content>
            <div>
                <Title>
                    <img src={call} alt="call" width="100px" />
                    <h1>FaleMais</h1>
                </Title>
                <Subtitle>
                        Fale de graça até determinado tempo (em minutos) e só pague os minutos excedentes.
                </Subtitle>
                <Text>
                        Com o FaleMais da Telzir você adquire um plano e fala sem gastar mais nada até seus minutos esgotarem, pagando apenas pelos minutos excedentes com acréscimo de apenas 10% sobre a tarifa normal do produto. Os planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).
                </Text>
                <Button>
                    <button>
                        Calcule o valor da sua ligação
                    </button>
                </Button>
            </div>
            <img src={folder} alt="folder" />
        </Content>
    );
}

const Content = styled.div`
    margin: 120px 110px 0;
    display: flex;
    justify-content: space-between;

    h1{
        font-size: 40px;
        font-weight: 600;
        color: #3597D4;
    }

    button{
        margin-top: 20px;
        border: none;
        border-radius: 10px;
        height: 50px;
        width: 400px;
        background-color: #3597D4;
        color: #FFF;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
`;

const Subtitle = styled.div`
    margin-top: 60px;
    font-size: 25px;
    font-weight: 600;
    line-height: 40px;
    color: #3B3B3B;
`;

const Text = styled.div`
    margin-top: 40px;
    font-size: 15px;
    line-height: 20px;
    color: #808080;
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
`;