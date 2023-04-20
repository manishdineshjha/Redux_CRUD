import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Read from './components/Read';
import Update from './components/Update';
import Login from './components/Login';

function App() {
  return (
    <>
    <div className="app">
    <BrowserRouter>
    <Navbar />
        <Routes>
        <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
