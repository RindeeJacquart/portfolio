import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../src/pages/Layout/Layout';
import Home from '../src/pages/home/Home';
import Business from '../src/pages/business/Business';
import './App.css';
import Websites from "../src/pages/Websites/Websites";
import OtherDesigns from "../src/pages/other-designs/OtherDesigns";

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