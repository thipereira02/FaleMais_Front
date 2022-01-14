import React from 'react';
import { Content, Box, Button } from '../layouts/KnowMoreStyles';
import { GiModernCity } from 'react-icons/gi';
import { MdOutlineTimer } from 'react-icons/md';
import { FaListUl } from 'react-icons/fa';

export default function KnowMore() {
    return (
        <Content>
            <h1>Como funciona</h1>
            <Box>
                <div>
                    <GiModernCity size="55px" color="#3B3B3B" />
                    <h2>Escolha os códigos das cidades de origem e destino</h2>
                </div>
                <div>
                    <MdOutlineTimer size="55px" color="#3B3B3B" />
                    <h2>Informe o tempo da ligação em minutos</h2>
                </div>
                <div>
                    <FaListUl size="55px" color="#3B3B3B" />
                    <h2>Selecione o plano FaleMais e veja sua economia</h2>
                </div>
            </Box>
            <Button>
                <button>
                Faça a simulação
                </button>
            </Button>
        </Content>
    );
}
