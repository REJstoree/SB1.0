import Header from "../components/Header";
import { useState } from "react";

export default function SendMessage() {
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const send = () => {
    alert(`Mensagem enviada para ${phone}:\n\n${msg}`);
  };

  return (
    <div className="w-full p-6">
      <Header title="Enviar Mensagem" />

      <div className="bg-white shadow p-6 rounded-lg w-full max-w-lg">
        <label className="block text-gray-600 mb-2">Número:</label>
        <input
          className="w-full border p-2 rounded mb-4"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label className="block text-gray-600 mb-2">Mensagem:</label>
        <textarea
          className="w-full border p-2 rounded mb-4"
          rows={4}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        <button
          onClick={send}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
