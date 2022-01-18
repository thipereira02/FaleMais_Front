/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Content, Select, Input, Button, Resume } from '../layouts/SimulationStyles';
import { makeSimulation } from '../services/server';
import Modal from './Modal';

export default function Simulation({originCodes, destinationCodes, selectedOriginCode, setSelectedOriginCode, plans}) {
    const [selectedDestinationCode, setSelectedDestinationCode] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [minutes, setMinutes] = useState('');
    const [showResume, setShowResume] = useState(false);
    const [result, setResult] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    function simulate(e) {
        e.preventDefault();

        const body = {
            originId: selectedOriginCode,
            destinationId: selectedDestinationCode,
            minutes,
            planId: selectedPlan
        };
        
        makeSimulation(body).then(res => setResult(res.data));

        setShowResume(true);
        window.scrollTo(0, 1300);
    }

    return (
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
                        <option value={d.destinationId} key={d.id}>{d.code}</option>
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
                        <option value={p.id} key={p.id}>{p.name}</option>
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
                        <col className="result"/>
                        <col className="result"/>
                        <col className="result"/>
                    </colgroup>
                    <tr>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Tempo</th>
                        <th>Plano FaleMais</th>
                        <th>Sem FaleMais</th>
                        <th>Com FaleMais</th>
                        <th>Diferença</th>
                    </tr>
                    <tr>
                        <td>{result.origin}</td>
                        <td>{result.destination}</td>
                        <td>{result.minutes}</td>
                        <td>{result.plan}</td>
                        <td>$ {result.withoutPlan}</td>
                        <td>$ {result.withPlan}</td>
                        <td>$ {result.economy}</td>
                    </tr>
                </table>
            </Resume>
            <p onClick={() => setModalOpen(!modalOpen)}>
                Ver tabela de tarifas
            </p>
            <Modal 
                modalOpen={modalOpen} 
                setModalOpen={setModalOpen} 
            />
        </Content>
    );
}
