import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorModal from '../../components/errorModal/errorModal';
import coronaDatasService from '../../services/coronaData.service';

const DeleteCoronaDataPage = () => {
    const { memberId } = useParams();
    const [message, setMessage] = useState("")
    const isDeleted = useRef(false);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function deleteCoronaData() {
            try {
                await coronaDatasService.deleteCoronaData(memberId);
                setMessage("Member's corona data deleted successfully")
            } catch (error) {
                setError("An error occurred. Please try again later");
                setShowModal(true);
            }
        }
        if (!isDeleted.current){
            deleteCoronaData();
            isDeleted.current = true
        }
    }, [memberId]);

    return (
        <div>
            <h1>{message}</h1>
            <ErrorModal show={showModal} message={error} onClose={() => setShowModal(false)} />
        </div>
    );
};

export default DeleteCoronaDataPage;
