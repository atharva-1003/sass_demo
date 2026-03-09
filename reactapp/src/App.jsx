import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import LibraryHome from './pages/LibraryHome';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryHome />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
