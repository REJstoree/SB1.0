import Header from "../components/Header";
import { useState } from "react";

export default function ShopeeConverter() {
  const [link, setLink] = useState("");
  const [converted, setConverted] = useState("");

  const convert = () => {
    setConverted(link + "?aff_id=SEU_CODIGO");
  };

  return (
    <div className="w-full p-6">
      <Header title="Conversor Shopee" />

      <div className="bg-white shadow p-6 rounded-lg w-full max-w-lg">
        <label className="block text-gray-600 mb-2">Link Shopee:</label>
        <input
          className="w-full border p-2 rounded mb-4"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <button
          onClick={convert}
          className="bg-orange-600 text-white px-4 py-2 rounded w-full hover:bg-orange-700"
        >
          Converter
        </button>

        {converted && (
          <div className="mt-4 p-3 bg-gray-100 border rounded">
            <p className="font-semibold">Link convertido:</p>
            <p>{converted}</p>
          </div>
        )}
      </div>
    </div>
  );
}
