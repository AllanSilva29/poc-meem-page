import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        {/* Outras rotas da aplicação podem ser adicionadas aqui no futuro */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
