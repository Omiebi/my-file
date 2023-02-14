// import logo from './logo.svg';
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Sidebar
        title="dashboard"
        zero="OVERVIEW"
        one="transaction"
        two="wallet/transaction"
        three="Roqqu Hub"
        four="NFT's"
        five="ACCOUNT"
      />
      <div className="nav-home-container">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
