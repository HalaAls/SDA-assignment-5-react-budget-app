import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Budget from "./components/Budget";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <section className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/Budget" element={<Budget />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};
export default App;
