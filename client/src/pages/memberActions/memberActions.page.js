import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorModal from '../../components/errorModal/errorModal';
import GenericButton from '../../components/genericButton';
import "./memberActions.page.css"

const MemberActions = () => {
  const [memberId, setMemberId] = useState("");
  const [isIdEntered, setIsIdEntered] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    try {
      setMemberId(event.target.value);
      setIsIdEntered(event.target.value.trim() !== "");
    }
    catch (error) {
      setError("An error occurred. Please try again later");
      setShowModal(true);
    }
  };

  return (
    <div className="member-actions-container">
      <h1>Member Actions</h1>
      <div className="action-input">
        <input
          type="text"
          placeholder="Enter Member ID"
          value={memberId}
          onChange={handleChange}
        />
        <p className="error-message">{"Please enter a member ID before proceeding."}</p>
      </div>
      <Link to={`/membership-card/${memberId}`}><GenericButton variant={"Primery"} label={"Get Membership Card"} style={{margin:"1vw",width:"81%"}} disabled={!isIdEntered} /></Link>
      <Link to="/add-member"><GenericButton variant={"Primery"} label={"Add Member"} /></Link>
      <Link to={`/delete-member/${memberId}`}><GenericButton variant={"Primery"} label={"Delete Member"} disabled={!isIdEntered} /></Link>
      <Link to={`/update-member/${memberId}`}><GenericButton variant={"Primery"} label={"Update Member"} disabled={!isIdEntered} /></Link>
      <Link to="/add-corona-data"><GenericButton variant={"Primery"} label={"Add Corona Data To Member"} /></Link>
      <Link to={`/update-corona-data/${memberId}`}><GenericButton variant={"Primery"} label={"Update Member's Corona Data"} disabled={!isIdEntered} /></Link>
      <Link to={`/delete-corona-data/${memberId}`}><GenericButton variant={"Primery"} label={"Delete Member's Corona Data"} disabled={!isIdEntered} /></Link>
      <ErrorModal show={showModal} message={error} onClose={() => setShowModal(false)} />
    </div>
  );
};


export default MemberActions;



