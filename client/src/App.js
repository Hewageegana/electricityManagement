import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import CardList from "./components/electricityManagement/singleCard.js";
import AdminList from "./components/electricityManagement/List";
import AddElectricityType from "./components/electricityManagement/AddForm";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<CardList />} />
        <Route path="/adminList" element={<AdminList />} />
        <Route path="/addEleTyp" element={<AddElectricityType />} />
      </Routes>
    </Router>
  );
}

export default App;
