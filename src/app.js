import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Automation from "./pages/Automation";
import SendMessage from "./pages/SendMessage";
import ShopeeConverter from "./pages/ShopeeConverter";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/send" element={<SendMessage />} />
          <Route path="/shopee" element={<ShopeeConverter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
