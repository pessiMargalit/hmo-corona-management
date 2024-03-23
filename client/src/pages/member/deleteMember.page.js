import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorModal from '../../components/errorModal/errorModal';
import memberService from '../../services/member.service';

const DeleteMemberPage = () => {
    const { id } = useParams();
    const [message, setMessage] = useState('')
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function deleteMember() {
            try {
                await memberService.deleteMember(id);
                setMessage('Member deleted successfully')
            } catch (error) {
                setError("An error occurred. Please try again later");
                setShowModal(true);            }
        }
        deleteMember();
    }, [id]);

    return (
        <div>
            <h1>{message}</h1>
            <ErrorModal show={showModal} message={error} onClose={() => setShowModal(false)} />
        </div>
    );
};

export default DeleteMemberPage;
