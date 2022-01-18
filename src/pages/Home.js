/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { getDestinationCodes, getOriginCodes, getPlans, getTariffs } from '../services/server';
import Cover from '../components/Cover';
import Header from '../components/Header';
import KnowMore from '../components/KnowMore';
import Footer from '../components/Footer';
import Simulation from '../components/Simulation';

export default function Home() {
    const [originCodes, setOriginCodes] = useState([]);
    const [selectedOriginCode, setSelectedOriginCode] = useState(null);
    const [destinationCodes, setDestinationCodes] = useState([]);
    const [plans, setPlans] = useState([]);
    const [tariffs, setTariffs] = useState([]);

    useEffect(() => {
        getPlans().then(res => setPlans(res.data));
        getOriginCodes().then(res => setOriginCodes(res.data));
        getTariffs().then(res => setTariffs(res.data));
    }, []);

    useEffect(() => {
        setDestinationCodes(null);

        if (selectedOriginCode !== null){
            getDestinationCodes(selectedOriginCode).then(res => setDestinationCodes(res.data));
        }
    }, [selectedOriginCode]);

    return (
        <>
            <Header />
            <Cover />
            <KnowMore />
            <Simulation 
                originCodes={originCodes} 
                destinationCodes={destinationCodes} 
                selectedOriginCode={selectedOriginCode}
                setSelectedOriginCode={setSelectedOriginCode}
                plans={plans}
                tariffs={tariffs}
            />
            <Footer />
        </>
    );
}
