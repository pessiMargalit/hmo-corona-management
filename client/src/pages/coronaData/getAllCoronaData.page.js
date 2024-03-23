import React, { useEffect, useState } from 'react';
import coronaDataService from '../../services/coronaData.service';
import MemberCard from '../../components/memberCard/memberCard';
import ErrorModal from '../../components/errorModal/errorModal';
import GenericCard from '../../components/genericCard';

const GetAllcoronaDataPage = () => {
    const [coronaData, setcoronaData] = useState([]);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function fetchMembers() {
            try {
                const allcoronaData = await coronaDataService.getAllCoronaData();
                setcoronaData(allcoronaData);
                if (allcoronaData == "") {
                    setError("Enter the system password before proceeding");
                    setShowModal(true);
                }
            } catch (err) {
                setError("An error occurred. Please try again later");
                setShowModal(true);
            }
        }
        fetchMembers();
    }, [coronaData]);

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ marginBottom: '20px' }}>Corona Data for All Members:</h1>
            {coronaData.map((coronaData, index) => (
                <GenericCard
                    key={index}
                    title={`Member ID: ${coronaData.memberId}`}
                    style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}
                    content={
                        <div>
                            <p><strong>Recovery Date:</strong> {coronaData.recoveryDate}</p>
                            <p><strong>Positive Result Date:</strong> {coronaData.positiveResultDate}</p>
                            <p><strong>Vaccination Dates:</strong></p>
                            <ul>
                                {coronaData.vaccinationDates.map((vaccination, index) => (
                                    <li key={index} style={{ marginLeft: '20px' }}>
                                        <p><strong>Date:</strong> {vaccination.date}</p>
                                        <p><strong>Manufacturer:</strong> {vaccination.manufacturer}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                />
            ))}
            <ErrorModal show={showModal} message={error} onClose={() => setShowModal(false)} />

        </div>
    );
};

export default GetAllcoronaDataPage;
