import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import LibraryHome from './pages/LibraryHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryHome />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
