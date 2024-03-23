import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddMemberPage from './pages/member/addMember.page';
import DeleteMemberPage from './pages/member/deleteMember.page';
// import GetMemberByIdPage from './pages/member/getMemberById.page';
import MemberListPage from './pages/member/memberList.page';
import UpdateMemberPage from './pages/member/updateMember.page';
import GetAllCoronaDataPage from './pages/coronaData/getAllCoronaData.page';
// import GetCoronaDataByMemberIdPage from './pages/coronaData/getCoronaDataByMemberId.page';
import AddCoronaDataPage from './pages/coronaData/addCoronaData.page';
import UpdateCoronaDataPage from './pages/coronaData/updateCoronaData.page';
import DeleteCoronaDataPage from './pages/coronaData/deleteCoronaData.page';
import HomePage from './pages/home.page';
import NavBar from './components/navBar/navBar';
import MembershipCardPage from './pages/membershipCard.page';
import MemberActions from './pages/memberActions/memberActions.page';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<MemberListPage />} />
          <Route path="/add-member" element={<AddMemberPage />} />
          <Route path="/delete-member/:id" element={<DeleteMemberPage />} />
          <Route path="/update-member/:id" element={<UpdateMemberPage />} />
          <Route path="/corona-data" element={<GetAllCoronaDataPage />} />
          <Route path="/add-corona-data" element={<AddCoronaDataPage />} />
          <Route path="/update-corona-data/:memberId" element={<UpdateCoronaDataPage />} />
          <Route path="/delete-corona-data/:memberId" element={<DeleteCoronaDataPage />} />
          <Route path="/membership-card/:memberId" element={<MembershipCardPage />} />
          <Route path="/member-actions" element={<MemberActions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
