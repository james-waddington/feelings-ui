import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Analyse from './Analyse';
import Record from './Record'

function App() {
  return (
    <BrowserRouter>
      <h1>Feelings</h1>
      <Routes>
        <Route path="/record/:project" element={<Record />}></Route>
        <Route path="/analyse/:project" element={<Analyse />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
