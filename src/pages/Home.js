/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Cover from '../components/Cover';
import Header from '../components/Header';
import KnowMore from '../components/KnowMore';
import Footer from '../components/Footer';
import { getDestinationCodes, getOriginCodes, getPlans } from '../services/server';

export default function Home() {
    const [originCodes, setOriginCodes] = useState([]);
    const [selectedOriginCode, setSelectedOriginCode] = useState(null);
    const [destinationCodes, setDestinationCodes] = useState([]);
    const [selectedDestinationCode, setSelectedDestinationCode] = useState(null);
    const [minutes, setMinutes] = useState('');
    const [plans, setPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showResume, setShowResume] = useState(false);
    const [result, setResult] = useState([]);

    useEffect(() => {
        getPlans().then(res => setPlans(res.data));
        getOriginCodes().then(res => setOriginCodes(res.data));
    }, []);

    useEffect(() => {
        setDestinationCodes(null);

        if (selectedOriginCode !== null){
            getDestinationCodes(selectedOriginCode).then(res => setDestinationCodes(res.data));
        }
    }, [selectedOriginCode]);

    function simulate(e) {
        e.preventDefault();

        const body = {
            originId: selectedOriginCode,
            destinationId: selectedDestinationCode,
            minutes,
            plan: selectedPlan
        };

        makeSimulation(body).then(res => setResult(res.data));

        setShowResume(true);
        window.scrollTo(0, 1300);
    }

    return (
        <>
            <Header />
            <Cover />
            <KnowMore />
            <Content>
                <h1>Veja sua economia</h1>
                <form onSubmit={simulate}>
                    <Select onChange={(e) => setSelectedOriginCode(e.target.value)} required>
                        <option value="0" disabled selected>Código da cidade de origem</option>
                        {originCodes.map(o => (
                            <option value={o.id} key={o.id}>{o.code}</option>
                        ))}
                    </Select>
                    <Select onChange={(e) => setSelectedDestinationCode(e.target.value)} required>
                        <option value="0" disabled selected>Código da cidade de destino</option>
                        {destinationCodes && destinationCodes.map(d => (
                            <option value={d.id} key={d.id}>{d.code}</option>
                        ))}
                    </Select>                   
                    <Input
                        type="number" 
                        placeholder="Tempo da ligação em minutos"
                        min='1' 
                        value={minutes} 
                        onChange={e => setMinutes(e.target.value)}
                        onInvalid={e => e.target.setCustomValidity('Você deve escolher a quantidade de minutos aqui.')} 
                        onInput={e => e.target.setCustomValidity('')}
                        required
                    />
                    <Select onChange={(e) => setSelectedPlan(e.target.value)}>
                        <option value="0" disabled selected>Selecione o plano FaleMais</option>
                        {plans.map(p => (
                            <option value={p.name} key={p.id}>{p.name}</option>
                        ))}
                    </Select>
                    <Button type="submit">
                        Simular
                    </Button>
                </form>
                <Resume show={showResume}>
                    <table>
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="result"/>
                            <col className="result"/>
                            <col className="result"/>
                        </colgroup>
                        <tr>
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>Tempo</th>
                            <th>Tarifa fixa por minuto</th>
                            <th>Plano FaleMais</th>
                            <th>Sem FaleMais</th>
                            <th>Com FaleMais</th>
                            <th>Economia de</th>
                        </tr>
                        <tr>
                            <td>Ted</td>
                            <td>22</td>
                            <td>Estudante</td>
                            <td>Ted</td>
                            <td>22</td>
                            <td>Estudante</td>
                            <td>Ted</td>
                            <td>22</td>
                        </tr>
                    </table>
                </Resume>
            </Content>
            <Footer />
        </>
    );
}

const Content = styled.div`
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
`;

const Select = styled.select`
    height: 43px;
    background-color: #FFF;
    width: 30%;
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

const Input = styled.input`
    padding: 16px;
    border: 1px solid #CCC;
    border-radius: 5px;
    margin-bottom: 15px;
    width: 30%;
    height: 43px;
    font-size: 20px;
    background-color: #FFF;
    color: #807a7a;

    ::placeholder{
        font-size: 20px;
        color: #807a7a;
    }
`;

const Button = styled.button`
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

const Resume = styled.div`
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

    th {
        font-weight: 600;
        background-color: #43B7BF;
    }
`;