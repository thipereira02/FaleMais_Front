import React from 'react';
import { Content, Title, Subtitle, Text, Button } from '../layouts/CoverStyles';

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
                    <button onClick={() => window.scrollTo(0, 550)}>
                        Saiba mais
                    </button>
                </Button>
            </div>
            <img src={folder} alt="folder" />
        </Content>
    );
}
