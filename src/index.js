import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Home from './pages/home/Home';
import Business from './pages/business/Business';
import './App.css';
import Websites from "./pages/Websites/Websites";
import OtherDesigns from "./pages/other-designs/OtherDesigns";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path='/business' element={<Business />} />
        <Route path='/websites' element={<Websites />} />
        <Route path='/other-designs' element={ <OtherDesigns/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);