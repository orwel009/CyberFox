import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import LoginRegister from './components/LogReg/LoginRegister';
import HomePage from './components/Home/HomePage';
import QuizPage from './components/Home/QuizPage';
import ChallengePage from './components/Home/ChallengePage';
import RewardsPage from './components/Home/RewardsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard/>} />
        <Route path='/login' element={<LoginRegister/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/quizPage' element={<QuizPage/>} />
        <Route path='/challengePage' element={<ChallengePage/>} />
        <Route path='/rewardPage' element={<RewardsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
