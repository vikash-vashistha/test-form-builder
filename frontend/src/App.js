import './App.css';
import { Routes, Route } from "react-router-dom";
import {QuestionSelect} from './pages/QuestionSelect';
import {QuestionList} from './pages/QuestionList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuestionSelect/>} />
      <Route path="/list" element={<QuestionList />} />
    </Routes>
  );
}

export default App;
