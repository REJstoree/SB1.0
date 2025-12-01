import { Home, Settings, Send, ShoppingCart, Layers } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    { icon: <Home size={20} />, text: "Dashboard", to: "/" },
    { icon: <Layers size={20} />, text: "Automação", to: "/automation" },
    { icon: <ShoppingCart size={20} />, text: "Shopee Converter", to: "/shopee" },
    { icon: <Send size={20} />, text: "Enviar Mensagem", to: "/send" },
    { icon: <Settings size={20} />, text: "Configurações", to: "/settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-5 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-6">Shoppe Bot</h1>

      {menu.map((item) => (
        <Link
          key={item.text}
          to={item.to}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          {item.icon}
          {item.text}
        </Link>
      ))}
    </aside>
  );
}
