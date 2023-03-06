import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import CardSite from "./pages/CardSite";
import Pagination from "./pages/Pagination";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter className="App">
        <Header/>
        <Routes>
            <Route path={"/"} element={<MainPage/>}/>
            <Route path={"/:id"} element={<CardSite/>}/>
            <Route path={"/pag"} element={<Pagination/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
