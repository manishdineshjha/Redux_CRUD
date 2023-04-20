import "./App.css";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
import Login from "./components/Login";
import { createContext, useState } from "react";

export const AppContext = createContext();
function App() {
  let [auth, setAuth] = useState(false);

  return (
    <>
      <div className="app">
        <AppContext.Provider value={{ auth, setAuth }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Login />} />
              {auth ? (
                <>
                  <Route exact path="/create" element={<Create />} />
                  <Route exact path="/read" element={<Read />} />
                  <Route exact path="/edit/:id" element={<Update />} />
                </>
              ) : (
                <></>
              )}

              <Route path="*" element={<h1>Not a Page</h1>} />
            </Routes>
          </BrowserRouter>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
