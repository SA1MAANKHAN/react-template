import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.component';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
