import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/home';
import Detail from '../Pages/detail';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemon/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
