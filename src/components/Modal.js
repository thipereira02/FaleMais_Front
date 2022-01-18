/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

Modal.setAppElement(document.querySelector('.root'));

export default function ModalTariffs({modalOpen, setModalOpen}) {
    return (
        <StyledModal
            style={customStyles}
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(!modalOpen)}
        >
            <Text>
                    Tabela de tarifas
            </Text>
            <Table>                   
                <tr>
                    <th>Origem</th>
                    <th>Destino</th>
                    <th>$/min <br/> SEM FaleMais</th>
                    <th>$/min <br/> COM FaleMais</th>
                </tr>
                <tr>
                    <td>asdasd</td>
                    <td>asdasd</td>
                    <td>asdasd</td>
                    <td>asdasd</td>
                </tr>
                <tr>
                    <td>asdasd</td>
                    <td>asdasd</td>
                    <td>asdasd</td>
                    <td>asdasd</td>
                </tr>
                <tr>
                    <td>asdasd</td>
                    <td>asdasd</td>
                    <td>asdasd</td>
                    <td>asdasd</td>
                </tr>
                <tr>
                    <td>asdasd</td>
                    <td>asdasd</td>
                    <td>asdasd</td>
                    <td>asdasd</td>
                </tr>
                <tr>
                    <td>asdasd</td>
                    <td>asdasd</td>
                    <td>asdasd</td>
                    <td>asdasd</td>
                </tr>
                <tr>
                    <td>asdasd</td>
                    <td>asdasd</td>
                    <td>asdasd</td>
                    <td>asdasd</td>
                </tr>    
            </Table>
            <p>
                    *No plano FaleMais os minutos excedentes têm um acréscimo de 10% sobre a tarifa normal do minuto.
            </p>
            <div>
                <Close onClick={() => setModalOpen(!modalOpen)} />
            </div>
        </StyledModal>
    );
}

const StyledModal = styled(ReactModal)`
    top: 50vh;
    left: 50vw;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 480px;
    background-color: #90D5F2;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    padding: 20px 110px;

    div {
        margin-top: 10px;
    }

    p {
        margin-top: 8px;
        font-size: 12px;
        color: #3B3B3B;
        text-align: center;
    }
`;

const customStyles = {
    overlay: {zIndex: 1000}
};

const Text = styled.h1`
    font-weight: 600;
    font-size: 34px;
    line-height: 41px;
    color: #FFF;
    text-align: center;
    margin-bottom: 15px;
`;

const Table = styled.table`
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    color: #3B3B3B;

    th, td {
        border: 2px solid #3B3B3B;
        border-collapse: collapse;
        min-width: 90px;
        padding: 10px;
        display: table-cell;
        vertical-align: middle;
    }

    th {
        font-weight: 600;
        background-color: #43B7BF;
    }

    td {
        background-color: #FFF;
    }
`;

const Close = styled(AiOutlineClose)`
    font-size: 50px;
    cursor: pointer;
    color: #3B3B3B;
`;