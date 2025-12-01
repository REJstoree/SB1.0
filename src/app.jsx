import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Card from './components/Card';

// Componentes de Página (a serem criados)
const Dashboard = () => (
  <Card title="Dashboard">
    <p>Bem-vindo ao painel de controle do Shopee Bot Professional.</p>
    <p>Funcionalidades a serem implementadas: Conexão com a API da Shopee, Gerenciamento de Tarefas, Logs de Execução.</p>
  </Card>
);
const Settings = () => (
  <Card title="Configurações">
    <p>Configurações do Bot e credenciais da API.</p>
  </Card>
);
const NotFound = () => (
  <Card title="404 - Não Encontrado">
    <p>A página que você está procurando não existe.</p>
  </Card>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Shopee Bot Professional (SB1.0)</h1>
          <nav className="mt-4 space-x-4">
            <a href="/" className="text-blue-600 hover:text-blue-800">Dashboard</a>
            <a href="/settings" className="text-blue-600 hover:text-blue-800">Configurações</a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
};

export default App;
