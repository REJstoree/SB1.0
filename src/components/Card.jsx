export default function Card({ title, value }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-gray-600">{title}</h3>
      <p className="text-3xl font-semibold mt-2">{value}</p>
    </div>
  );
}
