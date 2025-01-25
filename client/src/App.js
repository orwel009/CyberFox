import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import LoginRegister from './components/LogReg/LoginRegister';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard/>} />
        <Route path='/login' element={<LoginRegister/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
