export default function Header({ title }) {
  return (
    <header className="w-full bg-white shadow p-5 mb-5">
      <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
    </header>
  );
}
